/* Interactive 3D plant for the hero, built with Three.js. Falls back to the SVG drawing if WebGL is missing. */
(function () {
  const box = document.getElementById('plant3d');
  if (!box || !window.THREE) return;

  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { return; }
  if (!renderer.getContext()) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  box.classList.add('is-3d');
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.domElement.setAttribute('aria-hidden', 'true');
  box.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 2.2, 7.2);
  camera.lookAt(0, 1.55, 0);

  scene.add(new THREE.HemisphereLight(0xfff4e0, 0x35472c, 0.95));
  const sun = new THREE.DirectionalLight(0xffffff, 0.85);
  sun.position.set(3, 6, 4);
  scene.add(sun);

  // Seeded random so the plant looks the same on every visit
  let seed = 7;
  const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

  const C = { stem: 0x1f9e55, leaf: 0xc6ff3d, leafDark: 0x2fcf6a, petal: 0xf4ff5c, core: 0xff3d8b, soil: 0xff5b1f, moss: 0x9dff3d, stone: 0xffffff };
  const mat = c => new THREE.MeshStandardMaterial({ color: c, flatShading: true, roughness: 0.95, side: THREE.DoubleSide });

  const plant = new THREE.Group();
  scene.add(plant);
  const growers = []; // [object, start (0-1), duration]

  // Ground: soil disc, moss cushions and pebbles
  const soil = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.32, 0.3, 28), mat(C.soil));
  soil.position.y = -0.16;
  plant.add(soil);
  for (let i = 0; i < 18; i++) {
    const isMoss = i < 13;
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(isMoss ? 0.12 + rand() * 0.14 : 0.07 + rand() * 0.07, 0), mat(isMoss ? C.moss : C.stone));
    const a = rand() * Math.PI * 2, d = 0.3 + rand() * 0.8;
    m.position.set(Math.cos(a) * d, 0.02, Math.sin(a) * d);
    m.scale.y = isMoss ? 0.55 : 0.7;
    plant.add(m);
    if (isMoss) growers.push([m, rand() * 0.15, 0.25]);
  }

  // Stem
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.12, 0.8, 0.05), new THREE.Vector3(-0.1, 1.6, -0.05),
    new THREE.Vector3(0.06, 2.4, 0.02), new THREE.Vector3(0, 3.05, 0)
  ]);
  const stem = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, 0.06, 7), mat(C.stem));
  plant.add(stem);
  growers.push([stem, 0.1, 0.45]);

  // Leaf shape, gently curled
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.quadraticCurveTo(0.36, 0.38, 0, 1);
  shape.quadraticCurveTo(-0.36, 0.38, 0, 0);
  const leafGeo = new THREE.ShapeGeometry(shape, 10);
  const pos = leafGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i);
    pos.setZ(i, 0.22 * y * y - 0.25 * x * x);
  }
  leafGeo.computeVertexNormals();

  const leaves = [];
  const addLeaf = (t, angle, size, tilt, color, start) => {
    const pivot = new THREE.Group();
    pivot.position.copy(curve.getPoint(t));
    pivot.rotation.y = angle;
    const leaf = new THREE.Mesh(leafGeo, mat(color));
    leaf.rotation.z = -tilt;
    leaf.scale.setScalar(size);
    pivot.add(leaf);
    plant.add(pivot);
    leaves.push({ leaf, tilt, phase: rand() * 6 });
    growers.push([pivot, start, 0.3]);
  };
  // Two big basal leaves, then smaller leaves spiralling up (golden angle)
  addLeaf(0.02, 0.4, 0.95, 1.15, C.leafDark, 0.15);
  addLeaf(0.02, 3.6, 0.85, 1.2, C.leafDark, 0.2);
  [0.22, 0.36, 0.5, 0.63, 0.76].forEach((t, i) => {
    addLeaf(t, i * 2.4, 0.75 - i * 0.08, 0.95, i % 2 ? C.leaf : C.leafDark, 0.3 + i * 0.08);
  });

  // Flower
  const flower = new THREE.Group();
  flower.position.copy(curve.getPoint(1));
  for (let i = 0; i < 8; i++) {
    const p = new THREE.Group();
    p.rotation.y = (i / 8) * Math.PI * 2;
    const petal = new THREE.Mesh(leafGeo, mat(C.petal));
    petal.scale.set(0.62, 0.5, 0.5);
    petal.rotation.z = -1.35;
    p.add(petal);
    flower.add(p);
  }
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.13, 1), mat(C.core));
  core.position.y = 0.05;
  flower.add(core);
  plant.add(flower);
  growers.push([flower, 0.75, 0.25]);

  // Growth on load (skipped for reduced motion)
  const easeOut = x => 1 - Math.pow(1 - x, 3);
  const applyGrowth = p => growers.forEach(([o, s, d]) => {
    const k = easeOut(Math.min(Math.max((p - s) / d, 0), 1));
    o.scale.setScalar(Math.max(k, 0.0001));
  });
  applyGrowth(reduce ? 1 : 0);

  // Drag to rotate (mouse, touch, pen); arrow keys when focused
  let rotY = -0.4, vel = 0, dragging = false, lastX = 0;
  box.addEventListener('pointerdown', e => { dragging = true; lastX = e.clientX; box.setPointerCapture(e.pointerId); box.classList.add('is-dragging'); });
  box.addEventListener('pointermove', e => {
    if (!dragging) return;
    const dx = e.clientX - lastX; lastX = e.clientX;
    rotY += dx * 0.01; vel = dx * 0.01;
  });
  const stop = () => { dragging = false; box.classList.remove('is-dragging'); };
  box.addEventListener('pointerup', stop);
  box.addEventListener('pointercancel', stop);
  box.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { rotY -= 0.25; e.preventDefault(); }
    if (e.key === 'ArrowRight') { rotY += 0.25; e.preventDefault(); }
  });

  const resize = () => {
    const w = box.clientWidth, h = box.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(box);
  resize();

  // Only render while visible, to save battery
  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(box);

  const t0 = performance.now();
  let last = t0;
  function frame(now) {
    requestAnimationFrame(frame);
    if (!visible) { last = now; return; }
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    const time = (now - t0) / 1000;

    if (!reduce) {
      applyGrowth(Math.min(time / 2.6, 1));
      if (!dragging) { vel *= 0.94; rotY += vel + dt * 0.18; }
      leaves.forEach(l => { l.leaf.rotation.z = -l.tilt + Math.sin(time * 1.3 + l.phase) * 0.04; });
      flower.rotation.z = Math.sin(time * 0.9) * 0.03;
    } else if (!dragging) {
      vel *= 0.8; rotY += vel;
    }
    plant.rotation.y = rotY;
    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);
})();

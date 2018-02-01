var BABYLON;
(function (BABYLON) {
    var Main = /** @class */ (function () {
        /**
         * Constructor
         */
        function Main() {
            var _this = this;
            this.engine = new BABYLON.Engine(document.getElementById('renderCanvas'));
            this.scene = new BABYLON.Scene(this.engine);
            this.scene.enablePhysics(new BABYLON.Vector3(0, -10, 0), new BABYLON.CannonJSPlugin());
            this.camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(40, 30, 60), this.scene);
            this.camera.attachControl(this.engine.getRenderingCanvas());
            this.camera.setTarget(new BABYLON.Vector3(0, 0, 0));
            this.light = new BABYLON.PointLight('light', new BABYLON.Vector3(50, 70, 0), this.scene);
            // Ground and material
            this.ground = BABYLON.Mesh.CreateGround('ground', 100, 100, 100, this.scene);
            var groundColor = new BABYLON.StandardMaterial("material", this.scene);
            groundColor.diffuseColor = new BABYLON.Color3(0.7470, 0, 0);
            this.ground.material = groundColor;
            this.ground.physicsImpostor = new BABYLON.PhysicsImpostor(this.ground, BABYLON.PhysicsImpostor.BoxImpostor, {
                mass: 0
            });
            window.addEventListener("resize", function () { return _this.engine.resize(); });
            this.scene.debugLayer.show();
            // Setup physics 
            // Creates cubes
            var height = 15;
            var width = 10;
            var size = 5;
            var wood = new BABYLON.Texture('./assets/wood.jpg', this.scene);
            var leather = new BABYLON.Texture('./assets/leather.jpg', this.scene);
            var pool = new BABYLON.Texture('./assets/pool.png', this.scene);
            var normal = new BABYLON.Texture('./assets/bump_normal.png', this.scene);
            var material = new BABYLON.StandardMaterial('cubemat', this.scene);
            var material2 = new BABYLON.StandardMaterial('cubemat', this.scene);
            var material3 = new BABYLON.StandardMaterial('cubemat', this.scene);
            var boulePied = BABYLON.Mesh.CreateSphere('boulePied', 20, 2, this.scene);
            boulePied.position.x = 0;
            boulePied.position.y = 1;
            var pied = BABYLON.Mesh.CreateBox("box", 3, this.scene);
            pied.scaling.y = 3;
            pied.position.x = boulePied.position.x;
            pied.position.y = (9 / 2) + 2;
            material.diffuseTexture = wood;
            pied.material = material;
            var boulePied2 = BABYLON.Mesh.CreateSphere('boulePied', 20, 2, this.scene);
            boulePied2.position.x = 20;
            boulePied2.position.y = 1;
            boulePied2.position.z = 0;
            var pied2 = BABYLON.Mesh.CreateBox("box", 3, this.scene);
            pied2.scaling.y = 3;
            pied2.position.x = boulePied2.position.x;
            pied2.position.z = boulePied2.position.z;
            pied2.position.y = (9 / 2) + 2;
            material.diffuseTexture = wood;
            pied2.material = material;
            var boulePied3 = BABYLON.Mesh.CreateSphere('boulePied', 20, 2, this.scene);
            boulePied3.position.x = 20;
            boulePied3.position.y = 1;
            boulePied3.position.z = 40;
            var pied3 = BABYLON.Mesh.CreateBox("box", 3, this.scene);
            pied3.scaling.y = 3;
            pied3.position.x = boulePied3.position.x;
            pied3.position.z = boulePied3.position.z;
            pied3.position.y = (9 / 2) + 2;
            material.diffuseTexture = wood;
            pied3.material = material;
            var boulePied4 = BABYLON.Mesh.CreateSphere('boulePied', 20, 2, this.scene);
            boulePied4.position.x = 0;
            boulePied4.position.y = 1;
            boulePied4.position.z = 40;
            var pied4 = BABYLON.Mesh.CreateBox("box", 3, this.scene);
            pied4.scaling.y = 3;
            pied4.position.x = boulePied4.position.x;
            pied4.position.z = boulePied4.position.z;
            pied4.position.y = (9 / 2) + 2;
            material.diffuseTexture = wood;
            pied4.material = material;
            var plateau = BABYLON.Mesh.CreateBox("box", 1, this.scene);
            plateau.position.x = 10;
            plateau.scaling.x = 29;
            plateau.position.y = 12;
            plateau.scaling.y = 2;
            plateau.position.z = 20;
            plateau.scaling.z = 48;
            material2.diffuseTexture = pool;
            plateau.material = material2;
            var barriere = BABYLON.Mesh.CreateBox('l', 4, this.scene);
            barriere.scaling.z = 0.5;
            barriere.scaling.y = 12;
            barriere.position.y = (2 + 9 + 2);
            barriere.position.x = -3;
            barriere.position.z = 20;
            barriere.rotate(new BABYLON.Vector3(0.81, 0, 0), 1.5708);
            var barriere2 = BABYLON.Mesh.CreateBox('l', 4, this.scene);
            barriere2.scaling.z = 0.5;
            barriere2.scaling.y = 12;
            barriere2.position.y = (2 + 9 + 2);
            barriere2.position.x = 23;
            barriere2.position.z = 20;
            barriere2.rotate(new BABYLON.Vector3(0.81, 0, 0), 1.5708);
            var barriere3 = BABYLON.Mesh.CreateBox('l', 4, this.scene);
            barriere3.scaling.x = 0.5;
            barriere3.scaling.y = 7.5;
            barriere3.position.y = (2 + 9 + 2);
            barriere3.position.x = 10;
            barriere3.position.z = -2.5;
            barriere3.rotation.z = (Math.PI) / 2;
            //barriere3.rotate(new Vector3(0.81,0,   ), 1.5708);
            var barriere4 = BABYLON.Mesh.CreateBox('l', 4, this.scene);
            barriere4.scaling.x = 0.5;
            barriere4.scaling.y = 7.5;
            barriere4.position.y = (2 + 9 + 2);
            barriere4.position.x = 10;
            barriere4.position.z = 42.5;
            barriere4.rotation.z = (Math.PI) / 2;
            var barriereCSG = BABYLON.CSG.FromMesh(barriere);
            var barriere2CSG = BABYLON.CSG.FromMesh(barriere2);
            var barriere3CSG = BABYLON.CSG.FromMesh(barriere3);
            var barriere4CSG = BABYLON.CSG.FromMesh(barriere4);
            var unCSG1 = barriereCSG.union(barriere3CSG);
            var unCSG2 = barriere2CSG.union(barriere4CSG);
            var mat = new BABYLON.StandardMaterial("mat", this.scene);
            var newBar1 = unCSG1.toMesh("csg2", mat, this.scene, false);
            var newBar2 = unCSG2.toMesh("csg2", mat, this.scene, false);
            var newBarCSG = BABYLON.CSG.FromMesh(newBar1);
            var newBarCSG2 = BABYLON.CSG.FromMesh(newBar2);
            var unCSG3 = newBarCSG.union(newBarCSG2);
            var newRealBar = unCSG3.toMesh("bar", mat, this.scene, false);
            this.scene.removeMesh(barriere);
            this.scene.removeMesh(barriere2);
            this.scene.removeMesh(barriere3);
            this.scene.removeMesh(barriere4);
            this.scene.removeMesh(newBar1);
            this.scene.removeMesh(newBar2);
            var bouleX = 7;
            var bouleZ = 3;
            for (var i = 1; i < 12; i++) {
                var boule = BABYLON.Mesh.CreateSphere("boule" + i + "", 20, 2, this.scene);
                boule.position.y = 14;
                if (i < 5) {
                    boule.position.x = bouleX;
                    boule.position.z = bouleZ;
                    bouleX += 2;
                }
                if (4 < i && i < 8) {
                    if (i == 5) {
                        bouleX = 8;
                        bouleZ += 2;
                    }
                    boule.position.x = bouleX;
                    boule.position.z = bouleZ;
                    bouleX += 2;
                }
                if (7 < i && i < 10) {
                    if (i == 8) {
                        bouleX = 9;
                        bouleZ += 2;
                    }
                    boule.position.x = bouleX;
                    boule.position.z = bouleZ;
                    bouleX += 2;
                }
                if (i == 10) {
                    boule.position.x = 10;
                    boule.position.z = 9;
                }
                if (i == 11) {
                    boule.position.x = 10;
                    boule.position.z = 35;
                    this.setupActions(boule);
                }
                this.setupPhysics(boule);
            }
            // 1
            var hole = BABYLON.Mesh.CreateCylinder('hole', 5, 3.5, 3.5, 20, this.scene);
            hole.position.y = 13.7;
            hole.position.x = -0.6;
            hole.position.z = -0.6;
            var holeCSG = BABYLON.CSG.FromMesh(hole);
            var plateauCSG = BABYLON.CSG.FromMesh(plateau);
            var barCSG = BABYLON.CSG.FromMesh(newRealBar);
            var unionCSG = plateauCSG.subtract(holeCSG);
            var unionCSGB = barCSG.subtract(holeCSG);
            var mat = new BABYLON.StandardMaterial("mat", this.scene);
            var plateau2 = unionCSG.toMesh("csg2", mat, this.scene, true);
            var nbar = unionCSGB.toMesh('bar', mat, this.scene, true);
            this.scene.removeMesh(hole);
            this.scene.removeMesh(plateau);
            this.scene.removeMesh(newRealBar);
            //2
            var hole2 = BABYLON.Mesh.CreateCylinder('hole2', 5, 3.5, 3.5, 20, this.scene);
            hole2.position.y = 13.7;
            hole2.position.x = 20.6;
            hole2.position.z = -0.6;
            var holeCSG2 = BABYLON.CSG.FromMesh(hole2);
            var plateauCSG2 = BABYLON.CSG.FromMesh(plateau2);
            var barCSG2 = BABYLON.CSG.FromMesh(nbar);
            var unionCSG2 = plateauCSG2.subtract(holeCSG2);
            var unionCSGB2 = barCSG2.subtract(holeCSG2);
            var mat2 = new BABYLON.StandardMaterial("mat2", this.scene);
            var plateau3 = unionCSG2.toMesh("csg3", mat2, this.scene, true);
            var nbar2 = unionCSGB2.toMesh('bar', mat, this.scene, true);
            this.scene.removeMesh(hole2);
            this.scene.removeMesh(plateau2);
            this.scene.removeMesh(nbar);
            //3
            var hole3 = BABYLON.Mesh.CreateCylinder('hole2', 5, 3.5, 3.5, 20, this.scene);
            hole3.position.y = 13.7;
            hole3.position.x = 20.6;
            hole3.position.z = 40.6;
            var holeCSG3 = BABYLON.CSG.FromMesh(hole3);
            var plateauCSG3 = BABYLON.CSG.FromMesh(plateau3);
            var barCSG3 = BABYLON.CSG.FromMesh(nbar2);
            var unionCSG3 = plateauCSG3.subtract(holeCSG3);
            var unionCSGB3 = barCSG3.subtract(holeCSG3);
            var mat3 = new BABYLON.StandardMaterial("mat3", this.scene);
            var plateau4 = unionCSG3.toMesh("csg4", mat3, this.scene, true);
            var nbar3 = unionCSGB3.toMesh('bar', mat, this.scene, true);
            this.scene.removeMesh(hole3);
            this.scene.removeMesh(plateau3);
            this.scene.removeMesh(nbar2);
            //4
            var hole4 = BABYLON.Mesh.CreateCylinder('hole2', 5, 3.5, 3.5, 20, this.scene);
            hole4.position.y = 13.7;
            hole4.position.x = -0.6;
            hole4.position.z = 40.6;
            var holeCSG4 = BABYLON.CSG.FromMesh(hole4);
            var plateauCSG4 = BABYLON.CSG.FromMesh(plateau4);
            var barCSG4 = BABYLON.CSG.FromMesh(nbar3);
            var unionCSG4 = plateauCSG4.subtract(holeCSG4);
            var unionCSGB4 = barCSG4.subtract(holeCSG4);
            var mat4 = new BABYLON.StandardMaterial("mat4", this.scene);
            var plateau5 = unionCSG4.toMesh("csg5", mat4, this.scene, true);
            var nbar4 = unionCSGB4.toMesh('bar', mat, this.scene, true);
            this.scene.removeMesh(hole4);
            this.scene.removeMesh(plateau4);
            this.scene.removeMesh(nbar3);
            //5
            var hole5 = BABYLON.Mesh.CreateCylinder('hole2', 5, 3.5, 3.5, 20, this.scene);
            hole5.position.y = 13.7;
            hole5.position.x = -2;
            hole5.position.z = 20;
            var holeCSG5 = BABYLON.CSG.FromMesh(hole5);
            var plateauCSG5 = BABYLON.CSG.FromMesh(plateau5);
            var barCSG5 = BABYLON.CSG.FromMesh(nbar4);
            var unionCSG5 = plateauCSG5.subtract(holeCSG5);
            var unionCSGB5 = barCSG5.subtract(holeCSG5);
            var mat5 = new BABYLON.StandardMaterial("mat5", this.scene);
            var plateau6 = unionCSG5.toMesh("csg6", mat5, this.scene, true);
            var nbar5 = unionCSGB5.toMesh('bar', mat, this.scene, true);
            this.scene.removeMesh(hole5);
            this.scene.removeMesh(plateau5);
            this.scene.removeMesh(nbar4);
            //6
            var hole6 = BABYLON.Mesh.CreateCylinder('hole2', 5, 3.5, 3.5, 20, this.scene);
            hole6.position.y = 13.7;
            hole6.position.x = 22;
            hole6.position.z = 20;
            var holeCSG6 = BABYLON.CSG.FromMesh(hole6);
            var plateauCSG6 = BABYLON.CSG.FromMesh(plateau6);
            var barCSG6 = BABYLON.CSG.FromMesh(nbar5);
            var unionCSG6 = plateauCSG6.subtract(holeCSG6);
            var unionCSGB6 = barCSG6.subtract(holeCSG6);
            var mat6 = new BABYLON.StandardMaterial("mat5", this.scene);
            var plateau7 = unionCSG6.toMesh("csg6", mat6, this.scene, true);
            var nbar6 = unionCSGB6.toMesh('bar', mat, this.scene, true);
            this.scene.removeMesh(hole6);
            this.scene.removeMesh(plateau6);
            this.scene.removeMesh(nbar5);
            material2.diffuseTexture = pool;
            plateau7.material = material2;
            plateau7.physicsImpostor = new BABYLON.PhysicsImpostor(plateau7, BABYLON.PhysicsImpostor.MeshImpostor, {
                mass: 0
            });
            nbar6.material = material;
            material.wireframe = true;
            nbar6.physicsImpostor = new BABYLON.PhysicsImpostor(nbar6, BABYLON.PhysicsImpostor.MeshImpostor, {
                mass: 0
            });
        }
        //Physics for cube
        Main.prototype.setupActions = function (ball) {
            var _this = this;
            ball.actionManager = new BABYLON.ActionManager(this.scene);
            ball.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnLeftPickTrigger, function (evt) {
                var direction = ball.position.subtract(_this.scene.activeCamera.position);
                direction = direction.multiply(new BABYLON.Vector3(3, 3, 3));
                ball.applyImpulse(direction, _this.scene.pick(evt.pointerX, evt.pointerY).pickedPoint);
            }));
        };
        Main.prototype.setupPhysics = function (ball) {
            ball.physicsImpostor = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.SphereImpostor, {
                mass: 1
            });
        };
        /**
         * Runs the engine to render the scene into the canvas
         */
        Main.prototype.run = function () {
            var _this = this;
            this.engine.runRenderLoop(function () {
                _this.scene.render();
            });
        };
        return Main;
    }());
    BABYLON.Main = Main;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var OceanMaterial = /** @class */ (function () {
        /**
         * Constructor
         * @param scene the scene where to add the material
         */
        function OceanMaterial(scene) {
            var _this = this;
            this.time = 0;
            this.material = new BABYLON.ShaderMaterial('ocean', scene, {
                vertexElement: './shaders/ocean',
                fragmentElement: './shaders/ocean',
            }, {
                attributes: ['position', 'uv'],
                uniforms: ['worldViewProjection', 'time'],
                samplers: ['diffuseSampler1', 'diffuseSampler2'],
                defines: [],
            });
            // Textures
            this.diffuseSampler1 = new BABYLON.Texture('./assets/diffuse.png', scene);
            this.diffuseSampler2 = this.diffuseSampler1.clone(); // new Texture('./assets/diffuse.png', scene);
            // Bind
            this.material.onBind = function (mesh) {
                _this.time += scene.getEngine().getDeltaTime() * 0.003;
                _this.material.setFloat('time', _this.time);
                _this.material.setTexture('diffuseSampler1', _this.diffuseSampler1);
                _this.material.setTexture('diffuseSampler2', _this.diffuseSampler2);
            };
        }
        return OceanMaterial;
    }());
    BABYLON.OceanMaterial = OceanMaterial;
})(BABYLON || (BABYLON = {}));
//# sourceMappingURL=index.js.map
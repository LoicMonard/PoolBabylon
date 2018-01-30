var BABYLON;
(function (BABYLON) {
    var Main = /** @class */ (function () {
        /**
         * Constructor
         */
        function Main() {
            this.engine = new BABYLON.Engine(document.getElementById('renderCanvas'));
            this.scene = new BABYLON.Scene(this.engine);
            this.scene.enablePhysics(new BABYLON.Vector3(0, -0.81, 0), new BABYLON.CannonJSPlugin());
            this.camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(40, 30, 60), this.scene);
            this.camera.attachControl(this.engine.getRenderingCanvas());
            this.camera.setTarget(new BABYLON.Vector3(0, 0, 0));
            this.light = new BABYLON.PointLight('light', new BABYLON.Vector3(50, 70, 0), this.scene);
            // Ground and amterial
            this.ground = BABYLON.Mesh.CreateGround('ground', 512, 512, 32, this.scene);
            var groundColor = new BABYLON.StandardMaterial("material", this.scene);
            groundColor.diffuseColor = new BABYLON.Color3(0.7470, 0, 0);
            this.ground.material = groundColor;
            this.ground.physicsImpostor = new BABYLON.PhysicsImpostor(this.ground, BABYLON.PhysicsImpostor.BoxImpostor, {
                mass: 0
            });
            // Setup physics 
            // Creates cubes
            var height = 15;
            var width = 10;
            var size = 5;
            var wood = new BABYLON.Texture('./assets/wood.jpg', this.scene);
            var pool = new BABYLON.Texture('./assets/pool.png', this.scene);
            var normal = new BABYLON.Texture('./assets/bump_normal.png', this.scene);
            var material = new BABYLON.StandardMaterial('cubemat', this.scene);
            var material2 = new BABYLON.StandardMaterial('cubemat', this.scene);
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
            var barriere = BABYLON.Mesh.CreateCylinder('l', 48, 3, 3, 20, this.scene, null, null, 0);
            barriere.position.y = (2 + 9 + 2);
            barriere.position.x = -3;
            barriere.position.z = 20;
            barriere.rotate(new BABYLON.Vector3(0.81, 0, 0), 1.5708);
            var barriere2 = BABYLON.Mesh.CreateCylinder('l', 48, 3, 3, 20, this.scene, null, null, 0);
            barriere2.position.y = (2 + 9 + 2);
            barriere2.position.x = 23;
            barriere2.position.z = 20;
            barriere2.rotate(new BABYLON.Vector3(0.81, 0, 0), 1.5708);
            var barriere3 = BABYLON.Mesh.CreateCylinder('l', 48, 5, 3, 20, this.scene, null, null, 0);
            barriere3.position.y = (2 + 9 + 2);
            barriere3.position.x = 23;
            barriere3.position.z = 20;
            barriere3.rotate(new BABYLON.Vector3(0.81, 0, 1), 1.5708);
            var barriere4 = BABYLON.Mesh.CreateCylinder('l', 48, 3, 3, 20, this.scene, null, null, 0);
            barriere4.position.y = (2 + 9 + 2);
            barriere4.position.x = 23;
            barriere4.position.z = 20;
            barriere4.rotate(new BABYLON.Vector3(0.81, 0, 0), 1.5708);
            /*for(var i = 0; i < height; i++) {
              var offsetX = -(width / 2) * 5;
              for(var j = 0; j < width; j++) {
                const cube = Mesh.CreateBox('cube', size, this.scene)
                var cubee = Mesh.CreateSphere("mySphere", 4, 4, this.scene);
                
                cube.position.x = offsetX;
                cube.position.y = (5 * i) + size / 2;

                const material = new StandardMaterial('cubemat', this.scene)
                material.diffuseTexture = diffuse;
                cube.material = material;
                //material.bumpTexture = normal;
                
                
                offsetX += size;

                this.setupActions(cube);
                this.setupPhysics(cube);
              }
            }*/
        }
        //Physics for cube
        Main.prototype.setupActions = function (cube) {
            var _this = this;
            cube.actionManager = new BABYLON.ActionManager(this.scene);
            cube.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnLeftPickTrigger, function (evt) {
                var direction = cube.position.subtract(_this.scene.activeCamera.position);
                cube.applyImpulse(direction, new BABYLON.Vector3(0, -1, 0));
            }));
        };
        Main.prototype.setupPhysics = function (cube) {
            cube.physicsImpostor = new BABYLON.PhysicsImpostor(cube, BABYLON.PhysicsImpostor.BoxImpostor, {
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
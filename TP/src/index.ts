module BABYLON {
    export class Main {
        // Public members
        public engine: Engine;
        public scene: Scene;
        public camera: FreeCamera;
        public light: PointLight;
        public ground: GroundMesh;

        /**
         * Constructor
         */
        constructor () {
            this.engine = new Engine(<HTMLCanvasElement> document.getElementById('renderCanvas'));
            this.scene = new Scene(this.engine);
            this.scene.enablePhysics(new Vector3(0, -0.81, 0), new CannonJSPlugin());

            this.camera = new FreeCamera('camera', new Vector3(40, 30, 60), this.scene);
            this.camera.attachControl(this.engine.getRenderingCanvas());
            this.camera.setTarget(new Vector3(0, 0, 0));

            this.light = new PointLight('light', new Vector3(50, 70, 0), this.scene);

            // Ground and amterial
            this.ground = <GroundMesh> Mesh.CreateGround('ground', 512, 512, 32, this.scene);
            var groundColor = new BABYLON.StandardMaterial("material", this.scene);
            groundColor.diffuseColor = new BABYLON.Color3(0.7470, 0, 0);
            this.ground.material = groundColor;

            this.ground.physicsImpostor = new PhysicsImpostor(this.ground, PhysicsImpostor.BoxImpostor, {
              mass: 0
            })
            
            // Setup physics 

            
            // Creates cubes
            var height = 15;
            var width = 10;
            var size = 5;

            const wood = new Texture('./assets/wood.jpg', this.scene)
            const pool = new Texture('./assets/pool.png', this.scene)
            const normal = new Texture('./assets/bump_normal.png', this.scene)

            const material = new StandardMaterial('cubemat', this.scene)
            const material2 = new StandardMaterial('cubemat', this.scene)

            let boulePied = Mesh.CreateSphere('boulePied', 20, 2, this.scene);
            boulePied.position.x = 0;
            boulePied.position.y = 1;

            let pied = Mesh.CreateBox("box",  3, this.scene);
            pied.scaling.y = 3;
            pied.position.x = boulePied.position.x;
            pied.position.y = (9/2) + 2;
            material.diffuseTexture = wood;
            pied.material = material;
            
            let boulePied2 = Mesh.CreateSphere('boulePied', 20, 2, this.scene);
            boulePied2.position.x = 20;
            boulePied2.position.y = 1;
            boulePied2.position.z = 0;

            let pied2 = Mesh.CreateBox("box",  3, this.scene);
            pied2.scaling.y = 3;
            pied2.position.x = boulePied2.position.x;
            pied2.position.z = boulePied2.position.z;
            pied2.position.y = (9/2) + 2;
            material.diffuseTexture = wood;
            pied2.material = material;
            
            let boulePied3 = Mesh.CreateSphere('boulePied', 20, 2, this.scene);
            boulePied3.position.x = 20;
            boulePied3.position.y = 1;
            boulePied3.position.z = 40;

            let pied3 = Mesh.CreateBox("box",  3, this.scene);
            pied3.scaling.y = 3;
            pied3.position.x = boulePied3.position.x;
            pied3.position.z = boulePied3.position.z;
            pied3.position.y = (9/2) + 2;
            material.diffuseTexture = wood;
            pied3.material = material;

            let boulePied4 = Mesh.CreateSphere('boulePied', 20, 2, this.scene);
            boulePied4.position.x = 0;
            boulePied4.position.y = 1;
            boulePied4.position.z = 40;

            let pied4 = Mesh.CreateBox("box",  3, this.scene);
            pied4.scaling.y = 3;
            pied4.position.x = boulePied4.position.x;
            pied4.position.z = boulePied4.position.z;
            pied4.position.y = (9/2) + 2;
            material.diffuseTexture = wood;
            pied4.material = material;

            let plateau = Mesh.CreateBox("box", 1, this.scene);
            plateau.position.x = 10;
            plateau.scaling.x = 29;
            plateau.position.y = 12;
            plateau.scaling.y = 2;
            plateau.position.z = 20;
            plateau.scaling.z = 48;
            material2.diffuseTexture = pool;
            plateau.material = material2;

            let barriere = Mesh.CreateCylinder('l', 48, 3, 3, 20, this.scene, null, null, 0);
            barriere.position.y = (2 + 9 + 2);
            barriere.position.x = -3;
            barriere.position.z = 20;
            barriere.rotate(new Vector3(0.81,0,0), 1.5708);

            let barriere2 = Mesh.CreateCylinder('l', 48, 3, 3, 20, this.scene, null, null, 0);
            barriere2.position.y = (2 + 9 + 2);
            barriere2.position.x = 23;
            barriere2.position.z = 20;
            barriere2.rotate(new Vector3(0.81,0,0), 1.5708);

            let barriere3 = Mesh.CreateCylinder('l', 48, 5, 3, 20, this.scene, null, null, 0);
            barriere3.position.y = (2 + 9 + 2);
            barriere3.position.x = 23;
            barriere3.position.z = 20;
            barriere3.rotate(new Vector3(0.81,0,1), 1.5708);
            
            let barriere4 = Mesh.CreateCylinder('l', 48, 3, 3, 20, this.scene, null, null, 0);
            barriere4.position.y = (2 + 9 + 2);
            barriere4.position.x = 23;
            barriere4.position.z = 20;
            barriere4.rotate(new Vector3(0.81,0,0), 1.5708);

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
        
        public setupActions (cube: Mesh): void {
          cube.actionManager = new ActionManager(this.scene);
          cube.actionManager.registerAction(new ExecuteCodeAction(
            ActionManager.OnLeftPickTrigger, 
            (evt) => {
              const direction = cube.position.subtract(this.scene.activeCamera.position);
              cube.applyImpulse(direction, new Vector3(0, -1, 0));
            }
          ));
        }

        public setupPhysics (cube: Mesh) {
          cube.physicsImpostor = new PhysicsImpostor(cube, PhysicsImpostor.BoxImpostor, {
            mass: 1
          });
        }

        /**
         * Runs the engine to render the scene into the canvas
         */
        public run () {
            this.engine.runRenderLoop(() => {
                this.scene.render();
            });
        }
    }
}

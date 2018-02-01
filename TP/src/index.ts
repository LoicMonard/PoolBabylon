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
            this.scene.enablePhysics(new Vector3(0, -10, 0), new CannonJSPlugin());

            this.camera = new FreeCamera('camera', new Vector3(40, 30, 60), this.scene);
            this.camera.attachControl(this.engine.getRenderingCanvas());
            this.camera.setTarget(new Vector3(0, 0, 0));

            this.light = new PointLight('light', new Vector3(50, 70, 0), this.scene);

            // Ground and material
            this.ground = <GroundMesh> Mesh.CreateGround('ground', 100, 100, 100, this.scene);
            var groundColor = new BABYLON.StandardMaterial("material", this.scene);
            groundColor.diffuseColor = new BABYLON.Color3(0.7470, 0, 0);
            this.ground.material = groundColor;

            this.ground.physicsImpostor = new PhysicsImpostor(this.ground, PhysicsImpostor.BoxImpostor, {
              mass: 0
            })
            
            window.addEventListener("resize", () => this.engine.resize());
            this.scene.debugLayer.show();
            // Setup physics 

            
            // Creates cubes
            var height = 15;
            var width = 10;
            var size = 5;

            const wood = new Texture('./assets/wood.jpg', this.scene)
            const leather = new Texture('./assets/leather.jpg', this.scene)
            const pool = new Texture('./assets/pool.png', this.scene)
            const normal = new Texture('./assets/bump_normal.png', this.scene)

            const material = new StandardMaterial('cubemat', this.scene)
            const material2 = new StandardMaterial('cubemat', this.scene)
            const material3 = new StandardMaterial('cubemat', this.scene)

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
            

            let barriere = Mesh.CreateBox('l', 4, this.scene);
            barriere.scaling.z = 0.5;
            barriere.scaling.y = 12;
            barriere.position.y = (2 + 9 + 2);
            barriere.position.x = -3;
            barriere.position.z = 20;
            barriere.rotate(new Vector3(0.81,0,0), 1.5708);

            let barriere2 = Mesh.CreateBox('l', 4, this.scene);
            barriere2.scaling.z = 0.5;
            barriere2.scaling.y = 12;
            barriere2.position.y = (2 + 9 + 2);
            barriere2.position.x = 23;
            barriere2.position.z = 20;
            barriere2.rotate(new Vector3(0.81,0,0), 1.5708);
            
            let barriere3 = Mesh.CreateBox('l', 4, this.scene);
            barriere3.scaling.x = 0.5;
            barriere3.scaling.y = 7.5;
            barriere3.position.y = (2 + 9 + 2);
            barriere3.position.x = 10;
            barriere3.position.z = -2.5;
            barriere3.rotation.z = (Math.PI)/2;
            //barriere3.rotate(new Vector3(0.81,0,   ), 1.5708);

            let barriere4 = Mesh.CreateBox('l', 4, this.scene);
            barriere4.scaling.x = 0.5;
            barriere4.scaling.y = 7.5;
            barriere4.position.y = (2 + 9 + 2);
            barriere4.position.x = 10;
            barriere4.position.z = 42.5;
            barriere4.rotation.z = (Math.PI)/2;

            var barriereCSG = CSG.FromMesh(barriere);
            var barriere2CSG = CSG.FromMesh(barriere2);
            var barriere3CSG = CSG.FromMesh(barriere3);
            var barriere4CSG = CSG.FromMesh(barriere4);

            var unCSG1 = barriereCSG.union(barriere3CSG);
            var unCSG2 = barriere2CSG.union(barriere4CSG);
            var mat = new BABYLON.StandardMaterial("mat", this.scene);
            var newBar1 = unCSG1.toMesh("csg2", mat, this.scene, false);
            var newBar2 = unCSG2.toMesh("csg2", mat, this.scene, false);
            var newBarCSG = CSG.FromMesh(newBar1);
            var newBarCSG2 = CSG.FromMesh(newBar2);
            var unCSG3 = newBarCSG.union(newBarCSG2);
            var newRealBar = unCSG3.toMesh("bar", mat, this.scene, false);

            this.scene.removeMesh(barriere);
            this.scene.removeMesh(barriere2);
            this.scene.removeMesh(barriere3);
            this.scene.removeMesh(barriere4);
            this.scene.removeMesh(newBar1);
            this.scene.removeMesh(newBar2);
            

            let bouleX = 7;
            let bouleZ = 3;

            for(let i = 1; i < 12; i++) {
              const boule = Mesh.CreateSphere("boule"+i+"", 20, 2, this.scene);
              boule.position.y = 14;
              if( i < 5) {
                boule.position.x = bouleX;
                boule.position.z = bouleZ;
                bouleX += 2;
              }
              if(4 <  i && i < 8) {
                if( i == 5) {
                  bouleX = 8 ;
                  bouleZ += 2;
                }
                boule.position.x = bouleX;
                boule.position.z = bouleZ;
                bouleX += 2;
              }
              if(7 < i && i < 10) {
                if( i == 8) {
                  bouleX = 9;
                  bouleZ += 2;
                }
                boule.position.x = bouleX;
                boule.position.z = bouleZ;
                bouleX += 2;
              }
              if(i == 10) {
                boule.position.x = 10;
                boule.position.z = 9;
              }
              if(i == 11) {
                boule.position.x = 10;
                boule.position.z = 35;
                this.setupActions(boule);
              }
              this.setupPhysics(boule);
            }

              // 1
              const hole = Mesh.CreateCylinder('hole', 5, 3.5, 3.5, 20, this.scene);
              hole.position.y = 13.7;
              hole.position.x = -0.6;
              hole.position.z = -0.6;
              let holeCSG = CSG.FromMesh(hole);
              let plateauCSG = CSG.FromMesh(plateau);
              let barCSG = CSG.FromMesh(newRealBar);

              let unionCSG = plateauCSG.subtract(holeCSG);
              let unionCSGB = barCSG.subtract(holeCSG)
              var mat = new BABYLON.StandardMaterial("mat", this.scene);
              var plateau2 = unionCSG.toMesh("csg2", mat, this.scene, true);
              var nbar = unionCSGB.toMesh('bar', mat, this.scene, true);

              this.scene.removeMesh(hole);
              this.scene.removeMesh(plateau);
              this.scene.removeMesh(newRealBar);
              
              //2
              const hole2 = Mesh.CreateCylinder('hole2', 5, 3.5, 3.5, 20, this.scene);
              hole2.position.y = 13.7;
              hole2.position.x = 20.6;
              hole2.position.z = -0.6;
              let holeCSG2 = CSG.FromMesh(hole2);
              let plateauCSG2 = CSG.FromMesh(plateau2);
              let barCSG2 = CSG.FromMesh(nbar);
              
              let unionCSG2 = plateauCSG2.subtract(holeCSG2);
              let unionCSGB2 = barCSG2.subtract(holeCSG2)
              var mat2 = new BABYLON.StandardMaterial("mat2", this.scene);
              var plateau3 = unionCSG2.toMesh("csg3", mat2, this.scene, true);
              var nbar2 = unionCSGB2.toMesh('bar', mat, this.scene, true);
              
              this.scene.removeMesh(hole2);
              this.scene.removeMesh(plateau2);
              this.scene.removeMesh(nbar);
              
              //3
              const hole3 = Mesh.CreateCylinder('hole2', 5, 3.5, 3.5, 20, this.scene);
              hole3.position.y = 13.7;
              hole3.position.x = 20.6;
              hole3.position.z = 40.6;
              let holeCSG3 = CSG.FromMesh(hole3);
              let plateauCSG3 = CSG.FromMesh(plateau3);
              let barCSG3 = CSG.FromMesh(nbar2);
              
              let unionCSG3 = plateauCSG3.subtract(holeCSG3);
              let unionCSGB3 = barCSG3.subtract(holeCSG3)
              var mat3 = new BABYLON.StandardMaterial("mat3", this.scene);
              var plateau4 = unionCSG3.toMesh("csg4", mat3, this.scene, true);
              var nbar3 = unionCSGB3.toMesh('bar', mat, this.scene, true);
              
              this.scene.removeMesh(hole3);
              this.scene.removeMesh(plateau3);
              this.scene.removeMesh(nbar2);
              
              //4
              const hole4 = Mesh.CreateCylinder('hole2', 5, 3.5, 3.5, 20, this.scene);
              hole4.position.y = 13.7;
              hole4.position.x = -0.6;
              hole4.position.z = 40.6;
              let holeCSG4 = CSG.FromMesh(hole4);
              let plateauCSG4 = CSG.FromMesh(plateau4);
              let barCSG4 = CSG.FromMesh(nbar3);
              
              let unionCSG4 = plateauCSG4.subtract(holeCSG4);
              let unionCSGB4 = barCSG4.subtract(holeCSG4)
              var mat4 = new BABYLON.StandardMaterial("mat4", this.scene);
              var plateau5 = unionCSG4.toMesh("csg5", mat4, this.scene, true);
              var nbar4 = unionCSGB4.toMesh('bar', mat, this.scene, true);
              
              this.scene.removeMesh(hole4);
              this.scene.removeMesh(plateau4);
              this.scene.removeMesh(nbar3);
              
              //5
              const hole5 = Mesh.CreateCylinder('hole2', 5, 3.5, 3.5, 20, this.scene);
              hole5.position.y = 13.7;
              hole5.position.x = -2;
              hole5.position.z = 20;
              let holeCSG5 = CSG.FromMesh(hole5);
              let plateauCSG5 = CSG.FromMesh(plateau5);
              let barCSG5 = CSG.FromMesh(nbar4);
              
              let unionCSG5 = plateauCSG5.subtract(holeCSG5);
              let unionCSGB5 = barCSG5.subtract(holeCSG5)
              var mat5 = new BABYLON.StandardMaterial("mat5", this.scene);
              var plateau6 = unionCSG5.toMesh("csg6", mat5, this.scene, true);
              var nbar5 = unionCSGB5.toMesh('bar', mat, this.scene, true);
              
              this.scene.removeMesh(hole5);
              this.scene.removeMesh(plateau5);
              this.scene.removeMesh(nbar4);
             
              //6
              const hole6 = Mesh.CreateCylinder('hole2', 5, 3.5, 3.5, 20, this.scene);
              hole6.position.y = 13.7;
              hole6.position.x = 22;
              hole6.position.z = 20;
              let holeCSG6 = CSG.FromMesh(hole6);
              let plateauCSG6 = CSG.FromMesh(plateau6);
              let barCSG6 = CSG.FromMesh(nbar5);
              
              let unionCSG6 = plateauCSG6.subtract(holeCSG6);
              let unionCSGB6 = barCSG6.subtract(holeCSG6)
              var mat6 = new BABYLON.StandardMaterial("mat5", this.scene);
              var plateau7 = unionCSG6.toMesh("csg6", mat6, this.scene, true);
              var nbar6 = unionCSGB6.toMesh('bar', mat, this.scene, true);
              
              this.scene.removeMesh(hole6);
              this.scene.removeMesh(plateau6);
              this.scene.removeMesh(nbar5);
              
              material2.diffuseTexture = pool;
              plateau7.material = material2;
              
              
              plateau7.physicsImpostor = new PhysicsImpostor(plateau7, PhysicsImpostor.MeshImpostor, {
                mass: 0
              })

              nbar6.material = material;
              
              nbar6.physicsImpostor = new PhysicsImpostor(nbar6, PhysicsImpostor.MeshImpostor, {
                mass: 0
              })
        }

        //Physics for cube
        
        public setupActions (ball: Mesh): void {
          ball.actionManager = new ActionManager(this.scene);
          ball.actionManager.registerAction(new ExecuteCodeAction(
            ActionManager.OnLeftPickTrigger, 
            (evt) => {
              let direction = ball.position.subtract(this.scene.activeCamera.position);
              direction = direction.multiply(new Vector3(3, 3, 3));
              ball.applyImpulse(direction, this.scene.pick(evt.pointerX, evt.pointerY).pickedPoint);
            }
          ));
        }

        public setupPhysics (ball: Mesh) {
          ball.physicsImpostor = new PhysicsImpostor(ball, PhysicsImpostor.SphereImpostor, {
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

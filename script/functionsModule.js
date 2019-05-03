define(['dojo/dom', 'dojo/on', 'dojox/grid/DataGrid', "dojo/request", "dojo/domReady!"   
], function(dom, on, DataGrid, request	){

	return{

			getAbilities: function(array){

				var abilities= "";
            	for(i=0; i < array.length; i++){ 
                	
                	abilities+= array[i].ability.name + ", " ;
            	}

            	return abilities;
			},



			getDataGrid: function(dataStore){

				return new DataGrid({
                    			store: dataStore,
                    			autoHeight: true,
                    			autoWidth: true, //not recommended in doc
                    			structure: [
                        			{ name: "Name", field: "name", width: "100px" },
                        			{ name: "Order", field: "order", width: "100px" },
                        			{ name: "Weight", field: "weight", width: "100px" },
                        			{ name: "Height", field: "height", width: "100px" },
                        			{ name: "Base Experience", field: "baseexperience", width: "100px" },
                        			{ name: "Abilities", field: "abilities", width: "200px"}
                   	 			]
                    			}, "gridDiv");
			},	


			//Inside request cant return an object 
			//So i just passed the data (from request) and create the pokemon directly
			createPokemon: function(data){
				
				return {name: data.name, order: data.order, weight: data.weight, height: data.height, 
								baseexperience: data.base_experience,
                    			abilities: this.getAbilities(data.abilities)};

			}



	};






});
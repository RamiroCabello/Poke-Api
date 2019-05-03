require(['dojo/dom', 'dojo/on', "dojo/json", 'dojox/grid/DataGrid', "dojo/request", "dojo/store/Memory", "dojo/data/ObjectStore", "dojox/data/JsonRestStore", "script/functionsModule", "dojo/dom-style", "dojo/domReady!"   
], function(dom, on, JSON, DataGrid, request, Memory, ObjectStore, JsonRestStore, functionsModule, domStyle){

    var grid;

    on(dom.byId("searchButton"), "click", function(evt){

        var dataStore;
        var searchInput= dom.byId("searchInput").value; 
        var pokeData = [];


        request("https://pokeapi.co/api/v2/pokemon/" + searchInput, {handleAs: "json"}).then(function(data){


            pokeData.push(functionsModule.createPokemon(data));

            dataStore = new ObjectStore({ objectStore: new Memory({ data: pokeData }) });    
            
            if (grid == undefined) grid = functionsModule.getDataGrid(dataStore);    
            else    grid.setStore(dataStore);
                       
            grid.startup();   
            
            domStyle.set(dom.byId('errorAlert'), "display", "none");          
            
        },
        function(error){
            
            domStyle.set(dom.byId('errorAlert'), "display", "block");
            
        }
        )




        
        



            
            





    });
});



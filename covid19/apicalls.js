// All Countries
        fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20desc&resultOffset=0&resultRecordCount=1000&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                    active: x.Active || 0,
                }));
                console.log( data );
                // data.pop();
                let maxCases = Math.max( ...data.map( x => x.cases ) );
                
                grouped = [];

data.forEach(function (a) {
    var key = ['country'].map(function (k) { return a[k]; }).join('|');
    if (!this[key]) {
        this[key] = { country: a.country, cases: 0, deaths: 0, recovered: 0, active: 0, formattedDate: a.formattedDate};
        grouped.push(this[key]);
    }
    this[key].formattedDate = a.formattedDate;
    this[key].cases += a.cases;
    this[key].deaths += a.deaths;
    this[key].recovered += a.recovered;
    this[key].active += a.active;
}, Object.create(null));
                
                let totalCases = 0;
                let totalDeaths = 0;
                let totalRecovered = 0;
                
                grouped.forEach( (x,i) => {
                    $( "#breakdown tr:last" ).after( `
                      <tr>
                        <td>${x.country}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getLessIsBetterHighlight( x.active / x.cases )}">${x.active} <small>(${ ( x.active / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                      
                      totalCases += x.cases;
                      totalDeaths += x.deaths;
                      totalRecovered += x.recovered;
                });
                
                $( "#totalcasesdatatable tr:last" ).after( `
                      <tr>
                        <td>${totalCases}</td>
                        <td>${totalDeaths}</td>
                        <td>${totalRecovered}</td>
                      </tr>` );
                
				
				sortTable(1,"breakdown");
            }
        });
        
        
        

        // China in Detail
         fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=111&resultRecordCount=40&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "Mainland China" || x.Country_Region === "China" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    province: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );
                
                // Max after Hubei (Wuhan)
                let maxCases = Math.max( ...data.filter( x => x.province !== "Hubei" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-china tr:last" ).after( `
                      <tr>
                        <td class="table-${x.province === "Hubei" ? "secondary" : "default"}">${x.province}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                
               sortTable(1,"breakdown-china");
            }
        });
		
        
        
        
        
        
		// USA in Detail
        fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=704&resultRecordCount=70&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "US" || x.Country_Region === "USA" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    state: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );

                // Max after New York
                let maxCases = Math.max( ...data.filter( x => x.state !== "Dummy" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-usa tr:last" ).after( `
                      <tr>
                        <td class="table-${x.state === "Dummy" ? "secondary" : "default"}">${x.state}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                sortTable(1, "breakdown-usa");
            }
        });




         // India in Detail
         fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=250&resultRecordCount=40&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "India" || x.Country_Region === "India" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    province: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );
                
                // Max after Hubei (Wuhan)
                let maxCases = Math.max( ...data.filter( x => x.province !== "Dummy" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-india tr:last" ).after( `
                      <tr>
                        <td class="table-${x.province === "Dummy" ? "secondary" : "default"}">${x.province}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                
               sortTable(1,"breakdown-india");
            }
        });



         // Japan in Detail
         fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=312&resultRecordCount=60&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "Japan" || x.Country_Region === "Japan" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    province: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );
                
                // Max after Hubei (Wuhan)
                let maxCases = Math.max( ...data.filter( x => x.province !== "Dummy" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-japan tr:last" ).after( `
                      <tr>
                        <td class="table-${x.province === "Dummy" ? "secondary" : "default"}">${x.province}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                
               sortTable(1,"breakdown-japan");
            }
        });






         // Canada in Detail
         fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=76&resultRecordCount=20&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "Canada" || x.Country_Region === "Canada" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    province: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );
                
                // Max after Hubei (Wuhan)
                let maxCases = Math.max( ...data.filter( x => x.province !== "Dummy" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-canada tr:last" ).after( `
                      <tr>
                        <td class="table-${x.province === "Dummy" ? "secondary" : "default"}">${x.province}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                
               sortTable(1,"breakdown-canada");
            }
        });






         // Australia in Detail
         fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=8&resultRecordCount=10&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "Australia" || x.Country_Region === "Australia" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    province: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );
                
                // Max after Hubei (Wuhan)
                let maxCases = Math.max( ...data.filter( x => x.province !== "Dummy" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-australia tr:last" ).after( `
                      <tr>
                        <td class="table-${x.province === "Dummy" ? "secondary" : "default"}">${x.province}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                
               sortTable(1,"breakdown-australia");
            }
        });






         // UK in Detail
         fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=680&resultRecordCount=20&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "United Kingdom" || x.Country_Region === "United Kingdom" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    province: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );
                
                // Max after Hubei (Wuhan)
                let maxCases = Math.max( ...data.filter( x => x.province !== "Dummy" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-uk tr:last" ).after( `
                      <tr>
                        <td class="table-${x.province === "Dummy" ? "secondary" : "default"}">${x.province}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                
               sortTable(1,"breakdown-uk");
            }
        });






         // Germany in Detail
         fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=219&resultRecordCount=20&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "Germany" || x.Country_Region === "Germany" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    province: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );
                
                // Max after Hubei (Wuhan)
                let maxCases = Math.max( ...data.filter( x => x.province !== "Dummy" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-germany tr:last" ).after( `
                      <tr>
                        <td class="table-${x.province === "Dummy" ? "secondary" : "default"}">${x.province}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                
               sortTable(1,"breakdown-germany");
            }
        });






         // France in Detail
         fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=204&resultRecordCount=20&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "France" || x.Country_Region === "France" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    province: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );
                
                // Max after Hubei (Wuhan)
                let maxCases = Math.max( ...data.filter( x => x.province !== "Dummy" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-france tr:last" ).after( `
                      <tr>
                        <td class="table-${x.province === "Dummy" ? "secondary" : "default"}">${x.province}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                
               sortTable(1,"breakdown-france");
            }
        });






         // Italy in Detail
         fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=290&resultRecordCount=30&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "Italy" || x.Country_Region === "Italy" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    province: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );
                
                // Max after Hubei (Wuhan)
                let maxCases = Math.max( ...data.filter( x => x.province !== "Dummy" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-italy tr:last" ).after( `
                      <tr>
                        <td class="table-${x.province === "Dummy" ? "secondary" : "default"}">${x.province}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                
               sortTable(1,"breakdown-italy");
            }
        });






         // Spain in Detail
         fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=596&resultRecordCount=30&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "Spain" || x.Country_Region === "Spain" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    province: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );
                
                // Max after Hubei (Wuhan)
                let maxCases = Math.max( ...data.filter( x => x.province !== "Dummy" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-spain tr:last" ).after( `
                      <tr>
                        <td class="table-${x.province === "Dummy" ? "secondary" : "default"}">${x.province}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                
               sortTable(1,"breakdown-spain");
            }
        });






         // Russia in Detail
         fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=494&resultRecordCount=90&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "Russia" || x.Country_Region === "Russia" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    province: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );
                
                // Max after Hubei (Wuhan)
                let maxCases = Math.max( ...data.filter( x => x.province !== "Dummy" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-russia tr:last" ).after( `
                      <tr>
                        <td class="table-${x.province === "Dummy" ? "secondary" : "default"}">${x.province}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                
               sortTable(1,"breakdown-russia");
            }
        });








         // Brazil in Detail
         fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=41&resultRecordCount=30&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "Brazil" || x.Country_Region === "Brazil" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    province: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );
                
                // Max after Hubei (Wuhan)
                let maxCases = Math.max( ...data.filter( x => x.province !== "Dummy" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-brazil tr:last" ).after( `
                      <tr>
                        <td class="table-${x.province === "Dummy" ? "secondary" : "default"}">${x.province}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                
               sortTable(1,"breakdown-brazil");
            }
        });








         // Mexico in Detail
         fetch( "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&outFields=*&orderByFields=Country_Region%20asc%2CProvince_State%20asc&resultOffset=387&resultRecordCount=40&cacheHint=true" )
        .then( r => r.json() )
        .then( r => {
            if( r ) {
                let data = r.features.map( x => x.attributes ).filter( x => x.Country_Region === "Mexico" || x.Country_Region === "Mexico" ).map( x => ({
                    date: x.Last_Update,
                    formattedDate: moment( x.Last_Update + 18000000 ).format( "lll" ),
                    province: x.Province_State || "",
                    country: x.Country_Region || "",
                    cases: x.Confirmed || 0,
                    deaths: x.Deaths || 0,
                    recovered: x.Recovered || 0,
                }));
                console.log( data );
                
                // Max after Hubei (Wuhan)
                let maxCases = Math.max( ...data.filter( x => x.province !== "Dummy" ).map( x => x.cases ) );
                console.log( maxCases );
                data.forEach( (x,i) => {
                    $( "#breakdown-mexico tr:last" ).after( `
                      <tr>
                        <td class="table-${x.province === "Dummy" ? "secondary" : "default"}">${x.province}</td>
                        <td class="table-${getLessIsBetterHighlight( x.cases / maxCases )}">${x.cases}</td>
                        <td class="table-${getLessIsBetterHighlight( x.deaths / x.cases )}">${x.deaths} <small>(${ ( x.deaths / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td class="table-${getMoreIsBetterHighlight( x.recovered / x.cases )}">${x.recovered} <small>(${ ( x.recovered / x.cases * 100 ).toFixed( 2 ) }%)</small></td>
                        <td><small>${x.formattedDate}</small></td>
                      </tr>` );
                });
                
               sortTable(1,"breakdown-mexico");
            }
        });
        
        
        // LessIsBetterHighlight & MoreIsBetterHighlight Logic

        function getLessIsBetterHighlight( x ) {
            if( x <= 0 ) {
                return "secondary";
            }
            else if( x < 0.25 ) {
                return "info";
            }
            else if( x < 0.5 ) {
                return "warning";
            }
            else {
                return "danger";
            }
        }

        function getMoreIsBetterHighlight( x ) {
            if( x <= 0 ) {
                return "danger";
            }
            else if( x < 0.25 ) {
                return "warning";
            }
            else if( x < 0.5 ) {
                return "info";
            }
            else {
                return "success";
            }
        }
        
        
        
		
		// Sort First Table by Cases
		function sortTable(num, tableName) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById(tableName);
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[num];
      y = rows[i + 1].getElementsByTagName("TD")[num];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
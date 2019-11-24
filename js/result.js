var vm;
var resultVM = function () {
    var self = this;
    self.DistName = ko.observable('Kaski');
    self.LocalBodyName = ko.observable('Pokhara Lekhnath');
    self.VoterCounts = ko.observable({
        mVoters: 100,
        fVoters: 120,
        oVoters: 23,
    });
    self.ValidInvalid = ko.observable({
        Valid: 200,
        Invalid: 30
    });
    self.disp = (distCode, distName) => {
        console.log(distCode, distName);
        self.DistName(distName);
        self.VoterCounts({
            mVoters: Math.ceil(Math.random() * 1000),
            fVoters: Math.ceil(Math.random() * 1000),
            oVoters: Math.ceil(Math.random() * 1000)
        });
        self.ValidInvalid({
            Valid: Math.ceil(Math.random() * 1000),
            Invalid: Math.ceil(Math.random() * 1000)
        });
    };
};
vm = new resultVM();

document.addEventListener('DOMContentLoaded', () => {
    ko.applyBindings(vm, document.getElementById('data-div'));
});

var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1
}).fitBounds([[26.015724412758683,79.85654405904252],[30.77893181441505,88.40790228836913]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
function pop_ADM_00_0(feature, layer) {
    layer.on('click', (e) => {
        console.log(e.target.feature);
        console.log(e.target.options);
        vm.disp(e.target.feature.properties.DCODE, e.target.feature.properties.DISTRICT);
    });
    /*
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['COUNTRY_N'] !== null ? Autolinker.link(String(feature.properties['COUNTRY_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['COUNTRY'] !== null ? Autolinker.link(String(feature.properties['COUNTRY'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    */
}

function style_ADM_00_0_0() {
    return {
        pane: 'pane_ADM_00_0',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(145,82,45,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ADM_00_0');
map.getPane('pane_ADM_00_0').style.zIndex = 400;
map.getPane('pane_ADM_00_0').style['mix-blend-mode'] = 'normal';
var layer_ADM_00_0 = new L.geoJson(json_ADM_00_0, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ADM_00_0',
    layerName: 'layer_ADM_00_0',
    pane: 'pane_ADM_00_0',
    onEachFeature: pop_ADM_00_0,
    style: style_ADM_00_0_0,
});
bounds_group.addLayer(layer_ADM_00_0);
map.addLayer(layer_ADM_00_0);
function pop_ADM_01_1(feature, layer) {
    layer.on('click', (e) => {
        console.log(e.target.feature);
        console.log(e.target.options);
        vm.disp(e.target.feature.properties.DCODE, e.target.feature.properties.DISTRICT);
    });
    /*
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_C'] !== null ? Autolinker.link(String(feature.properties['STATE_C'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_N'] !== null ? Autolinker.link(String(feature.properties['STATE_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['COUNTRY_N'] !== null ? Autolinker.link(String(feature.properties['COUNTRY_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['COUNTRY'] !== null ? Autolinker.link(String(feature.properties['COUNTRY'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Province'] !== null ? Autolinker.link(String(feature.properties['Province'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    */
}

function style_ADM_01_1_0() {
    return {
        pane: 'pane_ADM_01_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(133,182,111,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ADM_01_1');
map.getPane('pane_ADM_01_1').style.zIndex = 401;
map.getPane('pane_ADM_01_1').style['mix-blend-mode'] = 'normal';
var layer_ADM_01_1 = new L.geoJson(json_ADM_01_1, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ADM_01_1',
    layerName: 'layer_ADM_01_1',
    pane: 'pane_ADM_01_1',
    onEachFeature: pop_ADM_01_1,
    style: style_ADM_01_1_0,
});
bounds_group.addLayer(layer_ADM_01_1);
map.addLayer(layer_ADM_01_1);
function pop_ADM_02_2(feature, layer) {
    layer.on('click', (e) => {
        console.log(e.target.feature);
        console.log(e.target.options);
        vm.disp(e.target.feature.properties.DCODE, e.target.feature.properties.DISTRICT);
    });
    /*
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OBJECTID'] !== null ? Autolinker.link(String(feature.properties['OBJECTID'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT'] !== null ? Autolinker.link(String(feature.properties['DISTRICT'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_C'] !== null ? Autolinker.link(String(feature.properties['STATE_C'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DCODE'] !== null ? Autolinker.link(String(feature.properties['DCODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT_N'] !== null ? Autolinker.link(String(feature.properties['DISTRICT_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_N'] !== null ? Autolinker.link(String(feature.properties['STATE_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NEW_DCODE'] !== null ? Autolinker.link(String(feature.properties['NEW_DCODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Province'] !== null ? Autolinker.link(String(feature.properties['Province'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['By-Elec_YN'] !== null ? Autolinker.link(String(feature.properties['By-Elec_YN'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    */
}

function style_ADM_02_2_0() {
    return {
        pane: 'pane_ADM_02_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(164,113,88,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ADM_02_2');
map.getPane('pane_ADM_02_2').style.zIndex = 402;
map.getPane('pane_ADM_02_2').style['mix-blend-mode'] = 'normal';
var layer_ADM_02_2 = new L.geoJson(json_ADM_02_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ADM_02_2',
    layerName: 'layer_ADM_02_2',
    pane: 'pane_ADM_02_2',
    onEachFeature: pop_ADM_02_2,
    style: style_ADM_02_2_0,
});
bounds_group.addLayer(layer_ADM_02_2);
map.addLayer(layer_ADM_02_2);
function pop_ADM_03_3(feature, layer) {
    layer.on('click', (e) => {
        console.log(e.target.feature);
        console.log(e.target.options);
        vm.disp(e.target.feature.properties.DCODE, e.target.feature.properties.DISTRICT);
    });
    /*
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OBJECTid'] !== null ? Autolinker.link(String(feature.properties['OBJECTid'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT'] !== null ? Autolinker.link(String(feature.properties['DISTRICT'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['GaPa_NaPa'] !== null ? Autolinker.link(String(feature.properties['GaPa_NaPa'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Type_GN'] !== null ? Autolinker.link(String(feature.properties['Type_GN'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_C'] !== null ? Autolinker.link(String(feature.properties['STATE_C'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DCODE'] !== null ? Autolinker.link(String(feature.properties['DCODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT_N'] !== null ? Autolinker.link(String(feature.properties['DISTRICT_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['GN_CODE'] !== null ? Autolinker.link(String(feature.properties['GN_CODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['GaNaPa_N'] !== null ? Autolinker.link(String(feature.properties['GaNaPa_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Type_GN_N'] !== null ? Autolinker.link(String(feature.properties['Type_GN_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['OLD_GANA_E'] !== null ? Autolinker.link(String(feature.properties['OLD_GANA_E'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['OLD_GANA_N'] !== null ? Autolinker.link(String(feature.properties['OLD_GANA_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_N'] !== null ? Autolinker.link(String(feature.properties['STATE_N'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    */
}

function style_ADM_03_3_0() {
    return {
        pane: 'pane_ADM_03_3',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(213,180,60,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ADM_03_3');
map.getPane('pane_ADM_03_3').style.zIndex = 403;
map.getPane('pane_ADM_03_3').style['mix-blend-mode'] = 'normal';
var layer_ADM_03_3 = new L.geoJson(json_ADM_03_3, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ADM_03_3',
    layerName: 'layer_ADM_03_3',
    pane: 'pane_ADM_03_3',
    onEachFeature: pop_ADM_03_3,
    style: style_ADM_03_3_0,
});
bounds_group.addLayer(layer_ADM_03_3);
map.addLayer(layer_ADM_03_3);
function pop_ADM_PA_4(feature, layer) {
    layer.on('click', (e) => {
        console.log(e.target.feature);
        console.log(e.target.options);
        vm.disp(e.target.feature.properties.DCODE, e.target.feature.properties.DISTRICT);
    });
    /*
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OBJECTID_1'] !== null ? Autolinker.link(String(feature.properties['OBJECTID_1'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CONS_CODE'] !== null ? Autolinker.link(String(feature.properties['CONS_CODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT'] !== null ? Autolinker.link(String(feature.properties['DISTRICT'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_C'] !== null ? Autolinker.link(String(feature.properties['STATE_C'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['FIRST_EC_N'] !== null ? Autolinker.link(String(feature.properties['FIRST_EC_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['FIRST_EC_1'] !== null ? Autolinker.link(String(feature.properties['FIRST_EC_1'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['FIRST_HOR_'] !== null ? Autolinker.link(String(feature.properties['FIRST_HOR_'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Label'] !== null ? Autolinker.link(String(feature.properties['Label'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DCODE'] !== null ? Autolinker.link(String(feature.properties['DCODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT_N'] !== null ? Autolinker.link(String(feature.properties['DISTRICT_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_N'] !== null ? Autolinker.link(String(feature.properties['STATE_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NEW_DCODE'] !== null ? Autolinker.link(String(feature.properties['NEW_DCODE'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    */
}

function style_ADM_PA_4_0() {
    return {
        pane: 'pane_ADM_PA_4',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(141,90,153,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ADM_PA_4');
map.getPane('pane_ADM_PA_4').style.zIndex = 404;
map.getPane('pane_ADM_PA_4').style['mix-blend-mode'] = 'normal';
var layer_ADM_PA_4 = new L.geoJson(json_ADM_PA_4, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ADM_PA_4',
    layerName: 'layer_ADM_PA_4',
    pane: 'pane_ADM_PA_4',
    onEachFeature: pop_ADM_PA_4,
    style: style_ADM_PA_4_0,
});
bounds_group.addLayer(layer_ADM_PA_4);
map.addLayer(layer_ADM_PA_4);
function pop_ADM_HoR_5(feature, layer) {
    layer.on('click', (e) => {
        console.log(e.target.feature);
        console.log(e.target.options);
        vm.disp(e.target.feature.properties.DCODE, e.target.feature.properties.DISTRICT);
    });
    /*
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OBJECTID_1'] !== null ? Autolinker.link(String(feature.properties['OBJECTID_1'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['HOR_CODE'] !== null ? Autolinker.link(String(feature.properties['HOR_CODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_C'] !== null ? Autolinker.link(String(feature.properties['STATE_C'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT'] !== null ? Autolinker.link(String(feature.properties['DISTRICT'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['FIRST_EC_N'] !== null ? Autolinker.link(String(feature.properties['FIRST_EC_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DCODE'] !== null ? Autolinker.link(String(feature.properties['DCODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT_N'] !== null ? Autolinker.link(String(feature.properties['DISTRICT_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_N'] !== null ? Autolinker.link(String(feature.properties['STATE_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['working'] !== null ? Autolinker.link(String(feature.properties['working'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NEW_DCODE'] !== null ? Autolinker.link(String(feature.properties['NEW_DCODE'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    */
}

function style_ADM_HoR_5_0() {
    return {
        pane: 'pane_ADM_HoR_5',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(114,155,111,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ADM_HoR_5');
map.getPane('pane_ADM_HoR_5').style.zIndex = 405;
map.getPane('pane_ADM_HoR_5').style['mix-blend-mode'] = 'normal';
var layer_ADM_HoR_5 = new L.geoJson(json_ADM_HoR_5, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ADM_HoR_5',
    layerName: 'layer_ADM_HoR_5',
    pane: 'pane_ADM_HoR_5',
    onEachFeature: pop_ADM_HoR_5,
    style: style_ADM_HoR_5_0,
});
bounds_group.addLayer(layer_ADM_HoR_5);
map.addLayer(layer_ADM_HoR_5);
function pop_ADM_HoR_By_Election_6(feature, layer) {
    layer.on('click', (e) => {
        console.log(e.target.feature);
        console.log(e.target.options);
        vm.disp(e.target.feature.properties.DCODE, e.target.feature.properties.DISTRICT);
    });
    /*
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OBJECTID_1'] !== null ? Autolinker.link(String(feature.properties['OBJECTID_1'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['HOR_CODE'] !== null ? Autolinker.link(String(feature.properties['HOR_CODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_C'] !== null ? Autolinker.link(String(feature.properties['STATE_C'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT'] !== null ? Autolinker.link(String(feature.properties['DISTRICT'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['FIRST_EC_N'] !== null ? Autolinker.link(String(feature.properties['FIRST_EC_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DCODE'] !== null ? Autolinker.link(String(feature.properties['DCODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT_N'] !== null ? Autolinker.link(String(feature.properties['DISTRICT_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_N'] !== null ? Autolinker.link(String(feature.properties['STATE_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['working'] !== null ? Autolinker.link(String(feature.properties['working'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NEW_DCODE'] !== null ? Autolinker.link(String(feature.properties['NEW_DCODE'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    */
}

function style_ADM_HoR_By_Election_6_0() {
    return {
        pane: 'pane_ADM_HoR_By_Election_6',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(243,166,178,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ADM_HoR_By_Election_6');
map.getPane('pane_ADM_HoR_By_Election_6').style.zIndex = 406;
map.getPane('pane_ADM_HoR_By_Election_6').style['mix-blend-mode'] = 'normal';
var layer_ADM_HoR_By_Election_6 = new L.geoJson(json_ADM_HoR_By_Election_6, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ADM_HoR_By_Election_6',
    layerName: 'layer_ADM_HoR_By_Election_6',
    pane: 'pane_ADM_HoR_By_Election_6',
    onEachFeature: pop_ADM_HoR_By_Election_6,
    style: style_ADM_HoR_By_Election_6_0,
});
bounds_group.addLayer(layer_ADM_HoR_By_Election_6);
map.addLayer(layer_ADM_HoR_By_Election_6);
function pop_ADM_PA_ByElection_7(feature, layer) {
    layer.on('click', (e) => {
        console.log(e.target.feature);
        console.log(e.target.options);
        vm.disp(e.target.feature.properties.DCODE, e.target.feature.properties.DISTRICT);
    });
    /*
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OBJECTID_1'] !== null ? Autolinker.link(String(feature.properties['OBJECTID_1'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CONS_CODE'] !== null ? Autolinker.link(String(feature.properties['CONS_CODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT'] !== null ? Autolinker.link(String(feature.properties['DISTRICT'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_C'] !== null ? Autolinker.link(String(feature.properties['STATE_C'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['FIRST_EC_N'] !== null ? Autolinker.link(String(feature.properties['FIRST_EC_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['FIRST_EC_1'] !== null ? Autolinker.link(String(feature.properties['FIRST_EC_1'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['FIRST_HOR_'] !== null ? Autolinker.link(String(feature.properties['FIRST_HOR_'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Label'] !== null ? Autolinker.link(String(feature.properties['Label'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DCODE'] !== null ? Autolinker.link(String(feature.properties['DCODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT_N'] !== null ? Autolinker.link(String(feature.properties['DISTRICT_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_N'] !== null ? Autolinker.link(String(feature.properties['STATE_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NEW_DCODE'] !== null ? Autolinker.link(String(feature.properties['NEW_DCODE'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    */
}

function style_ADM_PA_ByElection_7_0() {
    return {
        pane: 'pane_ADM_PA_ByElection_7',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(232,113,141,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ADM_PA_ByElection_7');
map.getPane('pane_ADM_PA_ByElection_7').style.zIndex = 407;
map.getPane('pane_ADM_PA_ByElection_7').style['mix-blend-mode'] = 'normal';
var layer_ADM_PA_ByElection_7 = new L.geoJson(json_ADM_PA_ByElection_7, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ADM_PA_ByElection_7',
    layerName: 'layer_ADM_PA_ByElection_7',
    pane: 'pane_ADM_PA_ByElection_7',
    onEachFeature: pop_ADM_PA_ByElection_7,
    style: style_ADM_PA_ByElection_7_0,
});
bounds_group.addLayer(layer_ADM_PA_ByElection_7);
map.addLayer(layer_ADM_PA_ByElection_7);
function pop_ADM_00_By_Election_GaPaNaPa_8(feature, layer) {
    layer.on('click', (e) => {
        console.log(e.target.feature);
        console.log(e.target.options);
        vm.disp(e.target.feature.properties.DCODE, e.target.feature.properties.DISTRICT);
    });
    /*
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OBJECTid'] !== null ? Autolinker.link(String(feature.properties['OBJECTid'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT'] !== null ? Autolinker.link(String(feature.properties['DISTRICT'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['GaPa_NaPa'] !== null ? Autolinker.link(String(feature.properties['GaPa_NaPa'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Type_GN'] !== null ? Autolinker.link(String(feature.properties['Type_GN'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_C'] !== null ? Autolinker.link(String(feature.properties['STATE_C'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DCODE'] !== null ? Autolinker.link(String(feature.properties['DCODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DISTRICT_N'] !== null ? Autolinker.link(String(feature.properties['DISTRICT_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['GN_CODE'] !== null ? Autolinker.link(String(feature.properties['GN_CODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['GaNaPa_N'] !== null ? Autolinker.link(String(feature.properties['GaNaPa_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Type_GN_N'] !== null ? Autolinker.link(String(feature.properties['Type_GN_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['OLD_GANA_E'] !== null ? Autolinker.link(String(feature.properties['OLD_GANA_E'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['OLD_GANA_N'] !== null ? Autolinker.link(String(feature.properties['OLD_GANA_N'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STATE_N'] !== null ? Autolinker.link(String(feature.properties['STATE_N'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    */
}

function style_ADM_00_By_Election_GaPaNaPa_8_0() {
    return {
        pane: 'pane_ADM_00_By_Election_GaPaNaPa_8',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(125,139,143,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ADM_00_By_Election_GaPaNaPa_8');
map.getPane('pane_ADM_00_By_Election_GaPaNaPa_8').style.zIndex = 408;
map.getPane('pane_ADM_00_By_Election_GaPaNaPa_8').style['mix-blend-mode'] = 'normal';
var layer_ADM_00_By_Election_GaPaNaPa_8 = new L.geoJson(json_ADM_00_By_Election_GaPaNaPa_8, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ADM_00_By_Election_GaPaNaPa_8',
    layerName: 'layer_ADM_00_By_Election_GaPaNaPa_8',
    pane: 'pane_ADM_00_By_Election_GaPaNaPa_8',
    onEachFeature: pop_ADM_00_By_Election_GaPaNaPa_8,
    style: style_ADM_00_By_Election_GaPaNaPa_8_0,
});
bounds_group.addLayer(layer_ADM_00_By_Election_GaPaNaPa_8);
map.addLayer(layer_ADM_00_By_Election_GaPaNaPa_8);
setBounds();

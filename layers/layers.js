var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_2000_modified_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "2000年臺灣地質圖_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2000_modified_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13223175.531507, 2456265.569760, 13615869.200117, 2973104.863723]
                            })
                        });
var format_Basic_3 = new ol.format.GeoJSON();
var features_Basic_3 = format_Basic_3.readFeatures(json_Basic_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basic_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basic_3.addFeatures(features_Basic_3);
var lyr_Basic_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Basic_3, 
                style: style_Basic_3,
                interactive: true,
                title: '<img src="styles/legend/Basic_3.png" /> Basic'
            });
var format_Acidic_4 = new ol.format.GeoJSON();
var features_Acidic_4 = format_Acidic_4.readFeatures(json_Acidic_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acidic_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acidic_4.addFeatures(features_Acidic_4);
var lyr_Acidic_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Acidic_4, 
                style: style_Acidic_4,
                interactive: true,
                title: '<img src="styles/legend/Acidic_4.png" /> Acidic'
            });
var format_Neutral_5 = new ol.format.GeoJSON();
var features_Neutral_5 = format_Neutral_5.readFeatures(json_Neutral_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neutral_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neutral_5.addFeatures(features_Neutral_5);
var lyr_Neutral_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Neutral_5, 
                style: style_Neutral_5,
                interactive: true,
                title: '<img src="styles/legend/Neutral_5.png" /> Neutral'
            });
var format_none_6 = new ol.format.GeoJSON();
var features_none_6 = format_none_6.readFeatures(json_none_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_none_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_none_6.addFeatures(features_none_6);
var lyr_none_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_none_6, 
                style: style_none_6,
                interactive: true,
                title: '<img src="styles/legend/none_6.png" /> none'
            });
var format_AccordingtoRocktype_7 = new ol.format.GeoJSON();
var features_AccordingtoRocktype_7 = format_AccordingtoRocktype_7.readFeatures(json_AccordingtoRocktype_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccordingtoRocktype_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccordingtoRocktype_7.addFeatures(features_AccordingtoRocktype_7);
var lyr_AccordingtoRocktype_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AccordingtoRocktype_7, 
                style: style_AccordingtoRocktype_7,
                interactive: true,
    title: 'According to Rock type<br />\
    <img src="styles/legend/AccordingtoRocktype_7_0.png" /> 火成岩區<br />\
    <img src="styles/legend/AccordingtoRocktype_7_1.png" /> 沉積岩區<br />\
    <img src="styles/legend/AccordingtoRocktype_7_2.png" /> 變質岩區<br />'
        });
var format_East_8 = new ol.format.GeoJSON();
var features_East_8 = format_East_8.readFeatures(json_East_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_East_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_East_8.addFeatures(features_East_8);
var lyr_East_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_East_8, 
                style: style_East_8,
                interactive: true,
                title: '<img src="styles/legend/East_8.png" /> East'
            });
var format_South_9 = new ol.format.GeoJSON();
var features_South_9 = format_South_9.readFeatures(json_South_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_South_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_South_9.addFeatures(features_South_9);
var lyr_South_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_South_9, 
                style: style_South_9,
                interactive: true,
                title: '<img src="styles/legend/South_9.png" /> South'
            });
var format_Central_10 = new ol.format.GeoJSON();
var features_Central_10 = format_Central_10.readFeatures(json_Central_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Central_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Central_10.addFeatures(features_Central_10);
var lyr_Central_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Central_10, 
                style: style_Central_10,
                interactive: true,
                title: '<img src="styles/legend/Central_10.png" /> Central'
            });
var format_North_11 = new ol.format.GeoJSON();
var features_North_11 = format_North_11.readFeatures(json_North_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_North_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_North_11.addFeatures(features_North_11);
var lyr_North_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_North_11, 
                style: style_North_11,
                interactive: true,
                title: '<img src="styles/legend/North_11.png" /> North'
            });
var format_Recommendation_12 = new ol.format.GeoJSON();
var features_Recommendation_12 = format_Recommendation_12.readFeatures(json_Recommendation_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recommendation_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recommendation_12.addFeatures(features_Recommendation_12);
var lyr_Recommendation_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Recommendation_12, 
                style: style_Recommendation_12,
                interactive: true,
                title: '<img src="styles/legend/Recommendation_12.png" /> Recommendation'
            });
var format_HotSpring_13 = new ol.format.GeoJSON();
var features_HotSpring_13 = format_HotSpring_13.readFeatures(json_HotSpring_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotSpring_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotSpring_13.addFeatures(features_HotSpring_13);
var lyr_HotSpring_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HotSpring_13, 
                style: style_HotSpring_13,
                interactive: true,
                title: '<img src="styles/legend/HotSpring_13.png" /> Hot Spring'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_2000_modified_2.setVisible(true);lyr_Basic_3.setVisible(true);lyr_Acidic_4.setVisible(true);lyr_Neutral_5.setVisible(true);lyr_none_6.setVisible(true);lyr_AccordingtoRocktype_7.setVisible(true);lyr_East_8.setVisible(true);lyr_South_9.setVisible(true);lyr_Central_10.setVisible(true);lyr_North_11.setVisible(true);lyr_Recommendation_12.setVisible(true);lyr_HotSpring_13.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_2000_modified_2,lyr_Basic_3,lyr_Acidic_4,lyr_Neutral_5,lyr_none_6,lyr_AccordingtoRocktype_7,lyr_East_8,lyr_South_9,lyr_Central_10,lyr_North_11,lyr_Recommendation_12,lyr_HotSpring_13];
lyr_Basic_3.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_Acidic_4.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_Neutral_5.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_none_6.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_AccordingtoRocktype_7.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '行政區': '行政區', '高程': '高程', });
lyr_East_8.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_South_9.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_Central_10.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_North_11.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '溫泉性質': '溫泉性質', '行政區': '行政區', });
lyr_Recommendation_12.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', '高程': '高程', });
lyr_HotSpring_13.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', 'X座標(TWD9': 'X座標(TWD9', 'Y座標(TWD9': 'Y座標(TWD9', '經度(WGS84': '經度(WGS84', '緯度(WGS84': '緯度(WGS84', '高程': '高程', });
lyr_Basic_3.set('fieldImages', {'溫泉名稱': '', '溫泉PH值': '', '溫泉溫度': '', '溫泉性質': '', '行政區': '', });
lyr_Acidic_4.set('fieldImages', {'溫泉名稱': '', '溫泉PH值': '', '溫泉溫度': '', '溫泉性質': '', '行政區': '', });
lyr_Neutral_5.set('fieldImages', {'溫泉名稱': '', '溫泉PH值': '', '溫泉溫度': '', '溫泉性質': '', '行政區': '', });
lyr_none_6.set('fieldImages', {'溫泉名稱': '', '溫泉PH值': '', '溫泉溫度': '', '溫泉性質': '', '行政區': '', });
lyr_AccordingtoRocktype_7.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '出露岩層屬': 'TextEdit', '行政區': 'TextEdit', '高程': 'TextEdit', });
lyr_East_8.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', });
lyr_South_9.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', });
lyr_Central_10.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', });
lyr_North_11.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', });
lyr_Recommendation_12.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '出露岩層屬': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', '高程': 'TextEdit', });
lyr_HotSpring_13.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '出露岩層屬': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', 'X座標(TWD9': 'TextEdit', 'Y座標(TWD9': 'TextEdit', '經度(WGS84': 'TextEdit', '緯度(WGS84': 'TextEdit', '高程': 'TextEdit', });
lyr_Basic_3.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_Acidic_4.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_Neutral_5.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_none_6.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_AccordingtoRocktype_7.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '行政區': 'inline label', '高程': 'no label', });
lyr_East_8.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_South_9.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_Central_10.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_North_11.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', });
lyr_Recommendation_12.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', '高程': 'inline label', });
lyr_HotSpring_13.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'no label', '行政區': 'inline label', 'X座標(TWD9': 'no label', 'Y座標(TWD9': 'no label', '經度(WGS84': 'no label', '緯度(WGS84': 'no label', '高程': 'inline label', });
lyr_HotSpring_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
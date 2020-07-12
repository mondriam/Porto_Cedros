(function(){
    var script = { "definitions": [
 {
  "levels": [
   {
    "url": "media/popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D_0_0.jpg",
    "width": 1920,
    "height": 1080,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D_0_1.jpg",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D_0_2.jpg",
    "width": 512,
    "height": 288,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_86C7CA9F_952C_B331_41D3_38C5166BA311",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_B683EE32_B8A1_4391_41D8_F928442156FD_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_8740DFBC_88EA_9040_41DA_BA66F31610FA",
  "initialPosition": {
   "yaw": -104.63,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "showEasing": "cubic_in",
  "showDuration": 500,
  "popupMaxWidth": "95%",
  "yaw": 8.79,
  "rotationZ": 0,
  "popupMaxHeight": "95%",
  "rotationY": 0,
  "id": "popup_866FC64C_88ED_90C7_41C0_6679B88019D3",
  "hfov": 8.32,
  "rotationX": 0,
  "class": "PopupPanoramaOverlay",
  "image": {
   "levels": [
    {
     "url": "media/popup_866FC64C_88ED_90C7_41C0_6679B88019D3_0_1.jpg",
     "width": 1024,
     "height": 576,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "pitch": -18.87,
  "popupDistance": 100,
  "hideEasing": "cubic_out",
  "hideDuration": 500
 },
 {
  "levels": [
   {
    "url": "media/popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640_0_0.jpg",
    "width": 1920,
    "height": 1080,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640_0_1.jpg",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640_0_2.jpg",
    "width": 512,
    "height": 288,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_00E1334F_0DE6_179A_4187_C542509C3B77",
  "class": "ImageResource"
 },
 {
  "showEasing": "cubic_in",
  "showDuration": 500,
  "popupMaxWidth": "95%",
  "yaw": -10.82,
  "rotationZ": 0,
  "popupMaxHeight": "95%",
  "rotationY": 0,
  "id": "popup_8636F31A_88EB_9040_41D0_60983B82647B",
  "hfov": 8.74,
  "rotationX": 0,
  "class": "PopupPanoramaOverlay",
  "image": {
   "levels": [
    {
     "url": "media/popup_8636F31A_88EB_9040_41D0_60983B82647B_0_2.jpg",
     "width": 1024,
     "height": 594,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "pitch": -6,
  "popupDistance": 100,
  "hideEasing": "cubic_out",
  "hideDuration": 500
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "label": "Events Plaza",
  "id": "panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
  "adjacentPanoramas": [
   {
    "panorama": {
     "label": "Long Beach",
     "id": "panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
     "adjacentPanoramas": [
      {
       "panorama": {
        "label": "Little Bay",
        "id": "panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
          "backwardYaw": 93.34,
          "yaw": -37.33,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
          "backwardYaw": -138.9,
          "yaw": 0.88,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": {
           "label": "North Bay",
           "id": "panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
             "backwardYaw": 44.2,
             "yaw": -95.53,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
             "backwardYaw": 141.72,
             "yaw": -27.77,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": {
              "label": "Aquarium",
              "id": "panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
                "backwardYaw": 75.37,
                "yaw": -145.7,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": {
                 "label": "Marina",
                 "id": "panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
                   "backwardYaw": 130.91,
                   "yaw": -4.95,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": {
                    "label": "South Bay",
                    "id": "panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
                      "backwardYaw": 33.18,
                      "yaw": 5.29,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": {
                       "label": "Mountain View",
                       "id": "panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
                         "backwardYaw": -34.35,
                         "yaw": 106.92,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
                         "backwardYaw": -19.29,
                         "yaw": 41.14,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
                         "backwardYaw": 41.33,
                         "yaw": -34.24,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "hfov": 360,
                       "hfovMax": 130,
                       "hfovMin": 60,
                       "class": "Panorama",
                       "frames": [
                        {
                         "sphere": {
                          "levels": [
                           {
                            "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_hq.jpeg",
                            "width": 6434,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ],
                            "height": 3217,
                            "class": "ImageResourceLevel"
                           },
                           {
                            "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_lq.jpeg",
                            "width": 2048,
                            "tags": "preload",
                            "height": 1024,
                            "class": "ImageResourceLevel"
                           },
                           {
                            "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE.jpeg",
                            "width": 4002,
                            "height": 2001,
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "yaw": -46.03,
                             "hfov": 7.16,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_6_0_0_map.gif",
                                "width": 21,
                                "height": 16,
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -35.48,
                             "class": "HotspotPanoramaOverlayMap"
                            }
                           ],
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','borderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_86C5FA9F_952C_B331_41D0_AE789F4CE5A5, null, null, null, null, false)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 7.16,
                             "class": "HotspotPanoramaOverlayImage",
                             "distance": 50,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_6_0.png",
                                "width": 157,
                                "height": 117,
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -35.48,
                             "yaw": -46.03
                            }
                           ],
                           "id": "overlay_B601ED08_B8A1_4171_41C5_E0DDA8257DEC",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "yaw": 25.1,
                             "hfov": 8.76,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_7_0_0_map.gif",
                                "width": 21,
                                "height": 16,
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -4.83,
                             "class": "HotspotPanoramaOverlayMap"
                            }
                           ],
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','borderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_00E1334F_0DE6_179A_4187_C542509C3B77, null, null, null, null, false)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 8.76,
                             "class": "HotspotPanoramaOverlayImage",
                             "distance": 50,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_7_0.png",
                                "width": 157,
                                "height": 117,
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -4.83,
                             "yaw": 25.1
                            }
                           ],
                           "id": "overlay_B601BD08_B8A1_4171_41E0_592B92D1B041",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "yaw": 106.92,
                             "hfov": 6.41,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_8_0_0_map.gif",
                                "width": 16,
                                "height": 16,
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -13.57,
                             "class": "HotspotPanoramaOverlayMap"
                            }
                           ],
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD, this.camera_9868A0C8_88EA_B1C0_41D0_7E3FEC6FC561); this.mainPlayList.set('selectedIndex', 4)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 6.41,
                             "class": "HotspotPanoramaOverlayImage",
                             "distance": 50,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_8_0.png",
                                "width": 117,
                                "height": 117,
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -13.57,
                             "yaw": 106.92
                            }
                           ],
                           "id": "overlay_B6019D09_B8A1_4173_41BB_8F37E182537D",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "yaw": 41.14,
                             "hfov": 6.58,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_9_0_0_map.gif",
                                "width": 16,
                                "height": 16,
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -3.61,
                             "class": "HotspotPanoramaOverlayMap"
                            }
                           ],
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_987B90D9_88EA_B1C0_41D3_B41F09E1730F); this.mainPlayList.set('selectedIndex', 7)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 6.58,
                             "class": "HotspotPanoramaOverlayImage",
                             "distance": 50,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_9_0.png",
                                "width": 117,
                                "height": 117,
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -3.61,
                             "yaw": 41.14
                            }
                           ],
                           "id": "overlay_B6017D09_B8A1_4173_41E1_9E8DBA2686CB",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "yaw": -34.24,
                             "hfov": 6.49,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_10_0_0_map.gif",
                                "width": 16,
                                "height": 16,
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -9.92,
                             "class": "HotspotPanoramaOverlayMap"
                            }
                           ],
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248, this.camera_984D50E5_88EA_B1C0_41DB_1C6E7D55822A); this.mainPlayList.set('selectedIndex', 6)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 6.49,
                             "class": "HotspotPanoramaOverlayImage",
                             "distance": 50,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_10_0.png",
                                "width": 117,
                                "height": 117,
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -9.92,
                             "yaw": -34.24
                            }
                           ],
                           "id": "overlay_B6014D09_B8A1_4173_41C3_A5E19DEFE476",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "showEasing": "cubic_in",
                           "showDuration": 500,
                           "popupMaxWidth": "95%",
                           "yaw": -46.03,
                           "rotationZ": 0,
                           "popupMaxHeight": "95%",
                           "rotationY": 0,
                           "id": "popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582",
                           "hfov": 7.16,
                           "rotationX": 0,
                           "class": "PopupPanoramaOverlay",
                           "image": {
                            "levels": [
                             {
                              "url": "media/popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582_0_1.jpg",
                              "width": 1024,
                              "height": 576,
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "pitch": -35.48,
                           "popupDistance": 100,
                           "hideEasing": "cubic_out",
                           "hideDuration": 500
                          },
                          {
                           "showEasing": "cubic_in",
                           "showDuration": 500,
                           "popupMaxWidth": "95%",
                           "yaw": 25.1,
                           "rotationZ": 0,
                           "popupMaxHeight": "95%",
                           "rotationY": 0,
                           "id": "popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640",
                           "hfov": 8.76,
                           "rotationX": 0,
                           "class": "PopupPanoramaOverlay",
                           "image": {
                            "levels": [
                             {
                              "url": "media/popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640_0_1.jpg",
                              "width": 1024,
                              "height": 576,
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "pitch": -4.83,
                           "popupDistance": 100,
                           "hideEasing": "cubic_out",
                           "hideDuration": 500
                          },
                          {
                           "yaw": 178.11,
                           "pitch": 22,
                           "bleaching": 0.7,
                           "id": "overlay_86A180FB_88EA_91C0_41B3_DC6213A6506D",
                           "bleachingDistance": 0.4,
                           "class": "LensFlarePanoramaOverlay"
                          }
                         ],
                         "thumbnailUrl": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_t.jpg",
                         "class": "SphericPanoramaFrame"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_t.jpg"
                      },
                      "backwardYaw": -34.24,
                      "yaw": 41.33,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
                      "backwardYaw": 29.22,
                      "yaw": -35.71,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "hfov": 360,
                    "hfovMax": 130,
                    "hfovMin": 60,
                    "class": "Panorama",
                    "frames": [
                     {
                      "sphere": {
                       "levels": [
                        {
                         "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_hq.jpeg",
                         "width": 6434,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ],
                         "height": 3217,
                         "class": "ImageResourceLevel"
                        },
                        {
                         "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_lq.jpeg",
                         "width": 2048,
                         "tags": "preload",
                         "height": 1024,
                         "class": "ImageResourceLevel"
                        },
                        {
                         "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248.jpeg",
                         "width": 4002,
                         "height": 2001,
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "yaw": 49.43,
                          "hfov": 8.76,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_6_0_0_map.gif",
                             "width": 21,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -4.46,
                          "class": "HotspotPanoramaOverlayMap"
                         }
                        ],
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupPanoramaOverlay(this.popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','borderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_00E1834F_0DE6_179A_418D_7C59A643B09E, null, null, null, null, false)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 8.76,
                          "class": "HotspotPanoramaOverlayImage",
                          "distance": 50,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_6_0.png",
                             "width": 157,
                             "height": 117,
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -4.46,
                          "yaw": 49.43
                         }
                        ],
                        "id": "overlay_B628C358_B8A3_4190_41B3_9D227009FCE2",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "yaw": 19.08,
                          "hfov": 8.72,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_7_0_0_map.gif",
                             "width": 21,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -7.22,
                          "class": "HotspotPanoramaOverlayMap"
                         }
                        ],
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupPanoramaOverlay(this.popup_846D32DD_94EF_9331_41C4_9360FA56FF36, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','borderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_86C2EAA4_952C_B317_41E0_D1F4952F4164, null, null, null, null, false)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 8.72,
                          "class": "HotspotPanoramaOverlayImage",
                          "distance": 50,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_7_0.png",
                             "width": 157,
                             "height": 117,
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -7.22,
                          "yaw": 19.08
                         }
                        ],
                        "id": "overlay_B6288358_B8A3_4190_41D8_784D52D25348",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "yaw": -12.93,
                          "hfov": 7.89,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_8_0_0_map.gif",
                             "width": 21,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -26.19,
                          "class": "HotspotPanoramaOverlayMap"
                         }
                        ],
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupPanoramaOverlay(this.popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','borderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_00E0C34F_0DE6_179A_41A3_4FE116A624F6, null, null, null, null, false)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 7.89,
                          "class": "HotspotPanoramaOverlayImage",
                          "distance": 50,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_8_0.png",
                             "width": 157,
                             "height": 117,
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -26.19,
                          "yaw": -12.93
                         }
                        ],
                        "id": "overlay_B628A358_B8A3_4190_41D5_0554F9565709",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "yaw": 41.33,
                          "hfov": 6.59,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_9_0_0_map.gif",
                             "width": 16,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 1.82,
                          "class": "HotspotPanoramaOverlayMap"
                         }
                        ],
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE, this.camera_877DCF99_88EA_9040_41D7_3ADA8651611B); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 6.59,
                          "class": "HotspotPanoramaOverlayImage",
                          "distance": 50,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_9_0.png",
                             "width": 117,
                             "height": 117,
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 1.82,
                          "yaw": 41.33
                         }
                        ],
                        "id": "overlay_B6295358_B8A3_4190_41DC_E5C1151C04FB",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "yaw": 5.29,
                          "hfov": 6.59,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_10_0_0_map.gif",
                             "width": 16,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 0.28,
                          "class": "HotspotPanoramaOverlayMap"
                         }
                        ],
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_876B7F86_88EA_9040_41CF_D173B536E106); this.mainPlayList.set('selectedIndex', 7)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 6.59,
                          "class": "HotspotPanoramaOverlayImage",
                          "distance": 50,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_10_0.png",
                             "width": 117,
                             "height": 117,
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 0.28,
                          "yaw": 5.29
                         }
                        ],
                        "id": "overlay_B6297358_B8A3_4190_41E6_5A331B9A1155",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "yaw": -35.71,
                          "hfov": 6.59,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_11_0_0_map.gif",
                             "width": 16,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -1.86,
                          "class": "HotspotPanoramaOverlayMap"
                         }
                        ],
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A, this.camera_874F5FAB_88EA_9040_41E0_7FD77F8600AF); this.mainPlayList.set('selectedIndex', 0)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 6.59,
                          "class": "HotspotPanoramaOverlayImage",
                          "distance": 50,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_11_0.png",
                             "width": 117,
                             "height": 117,
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -1.86,
                          "yaw": -35.71
                         }
                        ],
                        "id": "overlay_B6292358_B8A3_4190_41E1_87904AC42B88",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "showEasing": "cubic_in",
                        "showDuration": 500,
                        "popupMaxWidth": "95%",
                        "yaw": 49.43,
                        "rotationZ": 0,
                        "popupMaxHeight": "95%",
                        "rotationY": 0,
                        "id": "popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282",
                        "hfov": 8.76,
                        "rotationX": 0,
                        "class": "PopupPanoramaOverlay",
                        "image": {
                         "levels": [
                          {
                           "url": "media/popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282_0_2.jpg",
                           "width": 1024,
                           "height": 576,
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "pitch": -4.46,
                        "popupDistance": 100,
                        "hideEasing": "cubic_out",
                        "hideDuration": 500
                       },
                       {
                        "showEasing": "cubic_in",
                        "showDuration": 500,
                        "popupMaxWidth": "95%",
                        "yaw": 19.08,
                        "rotationZ": 0,
                        "popupMaxHeight": "95%",
                        "rotationY": 0,
                        "id": "popup_846D32DD_94EF_9331_41C4_9360FA56FF36",
                        "hfov": 8.72,
                        "rotationX": 0,
                        "class": "PopupPanoramaOverlay",
                        "image": {
                         "levels": [
                          {
                           "url": "media/popup_846D32DD_94EF_9331_41C4_9360FA56FF36_0_1.jpg",
                           "width": 1024,
                           "height": 576,
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "pitch": -7.22,
                        "popupDistance": 100,
                        "hideEasing": "cubic_out",
                        "hideDuration": 500
                       },
                       {
                        "showEasing": "cubic_in",
                        "showDuration": 500,
                        "popupMaxWidth": "95%",
                        "yaw": -12.93,
                        "rotationZ": 0,
                        "popupMaxHeight": "95%",
                        "rotationY": 0,
                        "id": "popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3",
                        "hfov": 7.89,
                        "rotationX": 0,
                        "class": "PopupPanoramaOverlay",
                        "image": {
                         "levels": [
                          {
                           "url": "media/popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3_0_1.jpg",
                           "width": 1024,
                           "height": 576,
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "pitch": -26.19,
                        "popupDistance": 100,
                        "hideEasing": "cubic_out",
                        "hideDuration": 500
                       },
                       {
                        "yaw": 76.5,
                        "pitch": 20.12,
                        "bleaching": 0.7,
                        "id": "overlay_86B2DFDC_88EA_8FC0_41C5_E925BA86C655",
                        "bleachingDistance": 0.4,
                        "class": "LensFlarePanoramaOverlay"
                       }
                      ],
                      "thumbnailUrl": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_t.jpg",
                      "class": "SphericPanoramaFrame"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_t.jpg"
                   },
                   "backwardYaw": -35.71,
                   "yaw": 29.22,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
                   "backwardYaw": 75.02,
                   "yaw": -3.72,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
                   "backwardYaw": 100.42,
                   "yaw": -32.6,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "hfov": 360,
                 "hfovMax": 130,
                 "hfovMin": 60,
                 "class": "Panorama",
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_hq.jpeg",
                      "width": 6434,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "height": 3217,
                      "class": "ImageResourceLevel"
                     },
                     {
                      "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_lq.jpeg",
                      "width": 2048,
                      "tags": "preload",
                      "height": 1024,
                      "class": "ImageResourceLevel"
                     },
                     {
                      "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A.jpeg",
                      "width": 4002,
                      "height": 2001,
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "yaw": 29.22,
                       "hfov": 6.59,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_13_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 0.09,
                       "class": "HotspotPanoramaOverlayMap"
                      }
                     ],
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248, this.camera_985000FE_88EA_B1C0_41D0_2BDD832ECF9D); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 6.59,
                       "class": "HotspotPanoramaOverlayImage",
                       "distance": 50,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_13_0.png",
                          "width": 117,
                          "height": 117,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 0.09,
                       "yaw": 29.22
                      }
                     ],
                     "id": "overlay_B5840B4A_B8A1_41F1_41E6_B16D00999FF1",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "yaw": -3.72,
                       "hfov": 6.49,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_14_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -10.29,
                       "class": "HotspotPanoramaOverlayMap"
                      }
                     ],
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD, this.camera_9821910A_88EA_B040_41D2_F8A9E0848581); this.mainPlayList.set('selectedIndex', 1)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 6.49,
                       "class": "HotspotPanoramaOverlayImage",
                       "distance": 50,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_14_0.png",
                          "width": 117,
                          "height": 117,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -10.29,
                       "yaw": -3.72
                      }
                     ],
                     "id": "overlay_B5843B4A_B8A1_41F1_41C6_6A5CD43D7CA5",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "yaw": -4.95,
                       "hfov": 6.55,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_15_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 6.21,
                       "class": "HotspotPanoramaOverlayMap"
                      }
                     ],
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_985EA0F1_88EA_B1C0_41D3_2299404DC9BA); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 6.55,
                       "class": "HotspotPanoramaOverlayImage",
                       "distance": 50,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_15_0.png",
                          "width": 117,
                          "height": 117,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 6.21,
                       "yaw": -4.95
                      }
                     ],
                     "id": "overlay_B587CB4A_B8A1_41F1_41D8_D517929CA23D",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "yaw": -32.6,
                       "hfov": 6.55,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_16_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -6.69,
                       "class": "HotspotPanoramaOverlayMap"
                      }
                     ],
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368, this.camera_9832A116_88EA_B040_41AB_EAEEFBA8DBAD); this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 6.55,
                       "class": "HotspotPanoramaOverlayImage",
                       "distance": 50,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_16_0.png",
                          "width": 117,
                          "height": 117,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -6.69,
                       "yaw": -32.6
                      }
                     ],
                     "id": "overlay_B587EB4A_B8A1_41F1_41D3_4EF9F180E309",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "yaw": 8.79,
                       "hfov": 8.32,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_18_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -18.87,
                       "class": "HotspotPanoramaOverlayMap"
                      }
                     ],
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_866FC64C_88ED_90C7_41C0_6679B88019D3, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_87A33F3F_88EA_9040_41BF_2EEF9A10D351, null, null, null, null, false)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 8.32,
                       "class": "HotspotPanoramaOverlayImage",
                       "distance": 50,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_18_0.png",
                          "width": 157,
                          "height": 157,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -18.87,
                       "yaw": 8.79
                      }
                     ],
                     "id": "overlay_86EBD20A_88ED_F040_41CB_01CFAF03028C",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay"
                    },
                    "this.popup_866FC64C_88ED_90C7_41C0_6679B88019D3",
                    {
                     "yaw": -31.92,
                     "pitch": 45.05,
                     "bleaching": 0.7,
                     "id": "overlay_865EFC2C_88EB_9040_41C5_E8AABE69D51D",
                     "bleachingDistance": 0.4,
                     "class": "LensFlarePanoramaOverlay"
                    }
                   ],
                   "thumbnailUrl": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_t.jpg",
                   "class": "SphericPanoramaFrame"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_t.jpg"
                },
                "backwardYaw": -3.72,
                "yaw": 75.02,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "hfov": 360,
              "hfovMax": 130,
              "hfovMin": 60,
              "class": "Panorama",
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_hq.jpeg",
                   "width": 6434,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "height": 3217,
                   "class": "ImageResourceLevel"
                  },
                  {
                   "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_lq.jpeg",
                   "width": 2048,
                   "tags": "preload",
                   "height": 1024,
                   "class": "ImageResourceLevel"
                  },
                  {
                   "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD.jpeg",
                   "width": 4002,
                   "height": 2001,
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "yaw": 75.02,
                    "hfov": 6.57,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_0_HS_5_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 4.73,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A, this.camera_87528FCE_88EA_8FC0_41DE_47DA97A11B6A); this.mainPlayList.set('selectedIndex', 0)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 6.57,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 50,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_0_HS_5_0.png",
                       "width": 117,
                       "height": 117,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 4.73,
                    "yaw": 75.02
                   }
                  ],
                  "id": "overlay_B7B8CE83_B8A2_C377_41AD_576401C06BB0",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "yaw": -145.7,
                    "hfov": 6.58,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_0_HS_6_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 3.42,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368, this.camera_8740DFBC_88EA_9040_41DA_BA66F31610FA); this.mainPlayList.set('selectedIndex', 2)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 6.58,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 50,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_0_HS_6_0.png",
                       "width": 117,
                       "height": 117,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 3.42,
                    "yaw": -145.7
                   }
                  ],
                  "id": "overlay_B7B8FE83_B8A2_C377_41D9_43D4D856B302",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "yaw": -10.82,
                    "hfov": 8.74,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_0_HS_8_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -6,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupPanoramaOverlay(this.popup_8636F31A_88EB_9040_41D0_60983B82647B, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_87A01F43_88EA_90C0_41D6_CF360A8D02BD, null, null, null, null, false)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 8.74,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 50,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_0_HS_8_0.png",
                       "width": 157,
                       "height": 157,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -6,
                    "yaw": -10.82
                   }
                  ],
                  "id": "overlay_8665FADC_88EB_71C0_41E0_05E6512EFA9C",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay"
                 },
                 "this.popup_8636F31A_88EB_9040_41D0_60983B82647B",
                 {
                  "yaw": -123.34,
                  "pitch": 21.25,
                  "bleaching": 0.7,
                  "id": "overlay_86B56523_88EB_7041_41DB_596A934ADE2E",
                  "bleachingDistance": 0.4,
                  "class": "LensFlarePanoramaOverlay"
                 }
                ],
                "thumbnailUrl": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_t.jpg",
                "class": "SphericPanoramaFrame"
               }
              ],
              "thumbnailUrl": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_t.jpg"
             },
             "backwardYaw": -145.7,
             "yaw": 75.37,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
             "backwardYaw": -32.6,
             "yaw": 100.42,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "hfov": 360,
           "hfovMax": 130,
           "hfovMin": 60,
           "class": "Panorama",
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_hq.jpeg",
                "width": 6434,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "height": 3217,
                "class": "ImageResourceLevel"
               },
               {
                "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_lq.jpeg",
                "width": 2048,
                "tags": "preload",
                "height": 1024,
                "class": "ImageResourceLevel"
               },
               {
                "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368.jpeg",
                "width": 4002,
                "height": 2001,
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "yaw": 2.73,
                 "hfov": 8.63,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_8_0_0_map.gif",
                    "width": 21,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -11.04,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_9A426626_94E4_7312_41DB_0F6235998161, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','borderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_86B91A9F_952C_B331_41D5_14F31A9DC9C5, null, null, null, null, false)",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "hfov": 8.63,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 50,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_8_0.png",
                    "width": 157,
                    "height": 117,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -11.04,
                 "yaw": 2.73
                }
               ],
               "id": "overlay_B6C31A07_B8A3_437F_419A_9C49F5CB0636",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "yaw": -27.77,
                 "hfov": 6.5,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_9_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 9.77,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_8735FFF3_88EA_8FC0_41E0_2220A9253CD9); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "hfov": 6.5,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 50,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_9_0.png",
                    "width": 117,
                    "height": 117,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 9.77,
                 "yaw": -27.77
                }
               ],
               "id": "overlay_B6C0DA08_B8A3_4371_41E1_E87BCFFAD2AC",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "yaw": -95.53,
                 "hfov": 6.59,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_10_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -0.26,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA, this.camera_87241FE0_88EA_8FC0_41DB_4F30ABC36417); this.mainPlayList.set('selectedIndex', 3)",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "hfov": 6.59,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 50,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_10_0.png",
                    "width": 117,
                    "height": 117,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -0.26,
                 "yaw": -95.53
                }
               ],
               "id": "overlay_B6C0FA08_B8A3_4371_41CC_1C8DEF596AB1",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "yaw": 100.42,
                 "hfov": 6.59,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_11_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -0.99,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A, this.camera_871A0017_88EA_B040_41DA_234EA01DB976); this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "hfov": 6.59,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 50,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_11_0.png",
                    "width": 117,
                    "height": 117,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -0.99,
                 "yaw": 100.42
                }
               ],
               "id": "overlay_B6C08A08_B8A3_4371_41E0_67D8D8B8D894",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "yaw": 75.37,
                 "hfov": 6.49,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_12_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -10.29,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD, this.camera_8708D005_88EA_B040_4193_C187EE6BDB94); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "hfov": 6.49,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 50,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_12_0.png",
                    "width": 117,
                    "height": 117,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -10.29,
                 "yaw": 75.37
                }
               ],
               "id": "overlay_B6C0BA08_B8A3_4371_41DB_65B8C8E99F80",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "showEasing": "cubic_in",
               "showDuration": 500,
               "popupMaxWidth": "95%",
               "yaw": 2.73,
               "rotationZ": 0,
               "popupMaxHeight": "95%",
               "rotationY": 0,
               "id": "popup_9A426626_94E4_7312_41DB_0F6235998161",
               "hfov": 8.63,
               "rotationX": 0,
               "class": "PopupPanoramaOverlay",
               "image": {
                "levels": [
                 {
                  "url": "media/popup_9A426626_94E4_7312_41DB_0F6235998161_0_1.jpg",
                  "width": 1024,
                  "height": 576,
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "pitch": -11.04,
               "popupDistance": 100,
               "hideEasing": "cubic_out",
               "hideDuration": 500
              },
              {
               "yaw": -75.74,
               "pitch": 19.36,
               "bleaching": 0.7,
               "id": "overlay_86A8AF03_88EB_7041_41E0_03C9EEFD36DE",
               "bleachingDistance": 0.4,
               "class": "LensFlarePanoramaOverlay"
              }
             ],
             "thumbnailUrl": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_t.jpg",
             "class": "SphericPanoramaFrame"
            }
           ],
           "thumbnailUrl": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_t.jpg"
          },
          "backwardYaw": -95.53,
          "yaw": 44.2,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "hfov": 360,
        "hfovMax": 130,
        "hfovMin": 60,
        "class": "Panorama",
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_hq.jpeg",
             "width": 6434,
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "height": 3217,
             "class": "ImageResourceLevel"
            },
            {
             "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_lq.jpeg",
             "width": 2048,
             "tags": "preload",
             "height": 1024,
             "class": "ImageResourceLevel"
            },
            {
             "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA.jpeg",
             "width": 4002,
             "height": 2001,
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "yaw": -37.33,
              "hfov": 6.45,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_7_0_0_map.gif",
                 "width": 16,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -11.93,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD, this.camera_98EBB028_88EA_B040_41C3_52B36A3B3BA0); this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "hfov": 6.45,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 50,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_7_0.png",
                 "width": 117,
                 "height": 117,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -11.93,
              "yaw": -37.33
             }
            ],
            "id": "overlay_B5CA52DD_B8A2_C093_41C1_32FB4D1CA5C0",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "yaw": 0.88,
              "hfov": 6.58,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_8_0_0_map.gif",
                 "width": 16,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -3.85,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_98FD203A_88EA_B040_41CE_730698589FAF); this.mainPlayList.set('selectedIndex', 7)",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "hfov": 6.58,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 50,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_8_0.png",
                 "width": 117,
                 "height": 117,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -3.85,
              "yaw": 0.88
             }
            ],
            "id": "overlay_B5CA62DD_B8A2_C093_419E_5DCE32C6A3DE",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "yaw": 44.2,
              "hfov": 6.3,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_9_0_0_map.gif",
                 "width": 16,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -17.18,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368, this.camera_98CEB04C_88EA_B0C0_41B3_73F478F289D8); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "hfov": 6.3,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 50,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_9_0.png",
                 "width": 117,
                 "height": 117,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -17.18,
              "yaw": 44.2
             }
            ],
            "id": "overlay_B5CA92DD_B8A2_C093_41DB_2A427CFC3F65",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "yaw": -39.66,
              "hfov": 5.63,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_10_0_0_map.gif",
                 "width": 16,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -50.17,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_892769D9_8624_AFD2_4193_9C36555C5962, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_8952FA45_862C_6C32_41E0_3E534A8FC643, null, null, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "hfov": 5.63,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 50,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_10_0.png",
                 "width": 157,
                 "height": 157,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -50.17,
              "yaw": -39.66
             }
            ],
            "id": "overlay_89E17659_8624_64D2_41D6_86DB49A7FEFE",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "showEasing": "cubic_in",
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "yaw": -39.66,
            "rotationZ": 0,
            "popupMaxHeight": "95%",
            "rotationY": 0,
            "id": "popup_892769D9_8624_AFD2_4193_9C36555C5962",
            "hfov": 5.63,
            "rotationX": 0,
            "class": "PopupPanoramaOverlay",
            "image": {
             "levels": [
              {
               "url": "media/popup_892769D9_8624_AFD2_4193_9C36555C5962_0_1.jpg",
               "width": 1024,
               "height": 576,
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "pitch": -50.17,
            "popupDistance": 100,
            "hideEasing": "cubic_out",
            "hideDuration": 500
           },
           {
            "yaw": -94.25,
            "pitch": 26.92,
            "bleaching": 0.7,
            "id": "overlay_86A5E6EA_88EA_91C0_41D0_26976892F905",
            "bleachingDistance": 0.4,
            "class": "LensFlarePanoramaOverlay"
           }
          ],
          "thumbnailUrl": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_t.jpg",
          "class": "SphericPanoramaFrame"
         }
        ],
        "thumbnailUrl": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_t.jpg"
       },
       "backwardYaw": -37.33,
       "yaw": 93.34,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
       "backwardYaw": -60.09,
       "yaw": 20.8,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
       "backwardYaw": 106.92,
       "yaw": -34.35,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "pitch": 0,
     "partial": false,
     "vfov": 180,
     "hfov": 360,
     "hfovMax": 130,
     "hfovMin": 60,
     "class": "Panorama",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_hq.jpeg",
          "width": 6434,
          "tags": [
           "oculusgo",
           "ipadpro"
          ],
          "height": 3217,
          "class": "ImageResourceLevel"
         },
         {
          "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_lq.jpeg",
          "width": 2048,
          "tags": "preload",
          "height": 1024,
          "class": "ImageResourceLevel"
         },
         {
          "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD.jpeg",
          "width": 4002,
          "height": 2001,
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "yaw": 0.8,
           "hfov": 6.58,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_6_0_0_map.gif",
              "width": 21,
              "height": 16,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -41.54,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','borderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_86C7CA9F_952C_B331_41D3_38C5166BA311, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "hfov": 6.58,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 50,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_6_0.png",
              "width": 157,
              "height": 117,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -41.54,
           "yaw": 0.8
          }
         ],
         "id": "overlay_B683CE32_B8A1_4391_41DB_9AD9A5E7634E",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "yaw": -25.37,
           "hfov": 8.67,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_7_0_0_map.gif",
              "width": 21,
              "height": 16,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.42,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','borderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_00E2A34F_0DE6_179A_4190_3A74D6498631, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "hfov": 8.67,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 50,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_7_0.png",
              "width": 157,
              "height": 117,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.42,
           "yaw": -25.37
          }
         ],
         "id": "overlay_B6839E33_B8A1_4397_4199_EF3385370003",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "yaw": 93.34,
           "hfov": 6.57,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_8_0_0_map.gif",
              "width": 16,
              "height": 16,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -4.52,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA, this.camera_878EAF60_88EA_90C0_41CC_7CDCD6EC20EB); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "hfov": 6.57,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 50,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_8_0.png",
              "width": 117,
              "height": 117,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -4.52,
           "yaw": 93.34
          }
         ],
         "id": "overlay_B6837E33_B8A1_4397_41E1_D983E27C3612",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "yaw": 20.8,
           "hfov": 6.59,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_9_0_0_map.gif",
              "width": 16,
              "height": 16,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 1.44,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_87830F6E_88EA_90C0_41D5_A5B2B0CAC91D); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "hfov": 6.59,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 50,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_9_0.png",
              "width": 117,
              "height": 117,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 1.44,
           "yaw": 20.8
          }
         ],
         "id": "overlay_B6836E33_B8A1_4397_41E5_DAA6A17B9020",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "yaw": -34.35,
           "hfov": 6.59,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_10_0_0_map.gif",
              "width": 16,
              "height": 16,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 2.08,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE, this.camera_8797AF7A_88EA_90C0_41C8_F7DE03EE1A3B); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "hfov": 6.59,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 50,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_10_0.png",
              "width": 117,
              "height": 117,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 2.08,
           "yaw": -34.35
          }
         ],
         "id": "overlay_B6834E33_B8A1_4397_41AD_DCA0D4307539",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "showEasing": "cubic_in",
         "showDuration": 500,
         "popupMaxWidth": "95%",
         "yaw": 0.8,
         "rotationZ": 0,
         "popupMaxHeight": "95%",
         "rotationY": 0,
         "id": "popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D",
         "hfov": 6.58,
         "rotationX": 0,
         "class": "PopupPanoramaOverlay",
         "image": {
          "levels": [
           {
            "url": "media/popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D_0_1.jpg",
            "width": 1024,
            "height": 576,
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "pitch": -41.54,
         "popupDistance": 100,
         "hideEasing": "cubic_out",
         "hideDuration": 500
        },
        {
         "showEasing": "cubic_in",
         "showDuration": 500,
         "popupMaxWidth": "95%",
         "yaw": -25.37,
         "rotationZ": 0,
         "popupMaxHeight": "95%",
         "rotationY": 0,
         "id": "popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7",
         "hfov": 8.67,
         "rotationX": 0,
         "class": "PopupPanoramaOverlay",
         "image": {
          "levels": [
           {
            "url": "media/popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7_0_1.jpg",
            "width": 1024,
            "height": 576,
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "pitch": -9.42,
         "popupDistance": 100,
         "hideEasing": "cubic_out",
         "hideDuration": 500
        },
        {
         "yaw": -144.49,
         "pitch": 18.23,
         "bleaching": 0.7,
         "id": "overlay_86A61233_88EA_B040_4186_CD0276E2A376",
         "bleachingDistance": 0.4,
         "class": "LensFlarePanoramaOverlay"
        }
       ],
       "thumbnailUrl": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_t.jpg",
       "class": "SphericPanoramaFrame"
      }
     ],
     "thumbnailUrl": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_t.jpg"
    },
    "backwardYaw": 20.8,
    "yaw": -60.09,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "panorama": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
    "backwardYaw": 5.29,
    "yaw": 33.18,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "panorama": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
    "backwardYaw": -4.95,
    "yaw": 130.91,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "panorama": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
    "backwardYaw": 0.88,
    "yaw": -138.9,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "panorama": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
    "backwardYaw": 41.14,
    "yaw": -19.29,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "panorama": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
    "backwardYaw": -27.77,
    "yaw": 141.72,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "pitch": 0,
  "partial": false,
  "vfov": 180,
  "hfov": 360,
  "hfovMax": 130,
  "hfovMin": 60,
  "class": "Panorama",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_hq.jpeg",
       "width": 6434,
       "tags": [
        "oculusgo",
        "ipadpro"
       ],
       "height": 3217,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_lq.jpeg",
       "width": 2048,
       "tags": "preload",
       "height": 1024,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8.jpeg",
       "width": 4002,
       "height": 2001,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "yaw": 9.49,
        "hfov": 8.5,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_10_0_0_map.gif",
           "width": 21,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.86,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_84A25397_94EC_7131_41E2_3DC776E3E17A, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','borderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_86C0BAA4_952C_B317_41D5_ED7EBC4E8F95, null, null, null, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 8.5,
        "class": "HotspotPanoramaOverlayImage",
        "distance": 50,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_10_0.png",
           "width": 157,
           "height": 117,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.86,
        "yaw": 9.49
       }
      ],
      "id": "overlay_B7ED8B02_B8A3_4171_41E3_F93B8AA4A121",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "yaw": -60.09,
        "hfov": 6.21,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_11_0_0_map.gif",
           "width": 16,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.66,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD, this.camera_98DFF05E_88EA_B0C0_41C7_BE49D5426A92); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 6.21,
        "class": "HotspotPanoramaOverlayImage",
        "distance": 50,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_11_0.png",
           "width": 117,
           "height": 117,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.66,
        "yaw": -60.09
       }
      ],
      "id": "overlay_B7EA2B02_B8A3_4171_41BB_4B4FCFFF68D7",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "yaw": 33.18,
        "hfov": 6.51,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_12_0_0_map.gif",
           "width": 16,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.17,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248, this.camera_98D14070_88EA_B0C0_41DF_CF6D7740BA7E); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 6.51,
        "class": "HotspotPanoramaOverlayImage",
        "distance": 50,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_12_0.png",
           "width": 117,
           "height": 117,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.17,
        "yaw": 33.18
       }
      ],
      "id": "overlay_B7EA1B02_B8A3_4171_41E1_3A0EC9C38B3E",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "yaw": 130.91,
        "hfov": 6.53,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_13_0_0_map.gif",
           "width": 16,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.82,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A, this.camera_98A2C082_88EA_B040_41DC_0A3E43E20F7C); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 6.53,
        "class": "HotspotPanoramaOverlayImage",
        "distance": 50,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_13_0.png",
           "width": 117,
           "height": 117,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.82,
        "yaw": 130.91
       }
      ],
      "id": "overlay_B7EAEB02_B8A3_4171_41E3_07B6F7327A93",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "yaw": 141.72,
        "hfov": 5.94,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_14_0_0_map.gif",
           "width": 16,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.68,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368, this.camera_989740B6_88EA_B040_4127_9B998D956A90); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 5.94,
        "class": "HotspotPanoramaOverlayImage",
        "distance": 50,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_14_0.png",
           "width": 117,
           "height": 117,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.68,
        "yaw": 141.72
       }
      ],
      "id": "overlay_B7EABB02_B8A3_4171_41E6_F900D04153FD",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "yaw": -138.9,
        "hfov": 6.4,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_15_0_0_map.gif",
           "width": 16,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.89,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA, this.camera_98B49093_88EA_B040_41B4_4B539727563C); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 6.4,
        "class": "HotspotPanoramaOverlayImage",
        "distance": 50,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_15_0.png",
           "width": 117,
           "height": 117,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.89,
        "yaw": -138.9
       }
      ],
      "id": "overlay_B7EAAB02_B8A3_4171_41DE_37EF204C7CB9",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "yaw": -19.29,
        "hfov": 5.17,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_16_0_0_map.gif",
           "width": 16,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.75,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE, this.camera_9885F0A4_88EA_B040_41D4_D491674196A8); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 5.17,
        "class": "HotspotPanoramaOverlayImage",
        "distance": 50,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_16_0.png",
           "width": 92,
           "height": 93,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.75,
        "yaw": -19.29
       }
      ],
      "id": "overlay_B7EA9B02_B8A3_4171_41E0_45913E1B9A7C",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "showEasing": "cubic_in",
      "showDuration": 500,
      "popupMaxWidth": "95%",
      "yaw": 9.49,
      "rotationZ": 0,
      "popupMaxHeight": "95%",
      "rotationY": 0,
      "id": "popup_84A25397_94EC_7131_41E2_3DC776E3E17A",
      "hfov": 8.5,
      "rotationX": 0,
      "class": "PopupPanoramaOverlay",
      "image": {
       "levels": [
        {
         "url": "media/popup_84A25397_94EC_7131_41E2_3DC776E3E17A_0_1.jpg",
         "width": 1024,
         "height": 576,
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": -14.86,
      "popupDistance": 100,
      "hideEasing": "cubic_out",
      "hideDuration": 500
     },
     {
      "yaw": -69.7,
      "pitch": 17.47,
      "bleaching": 0.7,
      "id": "overlay_86AC1A7D_88EA_F0C0_41CA_9C2BD9B3734F",
      "bleachingDistance": 0.4,
      "class": "LensFlarePanoramaOverlay"
     }
    ],
    "thumbnailUrl": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_8708D005_88EA_B040_4193_C187EE6BDB94",
  "initialPosition": {
   "yaw": 34.3,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9868A0C8_88EA_B1C0_41D0_7E3FEC6FC561",
  "initialPosition": {
   "yaw": 145.65,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "buttonCardboardView": {
   "maxWidth": 58,
   "maxHeight": 58,
   "backgroundOpacity": 0,
   "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
   "transparencyActive": true,
   "paddingLeft": 0,
   "width": 58,
   "borderSize": 0,
   "shadow": false,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "minHeight": 1,
   "mode": "push",
   "minWidth": 1,
   "paddingRight": 0,
   "height": 58,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
   "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
   "propagateClick": true,
   "data": {
    "name": "IconButton VR"
   },
   "horizontalAlign": "center",
   "class": "IconButton",
   "visible": false,
   "cursor": "hand",
   "paddingBottom": 0
  },
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "buttonToggleGyroscope": {
   "maxWidth": 58,
   "maxHeight": 58,
   "backgroundOpacity": 0,
   "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
   "transparencyActive": true,
   "paddingLeft": 0,
   "width": 58,
   "borderSize": 0,
   "shadow": false,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "minHeight": 1,
   "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
   "mode": "toggle",
   "minWidth": 1,
   "paddingRight": 0,
   "height": 58,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
   "propagateClick": true,
   "data": {
    "name": "IconButton GYRO"
   },
   "horizontalAlign": "center",
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0
  },
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonToggleHotspots": {
   "maxWidth": 58,
   "maxHeight": 58,
   "backgroundOpacity": 0,
   "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
   "transparencyActive": true,
   "paddingLeft": 0,
   "width": 58,
   "borderSize": 0,
   "shadow": false,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "minHeight": 1,
   "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
   "mode": "toggle",
   "minWidth": 1,
   "paddingRight": 0,
   "height": 58,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
   "propagateClick": true,
   "data": {
    "name": "IconButton HS "
   },
   "horizontalAlign": "center",
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0
  },
  "class": "PanoramaPlayer"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_989740B6_88EA_B040_4127_9B998D956A90",
  "initialPosition": {
   "yaw": 152.23,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_87830F6E_88EA_90C0_41D5_A5B2B0CAC91D",
  "initialPosition": {
   "yaw": 119.91,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_985EA0F1_88EA_B1C0_41D3_2299404DC9BA",
  "initialPosition": {
   "yaw": -49.09,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282_0_0.jpg",
    "width": 2240,
    "height": 1260,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282_0_1.jpg",
    "width": 2048,
    "height": 1152,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282_0_2.jpg",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282_0_3.jpg",
    "width": 512,
    "height": 288,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_00E1834F_0DE6_179A_418D_7C59A643B09E",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_984D50E5_88EA_B1C0_41DB_1C6E7D55822A",
  "initialPosition": {
   "yaw": -138.67,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_98D14070_88EA_B0C0_41DF_CF6D7740BA7E",
  "initialPosition": {
   "yaw": -174.71,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_87528FCE_88EA_8FC0_41DE_47DA97A11B6A",
  "initialPosition": {
   "yaw": 176.28,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_8636F31A_88EB_9040_41D0_60983B82647B_0_0.jpg",
    "width": 3000,
    "height": 1743,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_8636F31A_88EB_9040_41D0_60983B82647B_0_1.jpg",
    "width": 2048,
    "height": 1189,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_8636F31A_88EB_9040_41D0_60983B82647B_0_2.jpg",
    "width": 1024,
    "height": 594,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_8636F31A_88EB_9040_41D0_60983B82647B_0_3.jpg",
    "width": 512,
    "height": 297,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_87A01F43_88EA_90C0_41D6_CF360A8D02BD",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_985000FE_88EA_B1C0_41D0_2BDD832ECF9D",
  "initialPosition": {
   "yaw": 144.29,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_9A426626_94E4_7312_41DB_0F6235998161_0_0.jpg",
    "width": 1920,
    "height": 1080,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_9A426626_94E4_7312_41DB_0F6235998161_0_1.jpg",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_9A426626_94E4_7312_41DB_0F6235998161_0_2.jpg",
    "width": 512,
    "height": 288,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_86B91A9F_952C_B331_41D5_14F31A9DC9C5",
  "class": "ImageResource"
 },
 "this.popup_846D32DD_94EF_9331_41C4_9360FA56FF36",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_987B90D9_88EA_B1C0_41D3_B41F09E1730F",
  "initialPosition": {
   "yaw": 160.71,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
 "this.popup_892769D9_8624_AFD2_4193_9C36555C5962",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_98DFF05E_88EA_B0C0_41C7_BE49D5426A92",
  "initialPosition": {
   "yaw": -159.2,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7_0_0.jpg",
    "width": 1920,
    "height": 1080,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7_0_1.jpg",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7_0_2.jpg",
    "width": 512,
    "height": 288,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_00E2A34F_0DE6_179A_4190_3A74D6498631",
  "class": "ImageResource"
 },
 {
  "levels": [
   {
    "url": "media/popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582_0_0.jpg",
    "width": 1920,
    "height": 1080,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582_0_1.jpg",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582_0_2.jpg",
    "width": 512,
    "height": 288,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_86C5FA9F_952C_B331_41D0_AE789F4CE5A5",
  "class": "ImageResource"
 },
 "this.popup_9A426626_94E4_7312_41DB_0F6235998161",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_8797AF7A_88EA_90C0_41C8_F7DE03EE1A3B",
  "initialPosition": {
   "yaw": -73.08,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_846D32DD_94EF_9331_41C4_9360FA56FF36_0_0.jpg",
    "width": 1920,
    "height": 1080,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_846D32DD_94EF_9331_41C4_9360FA56FF36_0_1.jpg",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_846D32DD_94EF_9331_41C4_9360FA56FF36_0_2.jpg",
    "width": 512,
    "height": 288,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_86C2EAA4_952C_B317_41E0_D1F4952F4164",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_98FD203A_88EA_B040_41CE_730698589FAF",
  "initialPosition": {
   "yaw": 41.1,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.popup_84A25397_94EC_7131_41E2_3DC776E3E17A",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9821910A_88EA_B040_41D2_F8A9E0848581",
  "initialPosition": {
   "yaw": -104.98,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7",
 "this.popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3",
 "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_98A2C082_88EA_B040_41DC_0A3E43E20F7C",
  "initialPosition": {
   "yaw": 175.05,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
    "camera": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
    "camera": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
    "camera": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
    "camera": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
    "camera": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
    "camera": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
    "camera": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
    "camera": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
  "class": "PlayList"
 },
 "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_877DCF99_88EA_9040_41D7_3ADA8651611B",
  "initialPosition": {
   "yaw": 145.76,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3_0_0.jpg",
    "width": 1920,
    "height": 1080,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3_0_1.jpg",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3_0_2.jpg",
    "width": 512,
    "height": 288,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_00E0C34F_0DE6_179A_41A3_4FE116A624F6",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9832A116_88EA_B040_41AB_EAEEFBA8DBAD",
  "initialPosition": {
   "yaw": -79.58,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_878EAF60_88EA_90C0_41CC_7CDCD6EC20EB",
  "initialPosition": {
   "yaw": 142.67,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "viewerArea": {
   "paddingBottom": 0,
   "toolTipFontSize": 12,
   "toolTipBackgroundColor": "#F6F6F6",
   "id": "MapViewer",
   "left": 0,
   "playbackBarHeadShadow": true,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipBorderRadius": 3,
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "borderSize": 0,
   "progressBackgroundOpacity": 1,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadBorderColor": "#000000",
   "toolTipTextShadowColor": "#000000",
   "playbackBarOpacity": 1,
   "width": "100%",
   "toolTipShadowBlurRadius": 3,
   "borderRadius": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipOpacity": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "minHeight": 1,
   "progressBarOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBorderColor": "#FFFFFF",
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarProgressOpacity": 1,
   "toolTipFontStyle": "normal",
   "toolTipShadowColor": "#333333",
   "paddingRight": 0,
   "progressLeft": 0,
   "minWidth": 1,
   "playbackBarHeadBorderSize": 0,
   "playbackBarBorderSize": 0,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarBackgroundOpacity": 1,
   "progressBorderSize": 0,
   "toolTipFontFamily": "Arial",
   "playbackBarHeadWidth": 6,
   "playbackBarHeight": 10,
   "height": "100%",
   "toolTipTextShadowOpacity": 0,
   "transitionDuration": 500,
   "propagateClick": false,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarLeft": 0,
   "progressBackgroundColorRatios": [
    0.01
   ],
   "progressBorderRadius": 0,
   "toolTipPaddingBottom": 4,
   "class": "ViewerArea",
   "playbackBarRight": 0,
   "playbackBarHeadHeight": 15,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "progressBarBorderSize": 0,
   "transitionMode": "blending",
   "displayTooltipInTouchScreens": true,
   "toolTipFontColor": "#606060",
   "toolTipPaddingLeft": 6,
   "paddingLeft": 0,
   "playbackBarProgressBorderRadius": 0,
   "shadow": false,
   "playbackBarProgressBorderSize": 0,
   "toolTipPaddingRight": 6,
   "toolTipDisplayTime": 600,
   "progressBarBorderColor": "#0066FF",
   "top": 0,
   "rollOver": "this.setMediaBehaviour(this.playList_87DDEF26_88EA_9040_41D9_9EEB164A31CE, 0)",
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBorderRadius": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "toolTipFontWeight": "normal",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadOpacity": 1,
   "toolTipPaddingTop": 4,
   "paddingTop": 0,
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "progressRight": 0,
   "playbackBarHeadBorderRadius": 0,
   "toolTipBorderSize": 1,
   "playbackBarBorderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipBorderColor": "#767676",
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowSpread": 0,
   "playbackBarProgressBorderColor": "#000000",
   "progressBarBackgroundColorDirection": "vertical",
   "progressBorderColor": "#FFFFFF",
   "progressOpacity": 1,
   "playbackBarBottom": 0,
   "data": {
    "name": "Floor Plan"
   },
   "progressBottom": 2,
   "progressHeight": 10,
   "playbackBarHeadBackgroundColorDirection": "vertical"
  },
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "class": "MapPlayer"
 },
 "this.popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D",
 "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
 "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
 {
  "minimumZoomFactor": 0.5,
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "image": {
   "levels": [
    {
     "url": "media/map_8407EF4E_90ED_E412_4180_9413E8B12AF8.jpeg",
     "width": 1600,
     "height": 1081,
     "class": "ImageResourceLevel"
    },
    {
     "url": "media/map_8407EF4E_90ED_E412_4180_9413E8B12AF8_lq.jpeg",
     "width": 622,
     "tags": "preload",
     "height": 421,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "label": "master-plan",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "id": "map_8407EF4E_90ED_E412_4180_9413E8B12AF8",
  "maximumZoomFactor": 1.2,
  "class": "Map",
  "width": 2000,
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "initialZoomFactor": 1,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "height": 1352,
  "thumbnailUrl": "media/map_8407EF4E_90ED_E412_4180_9413E8B12AF8_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_874F5FAB_88EA_9040_41E0_7FD77F8600AF",
  "initialPosition": {
   "yaw": -150.78,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_8735FFF3_88EA_8FC0_41E0_2220A9253CD9",
  "initialPosition": {
   "yaw": -38.28,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9885F0A4_88EA_B040_41D4_D491674196A8",
  "initialPosition": {
   "yaw": -138.86,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_87241FE0_88EA_8FC0_41DB_4F30ABC36417",
  "initialPosition": {
   "yaw": -135.8,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_8407EF4E_90ED_E412_4180_9413E8B12AF8",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_87DDEF26_88EA_9040_41D9_9EEB164A31CE",
  "class": "PlayList"
 },
 "this.popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582",
 "this.popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282",
 {
  "levels": [
   {
    "url": "media/popup_866FC64C_88ED_90C7_41C0_6679B88019D3_0_0.jpg",
    "width": 1920,
    "height": 1080,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_866FC64C_88ED_90C7_41C0_6679B88019D3_0_1.jpg",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_866FC64C_88ED_90C7_41C0_6679B88019D3_0_2.jpg",
    "width": 512,
    "height": 288,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_87A33F3F_88EA_9040_41BF_2EEF9A10D351",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_876B7F86_88EA_9040_41CF_D173B536E106",
  "initialPosition": {
   "yaw": -146.82,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
    "camera": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
    "camera": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
    "camera": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
    "camera": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
    "camera": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
    "camera": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
    "camera": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
    "end": "this.trigger('tourEnded')",
    "camera": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_98CEB04C_88EA_B0C0_41B3_73F478F289D8",
  "initialPosition": {
   "yaw": 84.47,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_98EBB028_88EA_B040_41C3_52B36A3B3BA0",
  "initialPosition": {
   "yaw": -86.66,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_84A25397_94EC_7131_41E2_3DC776E3E17A_0_0.jpg",
    "width": 1920,
    "height": 1080,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_84A25397_94EC_7131_41E2_3DC776E3E17A_0_1.jpg",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_84A25397_94EC_7131_41E2_3DC776E3E17A_0_2.jpg",
    "width": 512,
    "height": 288,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_86C0BAA4_952C_B317_41D5_ED7EBC4E8F95",
  "class": "ImageResource"
 },
 {
  "levels": [
   {
    "url": "media/popup_892769D9_8624_AFD2_4193_9C36555C5962_0_0.jpg",
    "width": 1920,
    "height": 1080,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_892769D9_8624_AFD2_4193_9C36555C5962_0_1.jpg",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_892769D9_8624_AFD2_4193_9C36555C5962_0_2.jpg",
    "width": 512,
    "height": 288,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_8952FA45_862C_6C32_41E0_3E534A8FC643",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_871A0017_88EA_B040_41DA_234EA01DB976",
  "initialPosition": {
   "yaw": 147.4,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_98B49093_88EA_B040_41B4_4B539727563C",
  "initialPosition": {
   "yaw": -179.12,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 }
], "children": [
 {
  "paddingBottom": 0,
  "toolTipFontSize": 13,
  "toolTipBackgroundColor": "#000000",
  "id": "MainViewer",
  "left": 0,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderSize": 0,
  "progressBackgroundOpacity": 1,
  "toolTipShadowOpacity": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipTextShadowColor": "#000000",
  "playbackBarOpacity": 1,
  "width": "100%",
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipOpacity": 0.5,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "minHeight": 50,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressOpacity": 1,
  "toolTipFontStyle": "normal",
  "toolTipShadowColor": "#333333",
  "paddingRight": 0,
  "progressLeft": 0,
  "minWidth": 100,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderSize": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 0,
  "toolTipFontFamily": "Georgia",
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 10,
  "height": "100%",
  "toolTipTextShadowOpacity": 0,
  "transitionDuration": 500,
  "propagateClick": true,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "progressBackgroundColorRatios": [
   0.01
  ],
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 7,
  "class": "ViewerArea",
  "playbackBarRight": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "displayTooltipInTouchScreens": true,
  "toolTipFontColor": "#FFFFFF",
  "toolTipPaddingLeft": 10,
  "paddingLeft": 0,
  "playbackBarProgressBorderRadius": 0,
  "shadow": false,
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingRight": 10,
  "toolTipDisplayTime": 600,
  "progressBarBorderColor": "#0066FF",
  "top": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingTop": 7,
  "paddingTop": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressRight": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderSize": 1,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBorderColor": "#767676",
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#FFFFFF",
  "progressOpacity": 1,
  "playbackBarBottom": 5,
  "data": {
   "name": "Main Viewer"
  },
  "progressBottom": 0,
  "progressHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical"
 },
 {
  "children": [
   {
    "children": [
     {
      "backgroundColorRatios": [
       0
      ],
      "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
      "left": "0%",
      "width": 36,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "backgroundOpacity": 0.4,
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "verticalAlign": "top",
      "scrollBarOpacity": 0.5,
      "top": "0%",
      "minHeight": 1,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "minWidth": 1,
      "overflow": "scroll",
      "paddingRight": 0,
      "backgroundColor": [
       "#000000"
      ],
      "paddingTop": 0,
      "layout": "absolute",
      "height": "100%",
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "propagateClick": true,
      "data": {
       "name": "Container black"
      },
      "horizontalAlign": "left",
      "class": "Container",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "maxWidth": 80,
      "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
      "left": 10,
      "maxHeight": 80,
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "width": 50,
      "borderSize": 0,
      "shadow": false,
      "transparencyActive": true,
      "borderRadius": 0,
      "verticalAlign": "middle",
      "top": "40%",
      "minHeight": 1,
      "bottom": "40%",
      "mode": "push",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
      "propagateClick": true,
      "data": {
       "name": "IconButton arrow"
      },
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "left": "0%",
    "width": 66,
    "scrollBarVisible": "rollOver",
    "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "creationPolicy": "inAdvance",
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": "0%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "overflow": "scroll",
    "paddingRight": 0,
    "height": "100%",
    "paddingTop": 0,
    "layout": "absolute",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": true,
    "data": {
     "name": "- COLLAPSE"
    },
    "horizontalAlign": "left",
    "class": "Container",
    "visible": false,
    "gap": 10,
    "paddingBottom": 0
   },
   {
    "backgroundColorRatios": [
     0
    ],
    "children": [
     {
      "maxWidth": 1095,
      "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
      "left": "0%",
      "maxHeight": 1095,
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
      "width": "100%",
      "borderRadius": 0,
      "top": "0%",
      "minHeight": 30,
      "verticalAlign": "top",
      "minWidth": 40,
      "paddingRight": 0,
      "height": "25%",
      "paddingTop": 0,
      "propagateClick": true,
      "data": {
       "name": "Image Company"
      },
      "horizontalAlign": "left",
      "class": "Image",
      "scaleMode": "fit_inside",
      "paddingBottom": 0
     },
     {
      "children": [
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
        "backgroundOpacity": 0.3,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "height": 1,
        "verticalAlign": "top",
        "minWidth": 1,
        "overflow": "scroll",
        "paddingRight": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "layout": "absolute",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "propagateClick": true,
        "data": {
         "name": "line"
        },
        "horizontalAlign": "left",
        "class": "Container",
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "textDecoration": "none",
        "fontFamily": "Oswald",
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundOpacity": 0,
        "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
        "fontSize": 18,
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "fontColor": "#FFFFFF",
        "shadowSpread": 1,
        "borderRadius": 0,
        "width": "100%",
        "shadowBlurRadius": 6,
        "backgroundColorDirection": "vertical",
        "layout": "horizontal",
        "minHeight": 1,
        "pressedBackgroundOpacity": 1,
        "shadowColor": "#000000",
        "verticalAlign": "middle",
        "iconBeforeLabel": true,
        "mode": "push",
        "minWidth": 1,
        "borderColor": "#000000",
        "rollOverBackgroundOpacity": 0.8,
        "paddingRight": 0,
        "height": 50,
        "paddingTop": 0,
        "label": "Tour Information",
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "fontStyle": "italic",
        "gap": 5,
        "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "propagateClick": true,
        "data": {
         "name": "Button Tour Info"
        },
        "iconWidth": 32,
        "horizontalAlign": "left",
        "class": "Button",
        "fontWeight": "normal",
        "iconHeight": 32,
        "cursor": "hand",
        "paddingBottom": 0,
        "rollOverBackgroundColorRatios": [
         0
        ]
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
        "backgroundOpacity": 0.3,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "height": 1,
        "verticalAlign": "top",
        "minWidth": 1,
        "overflow": "scroll",
        "paddingRight": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "layout": "absolute",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "propagateClick": true,
        "data": {
         "name": "line"
        },
        "horizontalAlign": "left",
        "class": "Container",
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "textDecoration": "none",
        "fontFamily": "Oswald",
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundOpacity": 0,
        "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
        "fontSize": 18,
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "fontColor": "#FFFFFF",
        "shadowSpread": 1,
        "borderRadius": 0,
        "width": "100%",
        "shadowBlurRadius": 6,
        "backgroundColorDirection": "vertical",
        "layout": "horizontal",
        "minHeight": 1,
        "pressedBackgroundOpacity": 1,
        "shadowColor": "#000000",
        "verticalAlign": "middle",
        "iconBeforeLabel": true,
        "mode": "push",
        "minWidth": 1,
        "borderColor": "#000000",
        "rollOverBackgroundOpacity": 0.8,
        "paddingRight": 0,
        "height": 50,
        "paddingTop": 0,
        "label": "Tour Locations",
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "fontStyle": "italic",
        "gap": 23,
        "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "propagateClick": true,
        "data": {
         "name": "Button Panorama List"
        },
        "iconWidth": 32,
        "horizontalAlign": "left",
        "class": "Button",
        "fontWeight": "normal",
        "iconHeight": 32,
        "cursor": "hand",
        "paddingBottom": 0,
        "rollOverBackgroundColorRatios": [
         0
        ]
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
        "backgroundOpacity": 0.3,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "height": 1,
        "verticalAlign": "top",
        "minWidth": 1,
        "overflow": "scroll",
        "paddingRight": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "layout": "absolute",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "propagateClick": true,
        "data": {
         "name": "line"
        },
        "horizontalAlign": "left",
        "class": "Container",
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "textDecoration": "none",
        "fontFamily": "Oswald",
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundOpacity": 0,
        "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
        "fontSize": 18,
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "fontColor": "#FFFFFF",
        "shadowSpread": 1,
        "borderRadius": 0,
        "width": "100%",
        "shadowBlurRadius": 6,
        "backgroundColorDirection": "vertical",
        "layout": "horizontal",
        "minHeight": 1,
        "pressedBackgroundOpacity": 1,
        "shadowColor": "#000000",
        "verticalAlign": "middle",
        "iconBeforeLabel": true,
        "mode": "push",
        "minWidth": 1,
        "borderColor": "#000000",
        "rollOverBackgroundOpacity": 0.8,
        "paddingRight": 0,
        "height": 50,
        "paddingTop": 0,
        "label": "Site Location",
        "pressedLabel": "Location",
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "fontStyle": "italic",
        "gap": 5,
        "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "propagateClick": true,
        "data": {
         "name": "Button Location"
        },
        "iconWidth": 32,
        "horizontalAlign": "left",
        "class": "Button",
        "fontWeight": "normal",
        "iconHeight": 32,
        "cursor": "hand",
        "paddingBottom": 0,
        "rollOverBackgroundColorRatios": [
         0
        ]
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
        "backgroundOpacity": 0.3,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "height": 1,
        "verticalAlign": "top",
        "minWidth": 1,
        "overflow": "scroll",
        "paddingRight": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "layout": "absolute",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "propagateClick": true,
        "data": {
         "name": "line"
        },
        "horizontalAlign": "left",
        "class": "Container",
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "textDecoration": "none",
        "fontFamily": "Oswald",
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundOpacity": 0,
        "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
        "fontSize": 18,
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "fontColor": "#FFFFFF",
        "shadowSpread": 1,
        "borderRadius": 0,
        "width": "100%",
        "shadowBlurRadius": 6,
        "backgroundColorDirection": "vertical",
        "layout": "horizontal",
        "minHeight": 1,
        "pressedBackgroundOpacity": 1,
        "shadowColor": "#000000",
        "verticalAlign": "middle",
        "iconBeforeLabel": true,
        "mode": "push",
        "minWidth": 1,
        "borderColor": "#000000",
        "rollOverBackgroundOpacity": 0.8,
        "paddingRight": 0,
        "height": 50,
        "paddingTop": 0,
        "label": "Master Plan",
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "fontStyle": "italic",
        "gap": 5,
        "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "propagateClick": true,
        "data": {
         "name": "Button Floorplan"
        },
        "iconWidth": 32,
        "horizontalAlign": "left",
        "class": "Button",
        "fontWeight": "normal",
        "iconHeight": 32,
        "cursor": "hand",
        "paddingBottom": 0,
        "rollOverBackgroundColorRatios": [
         0
        ]
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
        "backgroundOpacity": 0.3,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "height": 1,
        "verticalAlign": "top",
        "minWidth": 1,
        "overflow": "scroll",
        "paddingRight": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "layout": "absolute",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "propagateClick": true,
        "data": {
         "name": "line"
        },
        "horizontalAlign": "left",
        "class": "Container",
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "textDecoration": "none",
        "fontFamily": "Oswald",
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundOpacity": 0,
        "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
        "fontSize": 18,
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "fontColor": "#FFFFFF",
        "shadowSpread": 1,
        "borderRadius": 0,
        "width": "100%",
        "shadowBlurRadius": 6,
        "backgroundColorDirection": "vertical",
        "layout": "horizontal",
        "minHeight": 1,
        "pressedBackgroundOpacity": 1,
        "shadowColor": "#000000",
        "verticalAlign": "middle",
        "iconBeforeLabel": true,
        "mode": "push",
        "minWidth": 1,
        "borderColor": "#000000",
        "rollOverBackgroundOpacity": 0.8,
        "paddingRight": 0,
        "height": 50,
        "paddingTop": 0,
        "label": "Overview Video",
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "fontStyle": "italic",
        "gap": 5,
        "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "propagateClick": true,
        "data": {
         "name": "Button Photoalbum"
        },
        "iconWidth": 32,
        "horizontalAlign": "left",
        "class": "Button",
        "fontWeight": "normal",
        "iconHeight": 32,
        "cursor": "hand",
        "paddingBottom": 0,
        "rollOverBackgroundColorRatios": [
         0
        ]
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
        "backgroundOpacity": 0.3,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "height": 1,
        "verticalAlign": "top",
        "minWidth": 1,
        "overflow": "scroll",
        "paddingRight": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "layout": "absolute",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "propagateClick": true,
        "data": {
         "name": "line"
        },
        "horizontalAlign": "left",
        "class": "Container",
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
        "backgroundOpacity": 0.3,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "height": 1,
        "verticalAlign": "top",
        "minWidth": 1,
        "overflow": "scroll",
        "paddingRight": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "layout": "absolute",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "propagateClick": true,
        "data": {
         "name": "line"
        },
        "horizontalAlign": "left",
        "class": "Container",
        "gap": 10,
        "paddingBottom": 0
       }
      ],
      "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
      "backgroundOpacity": 0,
      "scrollBarVisible": "rollOver",
      "right": "0%",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "100%",
      "borderRadius": 0,
      "scrollBarOpacity": 0.5,
      "top": "25%",
      "minHeight": 1,
      "scrollBarWidth": 10,
      "bottom": "25%",
      "verticalAlign": "middle",
      "minWidth": 1,
      "overflow": "scroll",
      "paddingRight": 0,
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "layout": "vertical",
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "propagateClick": true,
      "data": {
       "name": "-Container buttons"
      },
      "horizontalAlign": "left",
      "class": "Container",
      "gap": 0,
      "paddingBottom": 0
     },
     {
      "children": [
       {
        "backgroundColorRatios": [
         0
        ],
        "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
        "backgroundOpacity": 1,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": 40,
        "borderRadius": 0,
        "backgroundColorDirection": "vertical",
        "verticalAlign": "top",
        "scrollBarOpacity": 0.5,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "height": 2,
        "minWidth": 1,
        "overflow": "visible",
        "paddingRight": 0,
        "backgroundColor": [
         "#5CA1DE"
        ],
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "propagateClick": true,
        "data": {
         "name": "blue line"
        },
        "horizontalAlign": "left",
        "class": "Container",
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "maxWidth": 80,
        "maxHeight": 80,
        "backgroundOpacity": 0,
        "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
        "transparencyActive": true,
        "paddingLeft": 0,
        "width": 42,
        "borderSize": 0,
        "shadow": false,
        "borderRadius": 0,
        "verticalAlign": "middle",
        "minHeight": 1,
        "mode": "push",
        "minWidth": 1,
        "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
        "paddingRight": 0,
        "height": 42,
        "paddingTop": 0,
        "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
        "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
        "propagateClick": true,
        "data": {
         "name": "IconButton collapse"
        },
        "horizontalAlign": "center",
        "class": "IconButton",
        "cursor": "hand",
        "paddingBottom": 0
       }
      ],
      "left": "0%",
      "backgroundOpacity": 0,
      "scrollBarVisible": "rollOver",
      "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "100%",
      "borderRadius": 0,
      "scrollBarOpacity": 0.5,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "bottom": "0%",
      "verticalAlign": "bottom",
      "minWidth": 1,
      "overflow": "scroll",
      "paddingRight": 0,
      "height": "10.687%",
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "layout": "vertical",
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "propagateClick": true,
      "data": {
       "name": "-Container footer"
      },
      "horizontalAlign": "left",
      "class": "Container",
      "gap": 10,
      "paddingBottom": 0
     }
    ],
    "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
    "width": 300,
    "scrollBarVisible": "rollOver",
    "right": "0%",
    "paddingLeft": 40,
    "borderSize": 0,
    "shadow": false,
    "backgroundOpacity": 0.7,
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": "0%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "overflow": "scroll",
    "paddingRight": 40,
    "backgroundColor": [
     "#000000"
    ],
    "paddingTop": 40,
    "layout": "absolute",
    "height": "100%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": true,
    "data": {
     "name": "- EXPANDED"
    },
    "horizontalAlign": "left",
    "class": "Container",
    "gap": 10,
    "paddingBottom": 40
   }
  ],
  "left": "0%",
  "width": 300,
  "scrollBarVisible": "rollOver",
  "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "100%",
  "paddingTop": 0,
  "layout": "absolute",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "--- LEFT PANEL"
  },
  "horizontalAlign": "left",
  "class": "Container",
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "children": [
   {
    "children": [
     {
      "maxWidth": 60,
      "maxHeight": 60,
      "backgroundOpacity": 0,
      "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
      "transparencyActive": true,
      "paddingLeft": 0,
      "width": 60,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "verticalAlign": "middle",
      "minHeight": 1,
      "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
      "mode": "toggle",
      "minWidth": 1,
      "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
      "paddingRight": 0,
      "height": 60,
      "paddingTop": 0,
      "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
      "propagateClick": true,
      "data": {
       "name": "image button menu"
      },
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
    "right": "0%",
    "paddingLeft": 0,
    "width": 110,
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "verticalAlign": "middle",
    "scrollBarOpacity": 0.5,
    "top": "0%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "overflow": "visible",
    "paddingRight": 0,
    "height": 110,
    "paddingTop": 0,
    "layout": "horizontal",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": true,
    "data": {
     "name": "button menu sup"
    },
    "horizontalAlign": "center",
    "class": "Container",
    "gap": 10,
    "paddingBottom": 0
   },
   {
    "children": [
     "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
     "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
     {
      "maxWidth": 58,
      "maxHeight": 58,
      "backgroundOpacity": 0,
      "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
      "transparencyActive": true,
      "paddingLeft": 0,
      "width": 58,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "verticalAlign": "middle",
      "minHeight": 1,
      "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
      "mode": "toggle",
      "minWidth": 1,
      "paddingRight": 0,
      "height": 58,
      "paddingTop": 0,
      "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
      "propagateClick": true,
      "data": {
       "name": "IconButton MUTE"
      },
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0
     },
     "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
     {
      "maxWidth": 58,
      "maxHeight": 58,
      "backgroundOpacity": 0,
      "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
      "transparencyActive": true,
      "paddingLeft": 0,
      "width": 58,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "verticalAlign": "middle",
      "minHeight": 1,
      "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
      "mode": "toggle",
      "minWidth": 1,
      "paddingRight": 0,
      "height": 58,
      "paddingTop": 0,
      "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
      "propagateClick": true,
      "data": {
       "name": "IconButton FULLSCREEN"
      },
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "maxWidth": 58,
      "maxHeight": 58,
      "backgroundOpacity": 0,
      "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
      "transparencyActive": true,
      "paddingLeft": 0,
      "width": 58,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "verticalAlign": "middle",
      "minHeight": 1,
      "mode": "push",
      "minWidth": 1,
      "click": "this.shareFacebook(location.href)",
      "paddingRight": 0,
      "height": 58,
      "paddingTop": 0,
      "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
      "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
      "propagateClick": true,
      "data": {
       "name": "IconButton FB"
      },
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
    "right": "0%",
    "paddingLeft": 0,
    "borderSize": 0,
    "shadow": false,
    "width": "91.304%",
    "borderRadius": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarWidth": 10,
    "bottom": "0%",
    "verticalAlign": "top",
    "minWidth": 1,
    "overflow": "scroll",
    "paddingRight": 0,
    "height": "85.959%",
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "layout": "vertical",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": true,
    "data": {
     "name": "-button set"
    },
    "horizontalAlign": "center",
    "class": "Container",
    "visible": false,
    "gap": 3,
    "paddingBottom": 0
   }
  ],
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "right": "0%",
  "paddingLeft": 0,
  "width": 115.05,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "overflow": "scroll",
  "paddingRight": 0,
  "height": 641,
  "paddingTop": 0,
  "layout": "absolute",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": true,
  "data": {
   "name": "-- SETTINGS"
  },
  "horizontalAlign": "left",
  "class": "Container",
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "left": 70,
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "paddingLeft": 0,
  "width": 381,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "top": 34,
  "minHeight": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "overflow": "visible",
  "paddingRight": 0,
  "height": 140,
  "paddingTop": 0,
  "layout": "absolute",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": true,
  "data": {
   "name": "--STICKER"
  },
  "horizontalAlign": "left",
  "class": "Container",
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "children": [
     {
      "backgroundColorRatios": [
       0
      ],
      "children": [
       {
        "maxWidth": 2000,
        "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
        "left": "0%",
        "maxHeight": 1000,
        "backgroundOpacity": 0,
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
        "width": "100%",
        "borderRadius": 0,
        "top": "0%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "minWidth": 1,
        "paddingRight": 0,
        "height": "100%",
        "paddingTop": 0,
        "propagateClick": false,
        "data": {
         "name": "Image"
        },
        "horizontalAlign": "center",
        "class": "Image",
        "scaleMode": "fit_outside",
        "paddingBottom": 0
       }
      ],
      "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
      "backgroundOpacity": 1,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "43.172%",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "scrollBarOpacity": 0.5,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "minWidth": 1,
      "overflow": "scroll",
      "paddingRight": 0,
      "backgroundColor": [
       "#000000"
      ],
      "paddingTop": 0,
      "layout": "absolute",
      "height": "100%",
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "propagateClick": false,
      "data": {
       "name": "-left"
      },
      "horizontalAlign": "center",
      "class": "Container",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "backgroundColorRatios": [
       0,
       1
      ],
      "children": [
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
        "backgroundOpacity": 0.3,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.5,
        "minHeight": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "height": 50,
        "verticalAlign": "top",
        "minWidth": 1,
        "overflow": "scroll",
        "paddingRight": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 20,
        "layout": "horizontal",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "propagateClick": false,
        "data": {
         "name": "Container space"
        },
        "horizontalAlign": "right",
        "class": "Container",
        "gap": 0,
        "paddingBottom": 0
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "children": [
         {
          "backgroundOpacity": 0,
          "scrollBarVisible": "rollOver",
          "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
          "paddingLeft": 10,
          "borderSize": 0,
          "shadow": false,
          "scrollBarMargin": 2,
          "width": "100%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarOpacity": 0.5,
          "minHeight": 1,
          "paddingRight": 10,
          "height": "100%",
          "minWidth": 1,
          "paddingTop": 0,
          "scrollBarColor": "#04A3E1",
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.9vh;font-family:'Oswald';\"><B><I>PORTO CEDROS</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.9vh;font-family:'Oswald';\"><B><I>PROJECT</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.59vh;font-family:'Oswald';\"><B>A tourism pole that offers everything the luxury traveler demands in the XXI century. </B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">A modern marine protected by natural barriers receives shuttles from Punta Arenas. The International Aquarium welcomes visitors and dips them into the wonders of Costa Rican Central Pacific. The marina will accommodate nearly 200 boats of low and average draft.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Commercial areas, craft sales and other Costa Rican goods will guide the visitor in an ecological and cultural experience.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">All housing will offer spectacular views of the \u201cNicoya Peninsula\u201d. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">For the most demanding, a boutique hotel will fulfill their expectations. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">And for the ones who fell in love with this heaven, permanent residences with the highest quality standards will be available.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">A paradise, with all Costa Rica has to offer to the national and international traveler.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Porto Cedros, the Nicoyan Jewel!</SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.59vh;font-family:'Oswald';\"><B><I>FEATURES</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><I>\u2022 2 Big Commercial Areas</I></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><I>\u2022 4 International Hotels</I></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><I>\u2022 More than 2000 rooms</I></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><I>\u2022 4000 direct and 12000 indirect jobs</I></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><I>\u2022 Various residential areas with a diversified offer</I></SPAN></DIV></div>",
          "propagateClick": false,
          "data": {
           "name": "HTMLText"
          },
          "class": "HTMLText",
          "paddingBottom": 20
         },
         {
          "textDecoration": "none",
          "fontFamily": "Oswald",
          "backgroundColorRatios": [
           0
          ],
          "pressedBackgroundColor": [
           "#000000"
          ],
          "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
          "backgroundOpacity": 0.7,
          "paddingLeft": 0,
          "borderSize": 0,
          "shadow": false,
          "width": 180,
          "shadowSpread": 1,
          "borderRadius": 50,
          "fontColor": "#FFFFFF",
          "shadowBlurRadius": 6,
          "backgroundColorDirection": "vertical",
          "verticalAlign": "middle",
          "layout": "horizontal",
          "minHeight": 1,
          "pressedBackgroundOpacity": 1,
          "shadowColor": "#000000",
          "height": 50,
          "rollOverBackgroundOpacity": 1,
          "iconBeforeLabel": true,
          "mode": "push",
          "minWidth": 1,
          "borderColor": "#000000",
          "pressedBackgroundColorRatios": [
           0
          ],
          "paddingRight": 0,
          "backgroundColor": [
           "#04A3E1"
          ],
          "paddingTop": 0,
          "label": "More Info...",
          "fontSize": "2.39vh",
          "click": "this.openLink('https://www.mondriam.com/', '_blank')",
          "fontStyle": "italic",
          "propagateClick": false,
          "data": {
           "name": "Button31015"
          },
          "iconWidth": 32,
          "horizontalAlign": "center",
          "class": "Button",
          "fontWeight": "bold",
          "gap": 5,
          "iconHeight": 32,
          "cursor": "hand",
          "paddingBottom": 0
         }
        ],
        "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
        "backgroundOpacity": 0.3,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "backgroundColorDirection": "vertical",
        "scrollBarOpacity": 0.79,
        "minHeight": 300,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "top",
        "minWidth": 100,
        "overflow": "scroll",
        "paddingRight": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "layout": "vertical",
        "height": "100%",
        "scrollBarColor": "#E73B2C",
        "contentOpaque": false,
        "propagateClick": false,
        "data": {
         "name": "Container text"
        },
        "horizontalAlign": "left",
        "class": "Container",
        "gap": 10,
        "paddingBottom": 10
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
        "backgroundOpacity": 0.3,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": 370,
        "borderRadius": 0,
        "backgroundColorDirection": "vertical",
        "verticalAlign": "top",
        "scrollBarOpacity": 0.5,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "height": 30,
        "minWidth": 1,
        "overflow": "scroll",
        "paddingRight": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "propagateClick": false,
        "data": {
         "name": "Container space"
        },
        "horizontalAlign": "left",
        "class": "Container",
        "gap": 10,
        "paddingBottom": 0
       }
      ],
      "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
      "backgroundOpacity": 1,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 50,
      "borderSize": 0,
      "shadow": false,
      "width": "50%",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "scrollBarOpacity": 0.51,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "minWidth": 460,
      "overflow": "visible",
      "paddingRight": 50,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "paddingTop": 20,
      "layout": "vertical",
      "height": "100%",
      "scrollBarColor": "#0069A3",
      "contentOpaque": false,
      "propagateClick": false,
      "data": {
       "name": "-right"
      },
      "horizontalAlign": "left",
      "class": "Container",
      "gap": 0,
      "paddingBottom": 20
     }
    ],
    "left": "15%",
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "right": "15%",
    "paddingLeft": 0,
    "borderSize": 0,
    "shadowColor": "#000000",
    "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
    "shadowSpread": 1,
    "shadow": true,
    "shadowBlurRadius": 25,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "scrollBarWidth": 10,
    "shadowVerticalLength": 0,
    "bottom": "10%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "minHeight": 1,
    "borderRadius": 0,
    "minWidth": 1,
    "overflow": "scroll",
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Global"
    },
    "horizontalAlign": "left",
    "class": "Container",
    "shadowHorizontalLength": 0,
    "gap": 10,
    "shadowOpacity": 0.3
   },
   {
    "children": [
     {
      "maxWidth": 60,
      "maxHeight": 60,
      "backgroundOpacity": 0,
      "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
      "transparencyActive": false,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "25%",
      "borderRadius": 0,
      "minHeight": 50,
      "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
      "verticalAlign": "middle",
      "mode": "push",
      "minWidth": 50,
      "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
      "paddingTop": 0,
      "height": "75%",
      "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
      "propagateClick": false,
      "data": {
       "name": "X"
      },
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
    "left": "15%",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "right": "15%",
    "paddingLeft": 0,
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "bottom": "80%",
    "minWidth": 1,
    "overflow": "visible",
    "paddingRight": 20,
    "paddingTop": 20,
    "scrollBarMargin": 2,
    "layout": "vertical",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container X global"
    },
    "horizontalAlign": "right",
    "class": "Container",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
  "left": "0%",
  "backgroundOpacity": 0.6,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "bottom": "0%",
  "minWidth": 1,
  "overflow": "scroll",
  "creationPolicy": "inAdvance",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "layout": "absolute",
  "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": true,
  "data": {
   "name": "--INFO photo"
  },
  "horizontalAlign": "left",
  "class": "Container",
  "visible": false,
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "children": [
     {
      "backgroundColorRatios": [
       0,
       1
      ],
      "children": [
       {
        "maxWidth": 60,
        "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
        "maxHeight": 60,
        "backgroundOpacity": 0,
        "transparencyActive": false,
        "right": 20,
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "top": 20,
        "minHeight": 50,
        "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
        "verticalAlign": "top",
        "mode": "push",
        "minWidth": 50,
        "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
        "paddingRight": 0,
        "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
        "paddingTop": 0,
        "height": "36.14%",
        "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
        "propagateClick": false,
        "data": {
         "name": "IconButton X"
        },
        "horizontalAlign": "right",
        "class": "IconButton",
        "cursor": "hand",
        "paddingBottom": 0
       }
      ],
      "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
      "backgroundOpacity": 0.3,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "100%",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "scrollBarOpacity": 0.5,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "height": 140,
      "verticalAlign": "top",
      "minWidth": 1,
      "overflow": "scroll",
      "paddingRight": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "paddingTop": 0,
      "layout": "absolute",
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "propagateClick": false,
      "data": {
       "name": "header"
      },
      "horizontalAlign": "left",
      "class": "Container",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "paddingBottom": 70,
      "left": 0,
      "itemPaddingRight": 3,
      "backgroundOpacity": 0,
      "verticalAlign": "middle",
      "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
      "width": "100%",
      "borderSize": 0,
      "itemLabelFontColor": "#666666",
      "itemThumbnailShadow": false,
      "itemLabelFontStyle": "italic",
      "borderRadius": 5,
      "itemLabelFontSize": 16,
      "itemLabelHorizontalAlign": "center",
      "scrollBarMargin": 2,
      "itemMinWidth": 50,
      "scrollBarOpacity": 0.5,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "rollOverItemThumbnailShadowHorizontalLength": 8,
      "itemBackgroundColor": [],
      "selectedItemThumbnailShadowVerticalLength": 0,
      "itemHorizontalAlign": "center",
      "selectedItemThumbnailShadowBlurRadius": 16,
      "itemMaxHeight": 1000,
      "itemWidth": 220,
      "minWidth": 1,
      "selectedItemLabelFontColor": "#04A3E1",
      "paddingRight": 70,
      "itemMinHeight": 50,
      "scrollBarColor": "#04A3E1",
      "itemThumbnailWidth": 220,
      "height": "92%",
      "itemMaxWidth": 1000,
      "itemVerticalAlign": "top",
      "class": "ThumbnailGrid",
      "itemOpacity": 1,
      "propagateClick": false,
      "rollOverItemLabelFontColor": "#04A3E1",
      "itemPaddingLeft": 3,
      "itemThumbnailScaleMode": "fit_outside",
      "itemBackgroundOpacity": 0,
      "itemBackgroundColorRatios": [],
      "itemBorderRadius": 0,
      "scrollBarVisible": "rollOver",
      "itemLabelPosition": "bottom",
      "paddingLeft": 70,
      "selectedItemThumbnailShadowHorizontalLength": 0,
      "shadow": false,
      "itemMode": "normal",
      "itemBackgroundColorDirection": "vertical",
      "rollOverItemThumbnailShadowVerticalLength": 0,
      "itemPaddingBottom": 3,
      "bottom": -0.2,
      "itemThumbnailHeight": 125,
      "itemThumbnailOpacity": 1,
      "paddingTop": 10,
      "itemLabelFontFamily": "Oswald",
      "rollOverItemThumbnailShadowBlurRadius": 0,
      "itemPaddingTop": 3,
      "rollOverItemThumbnailShadowColor": "#04A3E1",
      "selectedItemThumbnailShadow": true,
      "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
      "itemThumbnailBorderRadius": 0,
      "horizontalAlign": "center",
      "selectedItemLabelFontWeight": "bold",
      "rollOverItemThumbnailShadow": true,
      "itemLabelGap": 7,
      "gap": 26,
      "data": {
       "name": "ThumbnailList"
      },
      "itemLabelTextDecoration": "none",
      "itemHeight": 160,
      "itemLabelFontWeight": "normal"
     }
    ],
    "left": "15%",
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
    "right": "15%",
    "paddingLeft": 0,
    "borderSize": 0,
    "shadowColor": "#000000",
    "shadow": true,
    "shadowSpread": 1,
    "shadowBlurRadius": 25,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "scrollBarWidth": 10,
    "shadowVerticalLength": 0,
    "bottom": "10%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "minHeight": 1,
    "borderRadius": 0,
    "minWidth": 1,
    "overflow": "visible",
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "layout": "absolute",
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Global"
    },
    "horizontalAlign": "center",
    "class": "Container",
    "shadowHorizontalLength": 0,
    "gap": 10,
    "shadowOpacity": 0.3
   }
  ],
  "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "left": "0%",
  "backgroundOpacity": 0.6,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "bottom": "0%",
  "minWidth": 1,
  "overflow": "scroll",
  "creationPolicy": "inAdvance",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "layout": "absolute",
  "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": true,
  "data": {
   "name": "--PANORAMA LIST"
  },
  "horizontalAlign": "left",
  "class": "Container",
  "visible": false,
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "children": [
     {
      "backgroundColorRatios": [
       0
      ],
      "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
      "backgroundOpacity": 1,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "100%",
      "borderRadius": 0,
      "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.445412814212!2d-84.89076631517214!3d9.84101422282578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1d4bf60494955%3A0x5405ab4c21909c80!2sIsla+Cedros!5e0!3m2!1sen!2scr!4v1561414119669!5m2!1sen!2scr",
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "minWidth": 1,
      "paddingRight": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingTop": 0,
      "height": "100%",
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame48191"
      },
      "class": "WebFrame",
      "insetBorder": false,
      "paddingBottom": 0
     }
    ],
    "left": "15%",
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
    "right": "15%",
    "paddingLeft": 0,
    "borderSize": 0,
    "shadowColor": "#000000",
    "shadow": true,
    "shadowSpread": 1,
    "shadowBlurRadius": 25,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "scrollBarWidth": 10,
    "shadowVerticalLength": 0,
    "bottom": "10%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "minHeight": 1,
    "borderRadius": 0,
    "minWidth": 1,
    "overflow": "scroll",
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Global"
    },
    "horizontalAlign": "left",
    "class": "Container",
    "shadowHorizontalLength": 0,
    "gap": 10,
    "shadowOpacity": 0.3
   },
   {
    "children": [
     {
      "maxWidth": 60,
      "maxHeight": 60,
      "backgroundOpacity": 0,
      "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
      "transparencyActive": false,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "25%",
      "borderRadius": 0,
      "minHeight": 50,
      "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
      "verticalAlign": "middle",
      "mode": "push",
      "minWidth": 50,
      "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
      "paddingTop": 0,
      "height": "75%",
      "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
      "propagateClick": false,
      "data": {
       "name": "X"
      },
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "left": "15%",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
    "right": "15%",
    "paddingLeft": 0,
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "bottom": "80%",
    "minWidth": 1,
    "overflow": "visible",
    "paddingRight": 20,
    "paddingTop": 20,
    "scrollBarMargin": 2,
    "layout": "vertical",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container X global"
    },
    "horizontalAlign": "right",
    "class": "Container",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "left": "0%",
  "backgroundOpacity": 0.6,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "bottom": "0%",
  "minWidth": 1,
  "overflow": "scroll",
  "creationPolicy": "inAdvance",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "layout": "absolute",
  "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": true,
  "data": {
   "name": "--LOCATION"
  },
  "horizontalAlign": "left",
  "class": "Container",
  "visible": false,
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "children": [
   {
    "backgroundColorRatios": [
     0
    ],
    "children": [
     "this.MapViewer",
     {
      "children": [
       {
        "maxWidth": 60,
        "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
        "maxHeight": 60,
        "backgroundOpacity": 0,
        "transparencyActive": false,
        "right": 12.05,
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": "7.276%",
        "borderRadius": 0,
        "top": "15.24%",
        "minHeight": 50,
        "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
        "verticalAlign": "top",
        "mode": "push",
        "minWidth": 50,
        "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
        "paddingRight": 0,
        "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
        "paddingTop": 0,
        "height": "63.291%",
        "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
        "propagateClick": false,
        "data": {
         "name": "IconButton X"
        },
        "horizontalAlign": "right",
        "class": "IconButton",
        "cursor": "hand",
        "paddingBottom": 0
       }
      ],
      "left": 0,
      "backgroundOpacity": 0,
      "scrollBarVisible": "rollOver",
      "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "100%",
      "borderRadius": 0,
      "scrollBarOpacity": 0.5,
      "top": 0,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "minWidth": 1,
      "overflow": "scroll",
      "paddingRight": 0,
      "height": 84,
      "paddingTop": 0,
      "layout": "absolute",
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "propagateClick": false,
      "data": {
       "name": "header"
      },
      "horizontalAlign": "left",
      "class": "Container",
      "gap": 10,
      "paddingBottom": 0
     }
    ],
    "left": "15%",
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
    "right": "15%",
    "paddingLeft": 0,
    "borderSize": 0,
    "shadowColor": "#000000",
    "shadow": true,
    "shadowSpread": 1,
    "shadowBlurRadius": 25,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "scrollBarWidth": 10,
    "shadowVerticalLength": 0,
    "bottom": "10%",
    "backgroundColor": [
     "#000000"
    ],
    "minHeight": 1,
    "borderRadius": 0,
    "minWidth": 1,
    "overflow": "visible",
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "layout": "absolute",
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Global"
    },
    "horizontalAlign": "center",
    "class": "Container",
    "shadowHorizontalLength": 0,
    "gap": 10,
    "shadowOpacity": 0.3
   }
  ],
  "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "left": "0%",
  "backgroundOpacity": 0.6,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "bottom": "0%",
  "minWidth": 1,
  "overflow": "scroll",
  "creationPolicy": "inAdvance",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "layout": "absolute",
  "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": true,
  "data": {
   "name": "--FLOORPLAN"
  },
  "horizontalAlign": "left",
  "class": "Container",
  "visible": false,
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "children": [
     {
      "backgroundColorRatios": [
       0
      ],
      "children": [
       {
        "paddingBottom": 0,
        "toolTipFontSize": 12,
        "toolTipBackgroundColor": "#F6F6F6",
        "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
        "left": "0%",
        "playbackBarHeadShadow": true,
        "playbackBarProgressBackgroundColorDirection": "vertical",
        "toolTipBorderRadius": 3,
        "toolTipTextShadowBlurRadius": 3,
        "playbackBarProgressBackgroundColor": [
         "#3399FF"
        ],
        "borderSize": 0,
        "progressBackgroundOpacity": 1,
        "toolTipShadowOpacity": 1,
        "playbackBarHeadBorderColor": "#000000",
        "toolTipTextShadowColor": "#000000",
        "playbackBarOpacity": 1,
        "width": "100%",
        "toolTipShadowBlurRadius": 3,
        "borderRadius": 0,
        "playbackBarHeadShadowVerticalLength": 0,
        "toolTipOpacity": 1,
        "playbackBarBackgroundColor": [
         "#FFFFFF"
        ],
        "minHeight": 1,
        "progressBarOpacity": 1,
        "playbackBarHeadShadowOpacity": 0.7,
        "playbackBarBorderColor": "#FFFFFF",
        "progressBarBackgroundColor": [
         "#3399FF"
        ],
        "playbackBarProgressOpacity": 1,
        "toolTipFontStyle": "normal",
        "toolTipShadowColor": "#333333",
        "paddingRight": 0,
        "progressLeft": 0,
        "minWidth": 1,
        "playbackBarHeadBorderSize": 0,
        "playbackBarBorderSize": 0,
        "progressBackgroundColor": [
         "#FFFFFF"
        ],
        "playbackBarBackgroundOpacity": 1,
        "progressBorderSize": 0,
        "toolTipFontFamily": "Arial",
        "playbackBarHeadWidth": 6,
        "playbackBarHeight": 10,
        "height": "100%",
        "toolTipTextShadowOpacity": 0,
        "transitionDuration": 500,
        "propagateClick": false,
        "playbackBarBackgroundColorDirection": "vertical",
        "playbackBarLeft": 0,
        "progressBackgroundColorRatios": [
         0.01
        ],
        "progressBorderRadius": 0,
        "toolTipPaddingBottom": 4,
        "class": "ViewerArea",
        "playbackBarRight": 0,
        "playbackBarHeadHeight": 15,
        "playbackBarProgressBackgroundColorRatios": [
         0
        ],
        "progressBarBorderSize": 0,
        "transitionMode": "blending",
        "displayTooltipInTouchScreens": true,
        "toolTipFontColor": "#606060",
        "toolTipPaddingLeft": 6,
        "paddingLeft": 0,
        "playbackBarProgressBorderRadius": 0,
        "shadow": false,
        "playbackBarProgressBorderSize": 0,
        "toolTipPaddingRight": 6,
        "toolTipDisplayTime": 600,
        "progressBarBorderColor": "#0066FF",
        "top": "0%",
        "playbackBarHeadShadowColor": "#000000",
        "progressBarBorderRadius": 0,
        "progressBarBackgroundColorRatios": [
         0
        ],
        "toolTipFontWeight": "normal",
        "playbackBarHeadBackgroundColorRatios": [
         0,
         1
        ],
        "playbackBarHeadShadowBlurRadius": 3,
        "playbackBarHeadOpacity": 1,
        "toolTipPaddingTop": 4,
        "paddingTop": 0,
        "toolTipShadowHorizontalLength": 0,
        "playbackBarHeadBackgroundColor": [
         "#111111",
         "#666666"
        ],
        "progressRight": 0,
        "playbackBarHeadBorderRadius": 0,
        "toolTipBorderSize": 1,
        "playbackBarBorderRadius": 0,
        "toolTipShadowVerticalLength": 0,
        "playbackBarHeadShadowHorizontalLength": 0,
        "toolTipBorderColor": "#767676",
        "progressBackgroundColorDirection": "vertical",
        "toolTipShadowSpread": 0,
        "playbackBarProgressBorderColor": "#000000",
        "progressBarBackgroundColorDirection": "vertical",
        "progressBorderColor": "#FFFFFF",
        "progressOpacity": 1,
        "playbackBarBottom": 0,
        "data": {
         "name": "Viewer photoalbum 1"
        },
        "progressBottom": 2,
        "progressHeight": 10,
        "playbackBarHeadBackgroundColorDirection": "vertical"
       },
       {
        "maxWidth": 60,
        "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
        "maxHeight": 60,
        "backgroundOpacity": 0,
        "transparencyActive": false,
        "right": 20,
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": "10%",
        "borderRadius": 0,
        "top": 20,
        "minHeight": 50,
        "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
        "verticalAlign": "top",
        "mode": "push",
        "minWidth": 50,
        "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
        "paddingRight": 0,
        "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
        "paddingTop": 0,
        "height": "10%",
        "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
        "propagateClick": true,
        "data": {
         "name": "IconButton X"
        },
        "horizontalAlign": "right",
        "class": "IconButton",
        "cursor": "hand",
        "paddingBottom": 0
       },
       {
        "backgroundColorRatios": [
         0
        ],
        "id": "WebFrame_86240609_9524_B31E_41E2_7DE25AACD92F",
        "left": "0%",
        "backgroundOpacity": 1,
        "paddingLeft": 0,
        "borderSize": 0,
        "shadow": false,
        "width": "100%",
        "borderRadius": 0,
        "url": "//www.youtube.com/embed/q2mU0fJ3F_U?v=q2mU0fJ3F_U",
        "backgroundColorDirection": "vertical",
        "top": "0%",
        "minHeight": 1,
        "minWidth": 1,
        "paddingRight": 0,
        "backgroundColor": [
         "#FFFFFF"
        ],
        "paddingTop": 0,
        "height": "100%",
        "scrollEnabled": true,
        "propagateClick": false,
        "data": {
         "name": "WebFrame17420"
        },
        "class": "WebFrame",
        "insetBorder": false,
        "paddingBottom": 0
       }
      ],
      "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
      "backgroundOpacity": 1,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "100%",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "scrollBarOpacity": 0.5,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "minWidth": 1,
      "overflow": "visible",
      "paddingRight": 0,
      "backgroundColor": [
       "#000000"
      ],
      "paddingTop": 0,
      "layout": "absolute",
      "height": "100%",
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "propagateClick": false,
      "data": {
       "name": "Container photo"
      },
      "horizontalAlign": "left",
      "class": "Container",
      "gap": 10,
      "paddingBottom": 0
     }
    ],
    "left": "15%",
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
    "right": "15%",
    "paddingLeft": 0,
    "borderSize": 0,
    "shadowColor": "#000000",
    "shadow": true,
    "shadowSpread": 1,
    "shadowBlurRadius": 25,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "scrollBarWidth": 10,
    "shadowVerticalLength": 0,
    "bottom": "10%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "minHeight": 1,
    "borderRadius": 0,
    "minWidth": 1,
    "overflow": "visible",
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "layout": "vertical",
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Global"
    },
    "horizontalAlign": "center",
    "class": "Container",
    "shadowHorizontalLength": 0,
    "gap": 10,
    "shadowOpacity": 0.3
   }
  ],
  "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "left": "0%",
  "backgroundOpacity": 0.6,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "bottom": "0%",
  "minWidth": 1,
  "overflow": "scroll",
  "creationPolicy": "inAdvance",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "layout": "absolute",
  "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": true,
  "data": {
   "name": "--PHOTOALBUM"
  },
  "horizontalAlign": "left",
  "class": "Container",
  "visible": false,
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "id": "veilPopupPanorama",
  "left": 0,
  "backgroundOpacity": 0.55,
  "right": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "minHeight": 0,
  "bottom": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "minWidth": 0,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "propagateClick": false,
  "data": {
   "name": "UIComponent4962"
  },
  "class": "UIComponent",
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [],
  "id": "zoomImagePopupPanorama",
  "left": 0,
  "backgroundOpacity": 1,
  "right": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "minHeight": 0,
  "bottom": 0,
  "minWidth": 0,
  "paddingRight": 0,
  "backgroundColor": [],
  "paddingTop": 0,
  "propagateClick": false,
  "data": {
   "name": "ZoomImage4963"
  },
  "class": "ZoomImage",
  "visible": false,
  "scaleMode": "custom",
  "paddingBottom": 0
 },
 {
  "textDecoration": "none",
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "closeButtonPopupPanorama",
  "backgroundOpacity": 0.3,
  "pressedIconColor": "#888888",
  "right": 10,
  "paddingLeft": 5,
  "borderSize": 0,
  "shadow": false,
  "fontColor": "#FFFFFF",
  "shadowSpread": 1,
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "layout": "horizontal",
  "top": 10,
  "minHeight": 0,
  "shadowColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "rollOverIconColor": "#666666",
  "iconBeforeLabel": true,
  "mode": "push",
  "minWidth": 0,
  "borderColor": "#000000",
  "paddingRight": 5,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingTop": 5,
  "label": "",
  "iconColor": "#000000",
  "fontSize": "1.29vh",
  "fontStyle": "normal",
  "gap": 5,
  "iconLineWidth": 5,
  "propagateClick": false,
  "data": {
   "name": "CloseButton4964"
  },
  "iconWidth": 20,
  "horizontalAlign": "center",
  "class": "CloseButton",
  "visible": false,
  "fontWeight": "normal",
  "iconHeight": 20,
  "cursor": "hand",
  "paddingBottom": 5
 }
], 
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_87DDEF26_88EA_9040_41D9_9EEB164A31CE.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "borderRadius": 0,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "overflow": "visible",
 "paddingRight": 0,
 "paddingTop": 0,
 "desktopMipmappingEnabled": false,
 "layout": "absolute",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "height": "100%",
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "existsKey": function(key){  return key in window; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "unregisterKey": function(key){  delete window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "registerKey": function(key, value){  window[key] = value; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "propagateClick": true,
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "gap": 10,
 "paddingBottom": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();

(function(){
    var script = { "definitions": [
 {
  "class": "PanoramaCamera",
  "id": "camera_B680F7DD_B8B3_4685_41D6_8CF8A299C31D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 74.27,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_B54DF787_B8B3_4685_41DE_32D161105012",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -137.33,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_B6A637AC_B8B3_468B_41D4_7E8383F386C0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -150.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_B6E17802_B8B3_497F_41D5_E593EF4381BC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 124.56,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_84A25397_94EC_7131_41E2_3DC776E3E17A_0_0.jpg",
    "width": 1920,
    "height": 1080
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_84A25397_94EC_7131_41E2_3DC776E3E17A_0_1.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_84A25397_94EC_7131_41E2_3DC776E3E17A_0_2.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_86C0BAA4_952C_B317_41D5_ED7EBC4E8F95"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_B6FB57F6_B8B3_4687_41E6_A5598530C547",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -139.14,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "label": "Events Plaza",
  "id": "panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "label": "Marina",
     "id": "panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "label": "South Bay",
        "id": "panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
          "backwardYaw": 29.22,
          "yaw": -52.42,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
          "backwardYaw": 27.83,
          "yaw": 1.28,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "label": "Mountain View",
           "id": "panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
             "backwardYaw": 42.67,
             "yaw": -38.75,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "label": "Long Beach",
              "id": "panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "label": "Little Bay",
                 "id": "panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "label": "North Bay",
                    "id": "panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
                      "backwardYaw": -32.6,
                      "yaw": 118.15,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "label": "Aquarium",
                       "id": "panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
                         "backwardYaw": 95.11,
                         "yaw": -105.73,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
                         "backwardYaw": -3.72,
                         "yaw": 124.74,
                         "distance": 1
                        }
                       ],
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "hfov": 360,
                       "hfovMax": 130,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_hq.jpeg",
                            "width": 6434,
                            "height": 3217,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ]
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_lq.jpeg",
                            "width": 2048,
                            "height": 1024,
                            "tags": "preload"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD.jpeg",
                            "width": 4002,
                            "height": 2001
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_9A5F8A98_94C9_21D4_41E2_20B574E1A54C, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#FFFFFF','pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_9847583E_94DC_7F72_41C5_2EB4E1027395, null, null, null, null, false)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 1.68,
                             "hfov": 8.79,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_0_HS_4_0_0_map.gif",
                                "width": 21,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": -1.68
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.79,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_0_HS_4_0.png",
                                "width": 157,
                                "height": 117
                               }
                              ]
                             },
                             "pitch": -1.68,
                             "yaw": 1.68
                            }
                           ],
                           "id": "overlay_B7B8AE83_B8A2_C377_41D9_365839E92BE3",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A, this.camera_A8C426F1_B8B3_469D_41D7_6ED2536CD3ED); this.mainPlayList.set('selectedIndex', 0)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 124.74,
                             "hfov": 6.58,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_0_HS_5_0_0_map.gif",
                                "width": 16,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": 3.08
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 6.58,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_0_HS_5_0.png",
                                "width": 117,
                                "height": 117
                               }
                              ]
                             },
                             "pitch": 3.08,
                             "yaw": 124.74
                            }
                           ],
                           "id": "overlay_B7B8CE83_B8A2_C377_41AD_576401C06BB0",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368, this.camera_A8D236E4_B8B3_46BB_41E0_A17562F3DD33); this.mainPlayList.set('selectedIndex', 2)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -105.73,
                             "hfov": 6.57,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_0_HS_6_0_0_map.gif",
                                "width": 16,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": -5.06
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 6.57,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_0_HS_6_0.png",
                                "width": 117,
                                "height": 117
                               }
                              ]
                             },
                             "pitch": -5.06,
                             "yaw": -105.73
                            }
                           ],
                           "id": "overlay_B7B8FE83_B8A2_C377_41D9_43D4D856B302",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "showEasing": "cubic_in",
                           "showDuration": 500,
                           "popupMaxWidth": "95%",
                           "yaw": 1.68,
                           "rotationZ": 0,
                           "hideDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "id": "popup_9A5F8A98_94C9_21D4_41E2_20B574E1A54C",
                           "hfov": 8.79,
                           "rotationX": 0,
                           "rotationY": 0,
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "class": "ImageResourceLevel",
                              "url": "media/popup_9A5F8A98_94C9_21D4_41E2_20B574E1A54C_0_2.jpg",
                              "width": 1024,
                              "height": 594
                             }
                            ]
                           },
                           "pitch": -1.68,
                           "popupDistance": 100,
                           "hideEasing": "cubic_out",
                           "popupMaxHeight": "95%"
                          }
                         ],
                         "thumbnailUrl": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_t.jpg"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_t.jpg"
                      },
                      "backwardYaw": -105.73,
                      "yaw": 95.11,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
                      "backwardYaw": 175,
                      "yaw": -30.78,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
                      "backwardYaw": 40.86,
                      "yaw": -73.29,
                      "distance": 1
                     }
                    ],
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "hfov": 360,
                    "hfovMax": 130,
                    "hfovMin": 60,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_hq.jpeg",
                         "width": 6434,
                         "height": 3217,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ]
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_lq.jpeg",
                         "width": 2048,
                         "height": 1024,
                         "tags": "preload"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368.jpeg",
                         "width": 4002,
                         "height": 2001
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupPanoramaOverlay(this.popup_9A426626_94E4_7312_41DB_0F6235998161, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#FFFFFF','pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_86B91A9F_952C_B331_41D5_14F31A9DC9C5, null, null, null, null, false)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 25.47,
                          "hfov": 8.77,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_8_0_0_map.gif",
                             "width": 21,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": -3.32
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.77,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_8_0.png",
                             "width": 157,
                             "height": 117
                            }
                           ]
                          },
                          "pitch": -3.32,
                          "yaw": 25.47
                         }
                        ],
                        "id": "overlay_B6C31A07_B8A3_437F_419A_9C49F5CB0636",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_B6F507E9_B8B3_468D_41C1_EB5381217519); this.mainPlayList.set('selectedIndex', 7)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -30.78,
                          "hfov": 6.5,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_9_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 9.43
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.5,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_9_0.png",
                             "width": 117,
                             "height": 117
                            }
                           ]
                          },
                          "pitch": 9.43,
                          "yaw": -30.78
                         }
                        ],
                        "id": "overlay_B6C0DA08_B8A3_4371_41E1_E87BCFFAD2AC",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA, this.camera_B6FB57F6_B8B3_4687_41E6_A5598530C547); this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -73.29,
                          "hfov": 6.59,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_10_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": -1.1
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.59,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_10_0.png",
                             "width": 117,
                             "height": 117
                            }
                           ]
                          },
                          "pitch": -1.1,
                          "yaw": -73.29
                         }
                        ],
                        "id": "overlay_B6C0FA08_B8A3_4371_41CC_1C8DEF596AB1",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A, this.camera_B69AC7D1_B8B3_469D_41E0_0859C04C3933); this.mainPlayList.set('selectedIndex', 0)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 118.15,
                          "hfov": 6.59,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_11_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": -1.83
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.59,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_11_0.png",
                             "width": 117,
                             "height": 117
                            }
                           ]
                          },
                          "pitch": -1.83,
                          "yaw": 118.15
                         }
                        ],
                        "id": "overlay_B6C08A08_B8A3_4371_41E0_67D8D8B8D894",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD, this.camera_B680F7DD_B8B3_4685_41D6_8CF8A299C31D); this.mainPlayList.set('selectedIndex', 1)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 95.11,
                          "hfov": 6.49,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_12_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": -10.29
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.49,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_0_HS_12_0.png",
                             "width": 117,
                             "height": 117
                            }
                           ]
                          },
                          "pitch": -10.29,
                          "yaw": 95.11
                         }
                        ],
                        "id": "overlay_B6C0BA08_B8A3_4371_41DB_65B8C8E99F80",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "showEasing": "cubic_in",
                        "showDuration": 500,
                        "popupMaxWidth": "95%",
                        "yaw": 25.47,
                        "rotationZ": 0,
                        "hideDuration": 500,
                        "class": "PopupPanoramaOverlay",
                        "id": "popup_9A426626_94E4_7312_41DB_0F6235998161",
                        "hfov": 8.77,
                        "rotationX": 0,
                        "rotationY": 0,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "url": "media/popup_9A426626_94E4_7312_41DB_0F6235998161_0_1.jpg",
                           "width": 1024,
                           "height": 576
                          }
                         ]
                        },
                        "pitch": -3.32,
                        "popupDistance": 100,
                        "hideEasing": "cubic_out",
                        "popupMaxHeight": "95%"
                       }
                      ],
                      "thumbnailUrl": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_t.jpg"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_t.jpg"
                   },
                   "backwardYaw": -73.29,
                   "yaw": 40.86,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
                   "backwardYaw": 63.25,
                   "yaw": -55.44,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
                   "backwardYaw": -172.28,
                   "yaw": -10.99,
                   "distance": 1
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "hfov": 360,
                 "hfovMax": 130,
                 "hfovMin": 60,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_hq.jpeg",
                      "width": 6434,
                      "height": 3217,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_lq.jpeg",
                      "width": 2048,
                      "height": 1024,
                      "tags": "preload"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA.jpeg",
                      "width": 4002,
                      "height": 2001
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_9B1340F2_94EC_B0F3_41B2_C60EF3D9A93C, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#FFFFFF','pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_86B81A9F_952C_B331_41D8_1720B1DE5760, null, null, null, null, false)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 30.56,
                       "hfov": 7.97,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_6_0_0_map.gif",
                          "width": 21,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -24.99
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.97,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_6_0.png",
                          "width": 157,
                          "height": 117
                         }
                        ]
                       },
                       "pitch": -24.99,
                       "yaw": 30.56
                      }
                     ],
                     "id": "overlay_B5CA32DD_B8A2_C093_41CE_8B8962ED84E6",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD, this.camera_B6C82834_B8B3_499B_41D3_D6F853251BC0); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -55.44,
                       "hfov": 6.51,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_7_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -8.8
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.51,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_7_0.png",
                          "width": 117,
                          "height": 117
                         }
                        ]
                       },
                       "pitch": -8.8,
                       "yaw": -55.44
                      }
                     ],
                     "id": "overlay_B5CA52DD_B8A2_C093_41C1_32FB4D1CA5C0",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_B630A840_B8B3_49FB_41D4_B27AFDC6FF88); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -10.99,
                       "hfov": 6.58,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_8_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": 3.18
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.58,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_8_0.png",
                          "width": 117,
                          "height": 117
                         }
                        ]
                       },
                       "pitch": 3.18,
                       "yaw": -10.99
                      }
                     ],
                     "id": "overlay_B5CA62DD_B8A2_C093_419E_5DCE32C6A3DE",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368, this.camera_B6C3C828_B8B3_498B_41D9_B7784D35E784); this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 40.86,
                       "hfov": 6.54,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_9_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -7.49
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.54,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_0_HS_9_0.png",
                          "width": 117,
                          "height": 117
                         }
                        ]
                       },
                       "pitch": -7.49,
                       "yaw": 40.86
                      }
                     ],
                     "id": "overlay_B5CA92DD_B8A2_C093_41DB_2A427CFC3F65",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "showEasing": "cubic_in",
                     "showDuration": 500,
                     "popupMaxWidth": "95%",
                     "yaw": 30.56,
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "id": "popup_9B1340F2_94EC_B0F3_41B2_C60EF3D9A93C",
                     "hfov": 7.97,
                     "rotationX": 0,
                     "rotationY": 0,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "url": "media/popup_9B1340F2_94EC_B0F3_41B2_C60EF3D9A93C_0_1.jpg",
                        "width": 1024,
                        "height": 576
                       }
                      ]
                     },
                     "pitch": -24.99,
                     "popupDistance": 100,
                     "hideEasing": "cubic_out",
                     "popupMaxHeight": "95%"
                    }
                   ],
                   "thumbnailUrl": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_t.jpg"
                },
                "backwardYaw": -55.44,
                "yaw": 63.25,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
                "backwardYaw": -117.12,
                "yaw": -3.1,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
                "backwardYaw": 97.72,
                "yaw": -45.55,
                "distance": 1
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "hfov": 360,
              "hfovMax": 130,
              "hfovMin": 60,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_hq.jpeg",
                   "width": 6434,
                   "height": 3217,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_lq.jpeg",
                   "width": 2048,
                   "height": 1024,
                   "tags": "preload"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD.jpeg",
                   "width": 4002,
                   "height": 2001
                  }
                 ]
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupPanoramaOverlay(this.popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#FFFFFF','pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_86C7CA9F_952C_B331_41D3_38C5166BA311, null, null, null, null, false)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -5.05,
                    "hfov": 7.59,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_6_0_0_map.gif",
                       "width": 21,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -30.34
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.59,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_6_0.png",
                       "width": 157,
                       "height": 117
                      }
                     ]
                    },
                    "pitch": -30.34,
                    "yaw": -5.05
                   }
                  ],
                  "id": "overlay_B683CE32_B8A1_4391_41DB_9AD9A5E7634E",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupPanoramaOverlay(this.popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#FFFFFF','pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_00E2A34F_0DE6_179A_4190_3A74D6498631, null, null, null, null, false)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -32.05,
                    "hfov": 8.74,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_7_0_0_map.gif",
                       "width": 21,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -5.75
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.74,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_7_0.png",
                       "width": 157,
                       "height": 117
                      }
                     ]
                    },
                    "pitch": -5.75,
                    "yaw": -32.05
                   }
                  ],
                  "id": "overlay_B6839E33_B8A1_4397_4199_EF3385370003",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA, this.camera_B6E17802_B8B3_497F_41D5_E593EF4381BC); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 63.25,
                    "hfov": 6.51,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_8_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -8.87
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.51,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_8_0.png",
                       "width": 117,
                       "height": 117
                      }
                     ]
                    },
                    "pitch": -8.87,
                    "yaw": 63.25
                   }
                  ],
                  "id": "overlay_B6837E33_B8A1_4397_41E1_D983E27C3612",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_B6D7880E_B8B3_4984_41E4_EF86FDFBBF43); this.mainPlayList.set('selectedIndex', 7)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -3.1,
                    "hfov": 6.59,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_9_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": 1.78
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.59,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_9_0.png",
                       "width": 117,
                       "height": 117
                      }
                     ]
                    },
                    "pitch": 1.78,
                    "yaw": -3.1
                   }
                  ],
                  "id": "overlay_B6836E33_B8A1_4397_41E5_DAA6A17B9020",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE, this.camera_B6DDB81B_B8B3_498D_4191_AC9AC39A93A5); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -45.55,
                    "hfov": 6.59,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_10_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -1.1
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.59,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_0_HS_10_0.png",
                       "width": 117,
                       "height": 117
                      }
                     ]
                    },
                    "pitch": -1.1,
                    "yaw": -45.55
                   }
                  ],
                  "id": "overlay_B6834E33_B8A1_4397_41AD_DCA0D4307539",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "showEasing": "cubic_in",
                  "showDuration": 500,
                  "popupMaxWidth": "95%",
                  "yaw": -5.05,
                  "rotationZ": 0,
                  "hideDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "id": "popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D",
                  "hfov": 7.59,
                  "rotationX": 0,
                  "rotationY": 0,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "url": "media/popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D_0_1.jpg",
                     "width": 1024,
                     "height": 576
                    }
                   ]
                  },
                  "pitch": -30.34,
                  "popupDistance": 100,
                  "hideEasing": "cubic_out",
                  "popupMaxHeight": "95%"
                 },
                 {
                  "showEasing": "cubic_in",
                  "showDuration": 500,
                  "popupMaxWidth": "95%",
                  "yaw": -32.05,
                  "rotationZ": 0,
                  "hideDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "id": "popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7",
                  "hfov": 8.74,
                  "rotationX": 0,
                  "rotationY": 0,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "url": "media/popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7_0_1.jpg",
                     "width": 1024,
                     "height": 576
                    }
                   ]
                  },
                  "pitch": -5.75,
                  "popupDistance": 100,
                  "hideEasing": "cubic_out",
                  "popupMaxHeight": "95%"
                 }
                ],
                "thumbnailUrl": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_t.jpg"
             },
             "backwardYaw": -45.55,
             "yaw": 97.72,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
             "backwardYaw": -48.05,
             "yaw": 21.25,
             "distance": 1
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "hfov": 360,
           "hfovMax": 130,
           "hfovMin": 60,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_hq.jpeg",
                "width": 6434,
                "height": 3217,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_lq.jpeg",
                "width": 2048,
                "height": 1024,
                "tags": "preload"
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE.jpeg",
                "width": 4002,
                "height": 2001
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#FFFFFF','pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_86C5FA9F_952C_B331_41D0_AE789F4CE5A5, null, null, null, null, false)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -67.26,
                 "hfov": 6.55,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_6_0_0_map.gif",
                    "width": 21,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -41.84
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.55,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_6_0.png",
                    "width": 157,
                    "height": 117
                   }
                  ]
                 },
                 "pitch": -41.84,
                 "yaw": -67.26
                }
               ],
               "id": "overlay_B601ED08_B8A1_4171_41C5_E0DDA8257DEC",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#FFFFFF','pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_00E1334F_0DE6_179A_4187_C542509C3B77, null, null, null, null, false)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 34.98,
                 "hfov": 8.46,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_7_0_0_map.gif",
                    "width": 21,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -15.7
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.46,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_7_0.png",
                    "width": 157,
                    "height": 117
                   }
                  ]
                 },
                 "pitch": -15.7,
                 "yaw": 34.98
                }
               ],
               "id": "overlay_B601BD08_B8A1_4171_41E0_592B92D1B041",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD, this.camera_B6B62793_B8B3_469D_41E6_4299E61F3B4C); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 97.72,
                 "hfov": 6.46,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_8_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -11.4
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.46,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_8_0.png",
                    "width": 117,
                    "height": 117
                   }
                  ]
                 },
                 "pitch": -11.4,
                 "yaw": 97.72
                }
               ],
               "id": "overlay_B6019D09_B8A1_4173_41BB_8F37E182537D",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_B6B0C79F_B8B3_4685_41B1_799847D906E7); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 21.25,
                 "hfov": 6.56,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_9_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -5.78
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.56,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_9_0.png",
                    "width": 117,
                    "height": 117
                   }
                  ]
                 },
                 "pitch": -5.78,
                 "yaw": 21.25
                }
               ],
               "id": "overlay_B6017D09_B8A1_4173_41E1_9E8DBA2686CB",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248, this.camera_B54DF787_B8B3_4685_41DE_32D161105012); this.mainPlayList.set('selectedIndex', 6)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -38.75,
                 "hfov": 6.36,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_10_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -15.1
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.36,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_0_HS_10_0.png",
                    "width": 117,
                    "height": 117
                   }
                  ]
                 },
                 "pitch": -15.1,
                 "yaw": -38.75
                }
               ],
               "id": "overlay_B6014D09_B8A1_4173_41C3_A5E19DEFE476",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "showEasing": "cubic_in",
               "showDuration": 500,
               "popupMaxWidth": "95%",
               "yaw": -67.26,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582",
               "hfov": 6.55,
               "rotationX": 0,
               "rotationY": 0,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582_0_1.jpg",
                  "width": 1024,
                  "height": 576
                 }
                ]
               },
               "pitch": -41.84,
               "popupDistance": 100,
               "hideEasing": "cubic_out",
               "popupMaxHeight": "95%"
              },
              {
               "showEasing": "cubic_in",
               "showDuration": 500,
               "popupMaxWidth": "95%",
               "yaw": 34.98,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640",
               "hfov": 8.46,
               "rotationX": 0,
               "rotationY": 0,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640_0_1.jpg",
                  "width": 1024,
                  "height": 576
                 }
                ]
               },
               "pitch": -15.7,
               "popupDistance": 100,
               "hideEasing": "cubic_out",
               "popupMaxHeight": "95%"
              }
             ],
             "thumbnailUrl": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_t.jpg"
          },
          "backwardYaw": -38.75,
          "yaw": 42.67,
          "distance": 1
         }
        ],
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "hfov": 360,
        "hfovMax": 130,
        "hfovMin": 60,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_hq.jpeg",
             "width": 6434,
             "height": 3217,
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_lq.jpeg",
             "width": 2048,
             "height": 1024,
             "tags": "preload"
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248.jpeg",
             "width": 4002,
             "height": 2001
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#FFFFFF','pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_00E1834F_0DE6_179A_418D_7C59A643B09E, null, null, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 74.52,
              "hfov": 8.75,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_6_0_0_map.gif",
                 "width": 21,
                 "height": 16
                }
               ]
              },
              "pitch": 5.07
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.75,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_6_0.png",
                 "width": 157,
                 "height": 117
                }
               ]
              },
              "pitch": 5.07,
              "yaw": 74.52
             }
            ],
            "id": "overlay_B628C358_B8A3_4190_41B3_9D227009FCE2",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_846D32DD_94EF_9331_41C4_9360FA56FF36, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#FFFFFF','pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_86C2EAA4_952C_B317_41E0_D1F4952F4164, null, null, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 57.87,
              "hfov": 8.69,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_7_0_0_map.gif",
                 "width": 21,
                 "height": 16
                }
               ]
              },
              "pitch": 8.67
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.69,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_7_0.png",
                 "width": 157,
                 "height": 117
                }
               ]
              },
              "pitch": 8.67,
              "yaw": 57.87
             }
            ],
            "id": "overlay_B6288358_B8A3_4190_41D8_784D52D25348",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#FFFFFF','pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_00E0C34F_0DE6_179A_41A3_4FE116A624F6, null, null, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 14.71,
              "hfov": 8.01,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_8_0_0_map.gif",
                 "width": 21,
                 "height": 16
                }
               ]
              },
              "pitch": -24.26
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.01,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_8_0.png",
                 "width": 157,
                 "height": 117
                }
               ]
              },
              "pitch": -24.26,
              "yaw": 14.71
             }
            ],
            "id": "overlay_B628A358_B8A3_4190_41D5_0554F9565709",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE, this.camera_B69487C5_B8B3_4685_41C2_8BE53EB42723); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 42.67,
              "hfov": 6.57,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_9_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": 4.83
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.57,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_9_0.png",
                 "width": 117,
                 "height": 117
                }
               ]
              },
              "pitch": 4.83,
              "yaw": 42.67
             }
            ],
            "id": "overlay_B6295358_B8A3_4190_41DC_E5C1151C04FB",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_B6AEC7B8_B8B3_468B_41E5_98D2D5FAAB92); this.mainPlayList.set('selectedIndex', 7)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 1.28,
              "hfov": 6.56,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_10_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": 5.96
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.56,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_10_0.png",
                 "width": 117,
                 "height": 117
                }
               ]
              },
              "pitch": 5.96,
              "yaw": 1.28
             }
            ],
            "id": "overlay_B6297358_B8A3_4190_41E6_5A331B9A1155",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A, this.camera_B6A637AC_B8B3_468B_41D4_7E8383F386C0); this.mainPlayList.set('selectedIndex', 0)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -52.42,
              "hfov": 6.59,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_11_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -0.53
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.59,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_0_HS_11_0.png",
                 "width": 117,
                 "height": 117
                }
               ]
              },
              "pitch": -0.53,
              "yaw": -52.42
             }
            ],
            "id": "overlay_B6292358_B8A3_4190_41E1_87904AC42B88",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "showEasing": "cubic_in",
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "yaw": 74.52,
            "rotationZ": 0,
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "id": "popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282",
            "hfov": 8.75,
            "rotationX": 0,
            "rotationY": 0,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "url": "media/popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282_0_2.jpg",
               "width": 1024,
               "height": 576
              }
             ]
            },
            "pitch": 5.07,
            "popupDistance": 100,
            "hideEasing": "cubic_out",
            "popupMaxHeight": "95%"
           },
           {
            "showEasing": "cubic_in",
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "yaw": 57.87,
            "rotationZ": 0,
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "id": "popup_846D32DD_94EF_9331_41C4_9360FA56FF36",
            "hfov": 8.69,
            "rotationX": 0,
            "rotationY": 0,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "url": "media/popup_846D32DD_94EF_9331_41C4_9360FA56FF36_0_1.jpg",
               "width": 1024,
               "height": 576
              }
             ]
            },
            "pitch": 8.67,
            "popupDistance": 100,
            "hideEasing": "cubic_out",
            "popupMaxHeight": "95%"
           },
           {
            "showEasing": "cubic_in",
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "yaw": 14.71,
            "rotationZ": 0,
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "id": "popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3",
            "hfov": 8.01,
            "rotationX": 0,
            "rotationY": 0,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "url": "media/popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3_0_1.jpg",
               "width": 1024,
               "height": 576
              }
             ]
            },
            "pitch": -24.26,
            "popupDistance": 100,
            "hideEasing": "cubic_out",
            "popupMaxHeight": "95%"
           }
          ],
          "thumbnailUrl": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_t.jpg"
       },
       "backwardYaw": -52.42,
       "yaw": 29.22,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
       "backwardYaw": 124.74,
       "yaw": -3.72,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
       "backwardYaw": 118.15,
       "yaw": -32.6,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
       "backwardYaw": 120.67,
       "yaw": -4.95,
       "distance": 1
      }
     ],
     "pitch": 0,
     "partial": false,
     "vfov": 180,
     "hfov": 360,
     "hfovMax": 130,
     "hfovMin": 60,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_hq.jpeg",
          "width": 6434,
          "height": 3217,
          "tags": [
           "oculusgo",
           "ipadpro"
          ]
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_lq.jpeg",
          "width": 2048,
          "height": 1024,
          "tags": "preload"
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A.jpeg",
          "width": 4002,
          "height": 2001
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_9BFD5A81_94C7_21B4_4179_595DFDD5D662, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#FFFFFF','pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_984F4838_94DC_7F7F_41C5_A901FA0A44A2, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 7.4,
           "hfov": 8.33,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_12_0_0_map.gif",
              "width": 21,
              "height": 16
             }
            ]
           },
           "pitch": -18.52
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.33,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_12_0.png",
              "width": 157,
              "height": 117
             }
            ]
           },
           "pitch": -18.52,
           "yaw": 7.4
          }
         ],
         "id": "overlay_B584BB4A_B8A1_41F1_41E1_BF54F170BC58",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248, this.camera_A88276B1_B8B3_469D_41D2_3AB13175EA2E); this.mainPlayList.set('selectedIndex', 6)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 29.22,
           "hfov": 6.59,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_13_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": 0.09
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.59,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_13_0.png",
              "width": 117,
              "height": 117
             }
            ]
           },
           "pitch": 0.09,
           "yaw": 29.22
          }
         ],
         "id": "overlay_B5840B4A_B8A1_41F1_41E6_B16D00999FF1",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD, this.camera_A88896BE_B8B3_4687_41D1_4CC4E953C0E7); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -3.72,
           "hfov": 6.49,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_14_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": -10.29
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.49,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_14_0.png",
              "width": 117,
              "height": 117
             }
            ]
           },
           "pitch": -10.29,
           "yaw": -3.72
          }
         ],
         "id": "overlay_B5843B4A_B8A1_41F1_41C6_6A5CD43D7CA5",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_A8EF06D7_B8B3_4685_41E3_4B481077EE7B); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -4.95,
           "hfov": 6.55,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_15_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": 6.21
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.55,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_15_0.png",
              "width": 117,
              "height": 117
             }
            ]
           },
           "pitch": 6.21,
           "yaw": -4.95
          }
         ],
         "id": "overlay_B587CB4A_B8A1_41F1_41D8_D517929CA23D",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368, this.camera_A8FD56CA_B8B3_468F_41AE_9DF0CAFD7B7D); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -32.6,
           "hfov": 6.55,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_16_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": -6.69
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.55,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_0_HS_16_0.png",
              "width": 117,
              "height": 117
             }
            ]
           },
           "pitch": -6.69,
           "yaw": -32.6
          }
         ],
         "id": "overlay_B587EB4A_B8A1_41F1_41D3_4EF9F180E309",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "showEasing": "cubic_in",
         "showDuration": 500,
         "popupMaxWidth": "95%",
         "yaw": 7.4,
         "rotationZ": 0,
         "hideDuration": 500,
         "class": "PopupPanoramaOverlay",
         "id": "popup_9BFD5A81_94C7_21B4_4179_595DFDD5D662",
         "hfov": 8.33,
         "rotationX": 0,
         "rotationY": 0,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/popup_9BFD5A81_94C7_21B4_4179_595DFDD5D662_0_1.jpg",
            "width": 1024,
            "height": 576
           }
          ]
         },
         "pitch": -18.52,
         "popupDistance": 100,
         "hideEasing": "cubic_out",
         "popupMaxHeight": "95%"
        }
       ],
       "thumbnailUrl": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_t.jpg"
    },
    "backwardYaw": -4.95,
    "yaw": 120.67,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
    "backwardYaw": 21.25,
    "yaw": -48.05,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
    "backwardYaw": 1.28,
    "yaw": 27.83,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
    "backwardYaw": -30.78,
    "yaw": 175,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
    "backwardYaw": -3.1,
    "yaw": -117.12,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
    "backwardYaw": -10.99,
    "yaw": -172.28,
    "distance": 1
   }
  ],
  "pitch": 0,
  "partial": false,
  "vfov": 180,
  "hfov": 360,
  "hfovMax": 130,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_hq.jpeg",
       "width": 6434,
       "height": 3217,
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_lq.jpeg",
       "width": 2048,
       "height": 1024,
       "tags": "preload"
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8.jpeg",
       "width": 4002,
       "height": 2001
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_84A25397_94EC_7131_41E2_3DC776E3E17A, {'rollOverIconColor':'#666666','backgroundColorRatios':[0],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0],'paddingRight':5,'rollOverIconWidth':50,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColor':['#0066CC'],'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#FFFFFF','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#FFFFFF','pressedBackgroundColor':['#0066CC'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#0066CC'],'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0]}, this.ImageResource_86C0BAA4_952C_B317_41D5_ED7EBC4E8F95, null, null, null, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -34.47,
        "hfov": 8.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_10_0_0_map.gif",
           "width": 21,
           "height": 16
          }
         ]
        },
        "pitch": 0.19
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.79,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_10_0.png",
           "width": 157,
           "height": 117
          }
         ]
        },
        "pitch": 0.19,
        "yaw": -34.47
       }
      ],
      "id": "overlay_B7ED8B02_B8A3_4171_41E3_F93B8AA4A121",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD, this.camera_B546B76D_B8B3_4785_41E4_8CFC00C3A1C0); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -117.12,
        "hfov": 6.57,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_11_0_0_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "pitch": -4.45
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.57,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_11_0.png",
           "width": 117,
           "height": 117
          }
         ]
        },
        "pitch": -4.45,
        "yaw": -117.12
       }
      ],
      "id": "overlay_B7EA2B02_B8A3_4171_41BB_4B4FCFFF68D7",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248, this.camera_A8290717_B8B3_4785_41E4_69B9F3721C55); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 27.83,
        "hfov": 6.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_12_0_0_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "pitch": -9.35
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.5,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_12_0.png",
           "width": 117,
           "height": 117
          }
         ]
        },
        "pitch": -9.35,
        "yaw": 27.83
       }
      ],
      "id": "overlay_B7EA1B02_B8A3_4171_41E1_3A0EC9C38B3E",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A, this.camera_A836A6FE_B8B3_4687_41C6_E7C217F1DA7C); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 120.67,
        "hfov": 6.58,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_13_0_0_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "pitch": -3.43
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.58,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_13_0.png",
           "width": 117,
           "height": 117
          }
         ]
        },
        "pitch": -3.43,
        "yaw": 120.67
       }
      ],
      "id": "overlay_B7EAEB02_B8A3_4171_41E3_07B6F7327A93",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368, this.camera_A81B7724_B8B3_47BB_41E3_9FDECF84E20D); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 175,
        "hfov": 6.56,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_14_0_0_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "pitch": -5.98
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.56,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_14_0.png",
           "width": 117,
           "height": 117
          }
         ]
        },
        "pitch": -5.98,
        "yaw": 175
       }
      ],
      "id": "overlay_B7EABB02_B8A3_4171_41E6_F900D04153FD",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA, this.camera_B5429779_B8B3_478D_41E6_F14E22FD2B8A); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -172.28,
        "hfov": 6.55,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_15_0_0_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "pitch": -6.34
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.55,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_15_0.png",
           "width": 117,
           "height": 117
          }
         ]
        },
        "pitch": -6.34,
        "yaw": -172.28
       }
      ],
      "id": "overlay_B7EAAB02_B8A3_4171_41DE_37EF204C7CB9",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE, this.camera_A838D70B_B8B3_478D_41BC_41917F728ABD); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -48.05,
        "hfov": 5.15,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_16_0_0_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "pitch": 6.78
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.15,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_0_HS_16_0.png",
           "width": 92,
           "height": 93
          }
         ]
        },
        "pitch": 6.78,
        "yaw": -48.05
       }
      ],
      "id": "overlay_B7EA9B02_B8A3_4171_41E0_45913E1B9A7C",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "showEasing": "cubic_in",
      "showDuration": 500,
      "popupMaxWidth": "95%",
      "yaw": -34.47,
      "rotationZ": 0,
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "id": "popup_84A25397_94EC_7131_41E2_3DC776E3E17A",
      "hfov": 8.79,
      "rotationX": 0,
      "rotationY": 0,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/popup_84A25397_94EC_7131_41E2_3DC776E3E17A_0_1.jpg",
         "width": 1024,
         "height": 576
        }
       ]
      },
      "pitch": 0.19,
      "popupDistance": 100,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%"
     }
    ],
    "thumbnailUrl": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_t.jpg"
 },
 "this.popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282_0_0.jpg",
    "width": 2240,
    "height": 1260
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282_0_1.jpg",
    "width": 2048,
    "height": 1152
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282_0_2.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282_0_3.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_00E1834F_0DE6_179A_418D_7C59A643B09E"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_B6B0C79F_B8B3_4685_41B1_799847D906E7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 131.95,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582_0_0.jpg",
    "width": 1920,
    "height": 1080
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582_0_1.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582_0_2.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_86C5FA9F_952C_B331_41D0_AE789F4CE5A5"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": {
     "minimumZoomFactor": 0.5,
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_8407EF4E_90ED_E412_4180_9413E8B12AF8.jpeg",
        "width": 1600,
        "height": 1081
       },
       {
        "class": "ImageResourceLevel",
        "url": "media/map_8407EF4E_90ED_E412_4180_9413E8B12AF8_lq.jpeg",
        "width": 622,
        "height": 421,
        "tags": "preload"
       }
      ]
     },
     "class": "Map",
     "label": "master-plan",
     "fieldOfViewOverlayRadiusScale": 0.3,
     "id": "map_8407EF4E_90ED_E412_4180_9413E8B12AF8",
     "maximumZoomFactor": 1.2,
     "width": 2000,
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "height": 1352,
     "thumbnailUrl": "media/map_8407EF4E_90ED_E412_4180_9413E8B12AF8_t.jpg"
    },
    "player": {
     "class": "MapPlayer",
     "id": "MapViewerMapPlayer",
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
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 1,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0,
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
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
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
      "rollOver": "this.setMediaBehaviour(this.playList_A8B5B684_B8B3_597B_41D1_171FE4E4FB5B, 0)",
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
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "movementMode": "constrained"
    },
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_A8B5B684_B8B3_597B_41D1_171FE4E4FB5B"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640_0_0.jpg",
    "width": 1920,
    "height": 1080
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640_0_1.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640_0_2.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_00E1334F_0DE6_179A_4187_C542509C3B77"
 },
 "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
 {
  "class": "PanoramaCamera",
  "id": "panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_B6DDB81B_B8B3_498D_4191_AC9AC39A93A5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.28,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D",
 {
  "class": "PanoramaCamera",
  "id": "camera_B5429779_B8B3_478D_41E6_F14E22FD2B8A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 169.01,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.popup_9BFD5A81_94C7_21B4_4179_595DFDD5D662",
 "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9B1340F2_94EC_B0F3_41B2_C60EF3D9A93C_0_0.jpg",
    "width": 1920,
    "height": 1080
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9B1340F2_94EC_B0F3_41B2_C60EF3D9A93C_0_1.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9B1340F2_94EC_B0F3_41B2_C60EF3D9A93C_0_2.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_86B81A9F_952C_B331_41D8_1720B1DE5760"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
    "media": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
    "camera": {
     "class": "PanoramaCamera",
     "id": "panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "player": {
     "buttonCardboardView": {
      "maxWidth": 58,
      "class": "IconButton",
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
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     },
     "buttonToggleHotspots": {
      "maxWidth": 58,
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     },
     "mouseControlMode": "drag_acceleration",
     "buttonToggleGyroscope": {
      "maxWidth": 58,
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     },
     "gyroscopeVerticalDraggingEnabled": true,
     "class": "PanoramaPlayer",
     "id": "MainViewerPanoramaPlayer",
     "viewerArea": "this.MainViewer",
     "touchControlMode": "drag_rotation",
     "displayPlaybackBar": true
    }
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
    "media": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
    "camera": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
    "media": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
    "camera": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
    "media": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
    "camera": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
    "media": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
    "camera": {
     "class": "PanoramaCamera",
     "id": "panorama_B683EE32_B8A1_4391_41D8_F928442156FD_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
    "media": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
    "camera": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
    "media": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
    "camera": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 0)",
    "media": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
    "camera": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9A5F8A98_94C9_21D4_41E2_20B574E1A54C_0_0.jpg",
    "width": 3000,
    "height": 1743
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9A5F8A98_94C9_21D4_41E2_20B574E1A54C_0_1.jpg",
    "width": 2048,
    "height": 1189
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9A5F8A98_94C9_21D4_41E2_20B574E1A54C_0_2.jpg",
    "width": 1024,
    "height": 594
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9A5F8A98_94C9_21D4_41E2_20B574E1A54C_0_3.jpg",
    "width": 512,
    "height": 297
   }
  ],
  "id": "ImageResource_9847583E_94DC_7F72_41C5_2EB4E1027395"
 },
 "this.popup_9A5F8A98_94C9_21D4_41E2_20B574E1A54C",
 {
  "class": "PanoramaCamera",
  "id": "camera_A836A6FE_B8B3_4687_41C6_E7C217F1DA7C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 175.05,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.popup_846D32DD_94EF_9331_41C4_9360FA56FF36",
 {
  "class": "PanoramaCamera",
  "id": "camera_B69487C5_B8B3_4685_41C2_8BE53EB42723",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 141.25,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A8D236E4_B8B3_46BB_41E0_A17562F3DD33",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -84.89,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.MapViewerMapPlayer",
 "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
 "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9BFD5A81_94C7_21B4_4179_595DFDD5D662_0_0.jpg",
    "width": 1920,
    "height": 1080
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9BFD5A81_94C7_21B4_4179_595DFDD5D662_0_1.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9BFD5A81_94C7_21B4_4179_595DFDD5D662_0_2.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_984F4838_94DC_7F7F_41C5_A901FA0A44A2"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3_0_0.jpg",
    "width": 1920,
    "height": 1080
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3_0_1.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3_0_2.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_00E0C34F_0DE6_179A_41A3_4FE116A624F6"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9A426626_94E4_7312_41DB_0F6235998161_0_0.jpg",
    "width": 1920,
    "height": 1080
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9A426626_94E4_7312_41DB_0F6235998161_0_1.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9A426626_94E4_7312_41DB_0F6235998161_0_2.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_86B91A9F_952C_B331_41D5_14F31A9DC9C5"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_B6C82834_B8B3_499B_41D3_D6F853251BC0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -116.75,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_B630A840_B8B3_49FB_41D4_B27AFDC6FF88",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.72,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3",
 {
  "class": "PanoramaCamera",
  "id": "camera_B6D7880E_B8B3_4984_41E4_EF86FDFBBF43",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.popup_9B1340F2_94EC_B0F3_41B2_C60EF3D9A93C",
 {
  "class": "PanoramaCamera",
  "id": "camera_A838D70B_B8B3_478D_41BC_41917F728ABD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -158.75,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_B6F507E9_B8B3_468D_41C1_EB5381217519",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -5,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.MainViewerPanoramaPlayer",
 "this.popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640",
 {
  "class": "PanoramaCamera",
  "id": "camera_B546B76D_B8B3_4785_41E4_8CFC00C3A1C0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.9,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_B69AC7D1_B8B3_469D_41E0_0859C04C3933",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 147.4,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A88896BE_B8B3_4687_41D1_4CC4E953C0E7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -55.26,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_B6AEC7B8_B8B3_468B_41E5_98D2D5FAAB92",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -152.17,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A88276B1_B8B3_469D_41D2_3AB13175EA2E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 127.58,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A8FD56CA_B8B3_468F_41AE_9DF0CAFD7B7D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -61.85,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.popup_9A426626_94E4_7312_41DB_0F6235998161",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D_0_0.jpg",
    "width": 1920,
    "height": 1080
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D_0_1.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D_0_2.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_86C7CA9F_952C_B331_41D3_38C5166BA311"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A81B7724_B8B3_47BB_41E3_9FDECF84E20D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 149.22,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A8EF06D7_B8B3_4685_41E3_4B481077EE7B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -59.33,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_846D32DD_94EF_9331_41C4_9360FA56FF36_0_0.jpg",
    "width": 1920,
    "height": 1080
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_846D32DD_94EF_9331_41C4_9360FA56FF36_0_1.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_846D32DD_94EF_9331_41C4_9360FA56FF36_0_2.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_86C2EAA4_952C_B317_41E0_D1F4952F4164"
 },
 "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7_0_0.jpg",
    "width": 1920,
    "height": 1080
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7_0_1.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7_0_2.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_00E2A34F_0DE6_179A_4190_3A74D6498631"
 },
 "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
 {
  "class": "PanoramaCamera",
  "id": "camera_B6C3C828_B8B3_498B_41D9_B7784D35E784",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 106.71,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7",
 {
  "class": "PanoramaCamera",
  "id": "camera_A8C426F1_B8B3_469D_41D7_6ED2536CD3ED",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.28,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A8290717_B8B3_4785_41E4_69B9F3721C55",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.72,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
    "camera": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
    "camera": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
    "camera": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
    "camera": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
    "camera": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
    "camera": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
    "camera": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "media": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
    "end": "this.trigger('tourEnded')",
    "camera": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "mainPlayList"
 },
 "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_camera",
 "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
 "this.popup_84A25397_94EC_7131_41E2_3DC776E3E17A",
 "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD_camera",
 "this.popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282",
 "this.map_8407EF4E_90ED_E412_4180_9413E8B12AF8",
 {
  "class": "PanoramaCamera",
  "id": "camera_B6B62793_B8B3_469D_41E6_4299E61F3B4C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 134.45,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
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
  "toolTipOpacity": 0.5,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "minHeight": 50,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarRight": 0,
  "playbackBarHeadHeight": 15,
  "class": "ViewerArea",
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
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical"
 },
 {
  "class": "Container",
  "left": "0%",
  "width": 300,
  "scrollBarVisible": "rollOver",
  "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "children": [
   {
    "class": "Container",
    "left": "0%",
    "width": 66,
    "scrollBarVisible": "rollOver",
    "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "children": [
     {
      "backgroundColorRatios": [
       0
      ],
      "class": "Container",
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
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "maxWidth": 80,
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
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
    "gap": 10,
    "visible": false,
    "paddingBottom": 0
   },
   {
    "backgroundColorRatios": [
     0
    ],
    "class": "Container",
    "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
    "width": 300,
    "scrollBarVisible": "rollOver",
    "right": "0%",
    "paddingLeft": 40,
    "children": [
     {
      "maxWidth": 1095,
      "class": "Image",
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
      "scaleMode": "fit_inside",
      "paddingBottom": 0
     },
     {
      "class": "Container",
      "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
      "backgroundOpacity": 0,
      "scrollBarVisible": "rollOver",
      "right": "0%",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "fontFamily": "Oswald",
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Button",
        "backgroundOpacity": 0,
        "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
        "fontSize": 18,
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "gap": 5,
        "shadowSpread": 1,
        "borderRadius": 0,
        "width": "100%",
        "shadowBlurRadius": 6,
        "backgroundColorDirection": "vertical",
        "fontColor": "#FFFFFF",
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
        "layout": "horizontal",
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "fontStyle": "italic",
        "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
        "propagateClick": true,
        "data": {
         "name": "Button Tour Info"
        },
        "iconWidth": 32,
        "horizontalAlign": "left",
        "textDecoration": "none",
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
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "fontFamily": "Oswald",
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Button",
        "backgroundOpacity": 0,
        "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
        "fontSize": 18,
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "gap": 23,
        "shadowSpread": 1,
        "borderRadius": 0,
        "width": "100%",
        "shadowBlurRadius": 6,
        "backgroundColorDirection": "vertical",
        "fontColor": "#FFFFFF",
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
        "layout": "horizontal",
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "fontStyle": "italic",
        "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
        "propagateClick": true,
        "data": {
         "name": "Button Panorama List"
        },
        "iconWidth": 32,
        "horizontalAlign": "left",
        "textDecoration": "none",
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
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "fontFamily": "Oswald",
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Button",
        "backgroundOpacity": 0,
        "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
        "fontSize": 18,
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "gap": 5,
        "shadowSpread": 1,
        "borderRadius": 0,
        "width": "100%",
        "shadowBlurRadius": 6,
        "backgroundColorDirection": "vertical",
        "fontColor": "#FFFFFF",
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
        "layout": "horizontal",
        "pressedLabel": "Location",
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "fontStyle": "italic",
        "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
        "propagateClick": true,
        "data": {
         "name": "Button Location"
        },
        "iconWidth": 32,
        "horizontalAlign": "left",
        "textDecoration": "none",
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
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "fontFamily": "Oswald",
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Button",
        "backgroundOpacity": 0,
        "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
        "fontSize": 18,
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "gap": 5,
        "shadowSpread": 1,
        "borderRadius": 0,
        "width": "100%",
        "shadowBlurRadius": 6,
        "backgroundColorDirection": "vertical",
        "fontColor": "#FFFFFF",
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
        "layout": "horizontal",
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "fontStyle": "italic",
        "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
        "propagateClick": true,
        "data": {
         "name": "Button Floorplan"
        },
        "iconWidth": 32,
        "horizontalAlign": "left",
        "textDecoration": "none",
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
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "fontFamily": "Oswald",
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Button",
        "backgroundOpacity": 0,
        "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
        "fontSize": 18,
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "gap": 5,
        "shadowSpread": 1,
        "borderRadius": 0,
        "width": "100%",
        "shadowBlurRadius": 6,
        "backgroundColorDirection": "vertical",
        "fontColor": "#FFFFFF",
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
        "layout": "horizontal",
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "fontStyle": "italic",
        "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
        "propagateClick": true,
        "data": {
         "name": "Button Photoalbum"
        },
        "iconWidth": 32,
        "horizontalAlign": "left",
        "textDecoration": "none",
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
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       }
      ],
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
      "gap": 0,
      "paddingBottom": 0
     },
     {
      "class": "Container",
      "left": "0%",
      "backgroundOpacity": 0,
      "scrollBarVisible": "rollOver",
      "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundColorRatios": [
         0
        ],
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "maxWidth": 80,
        "class": "IconButton",
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
        "cursor": "hand",
        "paddingBottom": 0
       }
      ],
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
      "gap": 10,
      "paddingBottom": 0
     }
    ],
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
    "gap": 10,
    "paddingBottom": 40
   }
  ],
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
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "right": "0%",
  "paddingLeft": 0,
  "width": 115.05,
  "children": [
   {
    "class": "Container",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
    "right": "0%",
    "paddingLeft": 0,
    "width": 110,
    "children": [
     {
      "maxWidth": 60,
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
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
    "gap": 10,
    "paddingBottom": 0
   },
   {
    "class": "Container",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
    "right": "0%",
    "paddingLeft": 0,
    "children": [
     "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
     "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
     {
      "maxWidth": 58,
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     },
     "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
     {
      "maxWidth": 58,
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "maxWidth": 58,
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
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
    "gap": 3,
    "visible": false,
    "paddingBottom": 0
   }
  ],
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
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "class": "Container",
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
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
  "left": "0%",
  "backgroundOpacity": 0.6,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "left": "15%",
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
    "right": "15%",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundColorRatios": [
       0
      ],
      "class": "Container",
      "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
      "backgroundOpacity": 1,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "children": [
       {
        "maxWidth": 2000,
        "class": "Image",
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
        "scaleMode": "fit_outside",
        "paddingBottom": 0
       }
      ],
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
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "backgroundColorRatios": [
       0,
       1
      ],
      "class": "Container",
      "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
      "backgroundOpacity": 1,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 50,
      "children": [
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Container",
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
        "gap": 0,
        "paddingBottom": 0
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Container",
        "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
        "backgroundOpacity": 0.3,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "children": [
         {
          "class": "HTMLText",
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
          "paddingBottom": 20
         },
         {
          "pressedBackgroundColor": [
           "#000000"
          ],
          "fontFamily": "Oswald",
          "backgroundColorRatios": [
           0
          ],
          "class": "Button",
          "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
          "backgroundOpacity": 0.7,
          "paddingLeft": 0,
          "borderSize": 0,
          "shadow": false,
          "width": 180,
          "shadowSpread": 1,
          "borderRadius": 50,
          "shadowBlurRadius": 6,
          "backgroundColorDirection": "vertical",
          "verticalAlign": "middle",
          "fontColor": "#FFFFFF",
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
          "layout": "horizontal",
          "fontSize": "2.39vh",
          "click": "this.openLink('https://www.mondriam.com/', '_blank')",
          "fontStyle": "italic",
          "propagateClick": false,
          "data": {
           "name": "Button31015"
          },
          "iconWidth": 32,
          "horizontalAlign": "center",
          "textDecoration": "none",
          "fontWeight": "bold",
          "gap": 5,
          "iconHeight": 32,
          "cursor": "hand",
          "paddingBottom": 0
         }
        ],
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
        "gap": 10,
        "paddingBottom": 10
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       }
      ],
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
      "gap": 0,
      "paddingBottom": 20
     }
    ],
    "borderSize": 0,
    "shadowColor": "#000000",
    "shadow": true,
    "shadowSpread": 1,
    "shadowBlurRadius": 25,
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "backgroundColorDirection": "vertical",
    "bottom": "10%",
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "borderRadius": 0,
    "shadowHorizontalLength": 0,
    "minWidth": 1,
    "overflow": "scroll",
    "paddingRight": 0,
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Global"
    },
    "horizontalAlign": "left",
    "gap": 10,
    "shadowOpacity": 0.3
   },
   {
    "class": "Container",
    "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
    "left": "15%",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "right": "15%",
    "paddingLeft": 0,
    "children": [
     {
      "maxWidth": 60,
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
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
    "gap": 10,
    "paddingBottom": 0
   }
  ],
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
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "left": "0%",
  "backgroundOpacity": 0.6,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "left": "15%",
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
    "right": "15%",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundColorRatios": [
       0,
       1
      ],
      "class": "Container",
      "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
      "backgroundOpacity": 0.3,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "children": [
       {
        "maxWidth": 60,
        "class": "IconButton",
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
        "cursor": "hand",
        "paddingBottom": 0
       }
      ],
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
      "rollOverItemThumbnailShadowVerticalLength": 0,
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
      "rollOverItemThumbnailShadowHorizontalLength": 8,
      "scrollBarOpacity": 0.5,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "selectedItemThumbnailShadowVerticalLength": 0,
      "itemBackgroundColor": [],
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
      "itemOpacity": 1,
      "propagateClick": false,
      "rollOverItemLabelFontColor": "#04A3E1",
      "itemPaddingLeft": 3,
      "itemThumbnailScaleMode": "fit_outside",
      "itemBackgroundOpacity": 0,
      "itemBackgroundColorRatios": [],
      "class": "ThumbnailGrid",
      "scrollBarVisible": "rollOver",
      "itemBorderRadius": 0,
      "itemLabelPosition": "bottom",
      "paddingLeft": 70,
      "shadow": false,
      "selectedItemThumbnailShadowHorizontalLength": 0,
      "itemMode": "normal",
      "itemBackgroundColorDirection": "vertical",
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
    "bottom": "10%",
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "minHeight": 1,
    "borderRadius": 0,
    "shadowHorizontalLength": 0,
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
    "gap": 10,
    "shadowOpacity": 0.3
   }
  ],
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
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "left": "0%",
  "backgroundOpacity": 0.6,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "left": "15%",
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
    "right": "15%",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundColorRatios": [
       0
      ],
      "class": "WebFrame",
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
      "insetBorder": false,
      "paddingBottom": 0
     }
    ],
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
    "bottom": "10%",
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "minHeight": 1,
    "borderRadius": 0,
    "shadowHorizontalLength": 0,
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
    "gap": 10,
    "shadowOpacity": 0.3
   },
   {
    "class": "Container",
    "left": "15%",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
    "right": "15%",
    "paddingLeft": 0,
    "children": [
     {
      "maxWidth": 60,
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
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
    "gap": 10,
    "paddingBottom": 0
   }
  ],
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
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "left": "0%",
  "backgroundOpacity": 0.6,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundColorRatios": [
     0
    ],
    "class": "Container",
    "left": "15%",
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
    "right": "15%",
    "paddingLeft": 0,
    "children": [
     "this.MapViewer",
     {
      "class": "Container",
      "left": 0,
      "backgroundOpacity": 0,
      "scrollBarVisible": "rollOver",
      "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
      "paddingLeft": 0,
      "children": [
       {
        "maxWidth": 60,
        "class": "IconButton",
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
        "cursor": "hand",
        "paddingBottom": 0
       }
      ],
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
      "gap": 10,
      "paddingBottom": 0
     }
    ],
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
    "bottom": "10%",
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#000000"
    ],
    "minHeight": 1,
    "borderRadius": 0,
    "shadowHorizontalLength": 0,
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
    "gap": 10,
    "shadowOpacity": 0.3
   }
  ],
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
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "left": "0%",
  "backgroundOpacity": 0.6,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "left": "15%",
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
    "right": "15%",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundColorRatios": [
       0
      ],
      "class": "Container",
      "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
      "backgroundOpacity": 1,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
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
        "toolTipOpacity": 1,
        "playbackBarBackgroundColor": [
         "#FFFFFF"
        ],
        "minHeight": 1,
        "progressBarOpacity": 1,
        "playbackBarHeadShadowHorizontalLength": 0,
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
        "playbackBarRight": 0,
        "playbackBarHeadHeight": 15,
        "class": "ViewerArea",
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
        "playbackBarHeadShadowVerticalLength": 0,
        "playbackBarHeadBackgroundColorDirection": "vertical"
       },
       {
        "maxWidth": 60,
        "class": "IconButton",
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
        "cursor": "hand",
        "paddingBottom": 0
       },
       {
        "backgroundColorRatios": [
         0
        ],
        "class": "WebFrame",
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
        "insetBorder": false,
        "paddingBottom": 0
       }
      ],
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
      "gap": 10,
      "paddingBottom": 0
     }
    ],
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
    "bottom": "10%",
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "minHeight": 1,
    "borderRadius": 0,
    "shadowHorizontalLength": 0,
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
    "gap": 10,
    "shadowOpacity": 0.3
   }
  ],
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
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "class": "UIComponent",
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
   "name": "UIComponent2577"
  },
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [],
  "class": "ZoomImage",
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
   "name": "ZoomImage2578"
  },
  "visible": false,
  "scaleMode": "custom",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "class": "CloseButton",
  "id": "closeButtonPopupPanorama",
  "backgroundOpacity": 0.3,
  "pressedIconColor": "#888888",
  "right": 10,
  "paddingLeft": 5,
  "borderSize": 0,
  "shadow": false,
  "gap": 5,
  "shadowSpread": 1,
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "fontColor": "#FFFFFF",
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
  "layout": "horizontal",
  "iconColor": "#000000",
  "fontSize": "1.29vh",
  "fontStyle": "normal",
  "iconLineWidth": 5,
  "propagateClick": false,
  "data": {
   "name": "CloseButton2579"
  },
  "iconWidth": 20,
  "horizontalAlign": "center",
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "iconHeight": 20,
  "cursor": "hand",
  "paddingBottom": 5
 }
], 
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_A8B5B684_B8B3_597B_41D1_171FE4E4FB5B.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "class": "Player",
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
 "layout": "absolute",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "height": "100%",
 "scripts": {
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } }
 },
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "propagateClick": true,
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
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

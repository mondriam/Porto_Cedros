(function(){
    var script = { "definitions": [
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_81E33135_8B29_658A_4199_1C656A8828EF_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "label": "South Bay",
  "id": "panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA",
  "adjacentPanoramas": [
   {
    "panorama": {
     "class": "Panorama",
     "label": "Marina",
     "id": "panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA",
       "backwardYaw": -52.42,
       "yaw": 29.22,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": {
        "class": "Panorama",
        "label": "Aquarium",
        "id": "panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01",
          "backwardYaw": -3.72,
          "yaw": 124.74,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": {
           "class": "Panorama",
           "label": "North Bay",
           "id": "panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29",
           "adjacentPanoramas": [
            {
             "panorama": {
              "class": "Panorama",
              "label": "Events Plaza",
              "id": "panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6",
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA",
                "backwardYaw": 1.28,
                "yaw": 27.83,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01",
                "backwardYaw": -4.95,
                "yaw": 120.67,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29",
                "backwardYaw": -30.78,
                "yaw": 175,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": {
                 "class": "Panorama",
                 "label": "Long Beach",
                 "id": "panorama_81E395A9_8B29_AC9A_41D2_9120750043E4",
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "class": "Panorama",
                    "label": "Little Bay",
                    "id": "panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F",
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29",
                      "backwardYaw": -73.29,
                      "yaw": 40.86,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_81E395A9_8B29_AC9A_41D2_9120750043E4",
                      "backwardYaw": 63.25,
                      "yaw": -55.44,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6",
                      "backwardYaw": -172.28,
                      "yaw": -10.99,
                      "class": "AdjacentPanorama",
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
                       "levels": [
                        {
                         "url": "media/panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F_hq.jpeg",
                         "width": 6434,
                         "class": "ImageResourceLevel",
                         "height": 3217,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ]
                        },
                        {
                         "url": "media/panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F_lq.jpeg",
                         "width": 2048,
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "tags": "preload"
                        },
                        {
                         "url": "media/panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F.jpeg",
                         "width": 4002,
                         "class": "ImageResourceLevel",
                         "height": 2001
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "overlays": [
                       {
                        "maps": [],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29, this.camera_8C5B0DB1_90BC_240E_41C8_AEC0C813C229); this.mainPlayList.set('selectedIndex', 2)",
                          "mapColor": "image",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.54,
                          "distance": 100,
                          "image": {
                           "rowCount": 6,
                           "class": "AnimatedImageResource",
                           "colCount": 4,
                           "frameDuration": 41,
                           "frameCount": 24,
                           "levels": [
                            {
                             "url": "media/panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F_0_HS_3_0.png",
                             "width": 480,
                             "class": "ImageResourceLevel",
                             "height": 360
                            }
                           ]
                          },
                          "pitch": -7.49,
                          "yaw": 40.86
                         }
                        ],
                        "id": "overlay_8931E738_90AC_647E_41DC_ABCB308C7717",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "maps": [],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6, this.camera_8C496DC7_90BC_2412_41DA_CDC80E3E725D); this.mainPlayList.set('selectedIndex', 7)",
                          "mapColor": "image",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.58,
                          "distance": 100,
                          "image": {
                           "rowCount": 6,
                           "class": "AnimatedImageResource",
                           "colCount": 4,
                           "frameDuration": 41,
                           "frameCount": 24,
                           "levels": [
                            {
                             "url": "media/panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F_0_HS_4_0.png",
                             "width": 480,
                             "class": "ImageResourceLevel",
                             "height": 360
                            }
                           ]
                          },
                          "pitch": 3.18,
                          "yaw": -10.99
                         }
                        ],
                        "id": "overlay_8AB183C0_90AC_3C0E_41E1_C125B482731F",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "maps": [],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_81E395A9_8B29_AC9A_41D2_9120750043E4, this.camera_8C406DBB_90BC_2472_41B7_B555105ACCA8); this.mainPlayList.set('selectedIndex', 4)",
                          "mapColor": "image",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.51,
                          "distance": 100,
                          "image": {
                           "rowCount": 6,
                           "class": "AnimatedImageResource",
                           "colCount": 4,
                           "frameDuration": 41,
                           "frameCount": 24,
                           "levels": [
                            {
                             "url": "media/panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F_0_HS_5_0.png",
                             "width": 480,
                             "class": "ImageResourceLevel",
                             "height": 360
                            }
                           ]
                          },
                          "pitch": -8.8,
                          "yaw": -55.44
                         }
                        ],
                        "id": "overlay_8A92CE25_90AC_2416_41D2_3E01348CBF50",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       }
                      ],
                      "thumbnailUrl": "media/panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F_t.jpg"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F_t.jpg"
                   },
                   "backwardYaw": -55.44,
                   "yaw": 63.25,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "class": "Panorama",
                    "label": "Mountain View",
                    "id": "panorama_81E33135_8B29_658A_4199_1C656A8828EF",
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA",
                      "backwardYaw": 42.67,
                      "yaw": -38.75,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_81E395A9_8B29_AC9A_41D2_9120750043E4",
                      "backwardYaw": -45.55,
                      "yaw": 97.72,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6",
                      "class": "AdjacentPanorama"
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
                       "levels": [
                        {
                         "url": "media/panorama_81E33135_8B29_658A_4199_1C656A8828EF_hq.jpeg",
                         "width": 6434,
                         "class": "ImageResourceLevel",
                         "height": 3217,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ]
                        },
                        {
                         "url": "media/panorama_81E33135_8B29_658A_4199_1C656A8828EF_lq.jpeg",
                         "width": 2048,
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "tags": "preload"
                        },
                        {
                         "url": "media/panorama_81E33135_8B29_658A_4199_1C656A8828EF.jpeg",
                         "width": 4002,
                         "class": "ImageResourceLevel",
                         "height": 2001
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "overlays": [
                       {
                        "maps": [],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_81E395A9_8B29_AC9A_41D2_9120750043E4, this.camera_8C1B0E19_90BC_243E_41D7_C91B6AE62CB9); this.mainPlayList.set('selectedIndex', 4)",
                          "mapColor": "image",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.46,
                          "distance": 100,
                          "image": {
                           "rowCount": 6,
                           "class": "AnimatedImageResource",
                           "colCount": 4,
                           "frameDuration": 41,
                           "frameCount": 24,
                           "levels": [
                            {
                             "url": "media/panorama_81E33135_8B29_658A_4199_1C656A8828EF_0_HS_3_0.png",
                             "width": 480,
                             "class": "ImageResourceLevel",
                             "height": 360
                            }
                           ]
                          },
                          "pitch": -11.4,
                          "yaw": 97.72
                         }
                        ],
                        "id": "overlay_8A41A005_90AD_DC16_41DB_02B684EE71B1",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "maps": [],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 7)",
                          "mapColor": "image",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.56,
                          "distance": 100,
                          "image": {
                           "rowCount": 6,
                           "class": "AnimatedImageResource",
                           "colCount": 4,
                           "frameDuration": 41,
                           "frameCount": 24,
                           "levels": [
                            {
                             "url": "media/panorama_81E33135_8B29_658A_4199_1C656A8828EF_0_HS_4_0.png",
                             "width": 480,
                             "class": "ImageResourceLevel",
                             "height": 360
                            }
                           ]
                          },
                          "pitch": -5.78,
                          "yaw": 21.25
                         }
                        ],
                        "id": "overlay_8AF0EC37_90AC_2472_41C3_BB3E3B33DE2D",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "maps": [],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA, this.camera_8C123E0F_90BC_2412_41D9_7F6F5B433AB8); this.mainPlayList.set('selectedIndex', 6)",
                          "mapColor": "image",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.36,
                          "distance": 100,
                          "image": {
                           "rowCount": 6,
                           "class": "AnimatedImageResource",
                           "colCount": 4,
                           "frameDuration": 41,
                           "frameCount": 24,
                           "levels": [
                            {
                             "url": "media/panorama_81E33135_8B29_658A_4199_1C656A8828EF_0_HS_5_0.png",
                             "width": 480,
                             "class": "ImageResourceLevel",
                             "height": 360
                            }
                           ]
                          },
                          "pitch": -15.1,
                          "yaw": -38.75
                         }
                        ],
                        "id": "overlay_8AE47C70_90AC_240E_41DF_E36F24FBA883",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       }
                      ],
                      "thumbnailUrl": "media/panorama_81E33135_8B29_658A_4199_1C656A8828EF_t.jpg"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_81E33135_8B29_658A_4199_1C656A8828EF_t.jpg"
                   },
                   "backwardYaw": 97.72,
                   "yaw": -45.55,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6",
                   "backwardYaw": -117.12,
                   "yaw": -3.1,
                   "class": "AdjacentPanorama",
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
                    "levels": [
                     {
                      "url": "media/panorama_81E395A9_8B29_AC9A_41D2_9120750043E4_hq.jpeg",
                      "width": 6434,
                      "class": "ImageResourceLevel",
                      "height": 3217,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "url": "media/panorama_81E395A9_8B29_AC9A_41D2_9120750043E4_lq.jpeg",
                      "width": 2048,
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "tags": "preload"
                     },
                     {
                      "url": "media/panorama_81E395A9_8B29_AC9A_41D2_9120750043E4.jpeg",
                      "width": 4002,
                      "class": "ImageResourceLevel",
                      "height": 2001
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "overlays": [
                    {
                     "maps": [],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F, this.camera_8C6EFD89_90BC_241E_41DE_4969D549EFFC); this.mainPlayList.set('selectedIndex', 3)",
                       "mapColor": "image",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.51,
                       "distance": 100,
                       "image": {
                        "rowCount": 6,
                        "class": "AnimatedImageResource",
                        "colCount": 4,
                        "frameDuration": 41,
                        "frameCount": 24,
                        "levels": [
                         {
                          "url": "media/panorama_81E395A9_8B29_AC9A_41D2_9120750043E4_0_HS_3_0.png",
                          "width": 480,
                          "class": "ImageResourceLevel",
                          "height": 360
                         }
                        ]
                       },
                       "pitch": -8.87,
                       "yaw": 63.25
                      }
                     ],
                     "id": "overlay_8916EC12_90AC_6432_41D6_FF30250C6B51",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "maps": [],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6, this.camera_8C520D9E_90BC_2432_41D3_9C2C8EED4B36); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "image",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.59,
                       "distance": 100,
                       "image": {
                        "rowCount": 6,
                        "class": "AnimatedImageResource",
                        "colCount": 4,
                        "frameDuration": 41,
                        "frameCount": 24,
                        "levels": [
                         {
                          "url": "media/panorama_81E395A9_8B29_AC9A_41D2_9120750043E4_0_HS_4_0.png",
                          "width": 480,
                          "class": "ImageResourceLevel",
                          "height": 360
                         }
                        ]
                       },
                       "pitch": 1.78,
                       "yaw": -3.1
                      }
                     ],
                     "id": "overlay_8A2367C9_90AC_241E_41B5_14C58FE75290",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "maps": [],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_81E33135_8B29_658A_4199_1C656A8828EF, this.camera_8C555D93_90BC_2432_41E0_51CB0E263D98); this.mainPlayList.set('selectedIndex', 5)",
                       "mapColor": "image",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.59,
                       "distance": 100,
                       "image": {
                        "rowCount": 6,
                        "class": "AnimatedImageResource",
                        "colCount": 4,
                        "frameDuration": 41,
                        "frameCount": 24,
                        "levels": [
                         {
                          "url": "media/panorama_81E395A9_8B29_AC9A_41D2_9120750043E4_0_HS_5_0.png",
                          "width": 480,
                          "class": "ImageResourceLevel",
                          "height": 360
                         }
                        ]
                       },
                       "pitch": -1.1,
                       "yaw": -45.55
                      }
                     ],
                     "id": "overlay_8AC2C766_90AC_6412_41D5_8E7CF271F8D5",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    }
                   ],
                   "thumbnailUrl": "media/panorama_81E395A9_8B29_AC9A_41D2_9120750043E4_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_81E395A9_8B29_AC9A_41D2_9120750043E4_t.jpg"
                },
                "backwardYaw": -3.1,
                "yaw": -117.12,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F",
                "backwardYaw": -10.99,
                "yaw": -172.28,
                "class": "AdjacentPanorama",
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
                 "levels": [
                  {
                   "url": "media/panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6_hq.jpeg",
                   "width": 6434,
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "url": "media/panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6_lq.jpeg",
                   "width": 2048,
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "tags": "preload"
                  },
                  {
                   "url": "media/panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6.jpeg",
                   "width": 4002,
                   "class": "ImageResourceLevel",
                   "height": 2001
                  }
                 ],
                 "class": "ImageResource"
                },
                "overlays": [
                 {
                  "maps": [],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA, this.camera_8C01EE23_90BC_2412_41CF_95071D132DED); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.5,
                    "distance": 100,
                    "image": {
                     "rowCount": 6,
                     "class": "AnimatedImageResource",
                     "colCount": 4,
                     "frameDuration": 41,
                     "frameCount": 24,
                     "levels": [
                      {
                       "url": "media/panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6_0_HS_5_0.png",
                       "width": 480,
                       "class": "ImageResourceLevel",
                       "height": 360
                      }
                     ]
                    },
                    "pitch": -9.35,
                    "yaw": 27.83
                   }
                  ],
                  "id": "overlay_8AC2BD40_90B4_640E_41C7_3B0C2D09DB62",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "maps": [],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01, this.camera_8C0ECE33_90BC_2472_41D3_6898104835D9); this.mainPlayList.set('selectedIndex', 0)",
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.58,
                    "distance": 100,
                    "image": {
                     "rowCount": 6,
                     "class": "AnimatedImageResource",
                     "colCount": 4,
                     "frameDuration": 41,
                     "frameCount": 24,
                     "levels": [
                      {
                       "url": "media/panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6_0_HS_6_0.png",
                       "width": 480,
                       "class": "ImageResourceLevel",
                       "height": 360
                      }
                     ]
                    },
                    "pitch": -3.43,
                    "yaw": 120.67
                   }
                  ],
                  "id": "overlay_8A866DFA_90B4_27F3_41C2_0D936DC745FB",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "maps": [],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29, this.camera_8DF73E3D_90BC_2476_41DD_53D659EBCF6E); this.mainPlayList.set('selectedIndex', 2)",
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.56,
                    "distance": 100,
                    "image": {
                     "rowCount": 6,
                     "class": "AnimatedImageResource",
                     "colCount": 4,
                     "frameDuration": 41,
                     "frameCount": 24,
                     "levels": [
                      {
                       "url": "media/panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6_0_HS_7_0.png",
                       "width": 480,
                       "class": "ImageResourceLevel",
                       "height": 360
                      }
                     ]
                    },
                    "pitch": -5.98,
                    "yaw": 175
                   }
                  ],
                  "id": "overlay_8A361FF6_90B4_23F2_41B0_DF88367DADA1",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "maps": [],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_81E395A9_8B29_AC9A_41D2_9120750043E4, this.camera_8DFE0E4B_90BC_2412_41B2_6F8E33B53D93); this.mainPlayList.set('selectedIndex', 4)",
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.57,
                    "distance": 100,
                    "image": {
                     "rowCount": 6,
                     "class": "AnimatedImageResource",
                     "colCount": 4,
                     "frameDuration": 41,
                     "frameCount": 24,
                     "levels": [
                      {
                       "url": "media/panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6_0_HS_8_0.png",
                       "width": 480,
                       "class": "ImageResourceLevel",
                       "height": 360
                      }
                     ]
                    },
                    "pitch": -4.45,
                    "yaw": -117.12
                   }
                  ],
                  "id": "overlay_8A990A58_90B4_2C3E_41BB_A996F97EE244",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "maps": [],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F, this.camera_8DE3FE58_90BC_243E_41B0_CA435808EB6B); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.55,
                    "distance": 100,
                    "image": {
                     "rowCount": 6,
                     "class": "AnimatedImageResource",
                     "colCount": 4,
                     "frameDuration": 41,
                     "frameCount": 24,
                     "levels": [
                      {
                       "url": "media/panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6_0_HS_9_0.png",
                       "width": 480,
                       "class": "ImageResourceLevel",
                       "height": 360
                      }
                     ]
                    },
                    "pitch": -6.34,
                    "yaw": -172.28
                   }
                  ],
                  "id": "overlay_890CE9D3_90B4_2C32_41AE_564072C23DA4",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 }
                ],
                "thumbnailUrl": "media/panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6_t.jpg"
             },
             "backwardYaw": 175,
             "yaw": -30.78,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01",
             "backwardYaw": -32.6,
             "yaw": 118.15,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19",
             "backwardYaw": -105.73,
             "yaw": 95.11,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F",
             "backwardYaw": 40.86,
             "yaw": -73.29,
             "class": "AdjacentPanorama",
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
              "levels": [
               {
                "url": "media/panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29_hq.jpeg",
                "width": 6434,
                "class": "ImageResourceLevel",
                "height": 3217,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "url": "media/panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29_lq.jpeg",
                "width": 2048,
                "class": "ImageResourceLevel",
                "height": 1024,
                "tags": "preload"
               },
               {
                "url": "media/panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29.jpeg",
                "width": 4002,
                "class": "ImageResourceLevel",
                "height": 2001
               }
              ],
              "class": "ImageResource"
             },
             "overlays": [
              {
               "maps": [],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19, this.camera_8C7A9D75_90BC_24F6_41C1_D5CFB7543870); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.49,
                 "distance": 100,
                 "image": {
                  "rowCount": 6,
                  "class": "AnimatedImageResource",
                  "colCount": 4,
                  "frameDuration": 41,
                  "frameCount": 24,
                  "levels": [
                   {
                    "url": "media/panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29_0_HS_4_0.png",
                    "width": 480,
                    "class": "ImageResourceLevel",
                    "height": 360
                   }
                  ]
                 },
                 "pitch": -10.29,
                 "yaw": 95.11
                }
               ],
               "id": "overlay_8AB757A1_90D4_240E_41C0_988BC1048F4A",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "maps": [],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01, this.camera_8C7E7D6A_90BC_2412_41E0_5019DC53811C); this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.59,
                 "distance": 100,
                 "image": {
                  "rowCount": 6,
                  "class": "AnimatedImageResource",
                  "colCount": 4,
                  "frameDuration": 41,
                  "frameCount": 24,
                  "levels": [
                   {
                    "url": "media/panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29_0_HS_5_0.png",
                    "width": 480,
                    "class": "ImageResourceLevel",
                    "height": 360
                   }
                  ]
                 },
                 "pitch": -1.83,
                 "yaw": 118.15
                }
               ],
               "id": "overlay_8AC4631E_90D4_DC32_41DC_CFB83BC25F60",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "maps": [],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F, this.camera_8C616D7F_90BC_24F2_4189_5124CE55501C); this.mainPlayList.set('selectedIndex', 3)",
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.59,
                 "distance": 100,
                 "image": {
                  "rowCount": 6,
                  "class": "AnimatedImageResource",
                  "colCount": 4,
                  "frameDuration": 41,
                  "frameCount": 24,
                  "levels": [
                   {
                    "url": "media/panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29_0_HS_6_0.png",
                    "width": 480,
                    "class": "ImageResourceLevel",
                    "height": 360
                   }
                  ]
                 },
                 "pitch": -1.1,
                 "yaw": -73.29
                }
               ],
               "id": "overlay_895D0DEA_90D4_6412_41A7_E9AE568DF958",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "maps": [],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6, this.camera_8C7D6D5E_90BC_2432_41E0_05E0C62D0658); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.5,
                 "distance": 100,
                 "image": {
                  "rowCount": 6,
                  "class": "AnimatedImageResource",
                  "colCount": 4,
                  "frameDuration": 41,
                  "frameCount": 24,
                  "levels": [
                   {
                    "url": "media/panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29_0_HS_7_0.png",
                    "width": 480,
                    "class": "ImageResourceLevel",
                    "height": 360
                   }
                  ]
                 },
                 "pitch": 9.43,
                 "yaw": -30.78
                }
               ],
               "id": "overlay_890AD4B0_90AC_240E_41D7_7D7264CEA037",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29_t.jpg"
          },
          "backwardYaw": 95.11,
          "yaw": -105.73,
          "class": "AdjacentPanorama",
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
           "levels": [
            {
             "url": "media/panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19_hq.jpeg",
             "width": 6434,
             "class": "ImageResourceLevel",
             "height": 3217,
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "url": "media/panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19_lq.jpeg",
             "width": 2048,
             "class": "ImageResourceLevel",
             "height": 1024,
             "tags": "preload"
            },
            {
             "url": "media/panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19.jpeg",
             "width": 4002,
             "class": "ImageResourceLevel",
             "height": 2001
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "maps": [],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01, this.camera_8C2CDDF7_90BC_27F2_41C1_51FB8B7D1EC4); this.mainPlayList.set('selectedIndex', 0)",
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.58,
              "distance": 100,
              "image": {
               "rowCount": 6,
               "class": "AnimatedImageResource",
               "colCount": 4,
               "frameDuration": 41,
               "frameCount": 24,
               "levels": [
                {
                 "url": "media/panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19_0_HS_2_0.png",
                 "width": 480,
                 "class": "ImageResourceLevel",
                 "height": 360
                }
               ]
              },
              "pitch": 3.08,
              "yaw": 124.74
             }
            ],
            "id": "overlay_8949412B_90D5_DC12_41BD_52F03DB9219A",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "maps": [],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29, this.camera_8C15CE02_90BC_2413_41C1_E6D8419C0DC0); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.57,
              "distance": 100,
              "image": {
               "rowCount": 6,
               "class": "AnimatedImageResource",
               "colCount": 4,
               "frameDuration": 41,
               "frameCount": 24,
               "levels": [
                {
                 "url": "media/panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19_0_HS_3_0.png",
                 "width": 480,
                 "class": "ImageResourceLevel",
                 "height": 360
                }
               ]
              },
              "pitch": -5.06,
              "yaw": -105.73
             }
            ],
            "id": "overlay_8AFF5733_90D4_6472_41DF_CB699D41868C",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           }
          ],
          "thumbnailUrl": "media/panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19_t.jpg"
       },
       "backwardYaw": 124.74,
       "yaw": -3.72,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29",
       "backwardYaw": 118.15,
       "yaw": -32.6,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6",
       "backwardYaw": 120.67,
       "yaw": -4.95,
       "class": "AdjacentPanorama",
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
        "levels": [
         {
          "url": "media/panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01_hq.jpeg",
          "width": 6434,
          "class": "ImageResourceLevel",
          "height": 3217,
          "tags": [
           "oculusgo",
           "ipadpro"
          ]
         },
         {
          "url": "media/panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01_lq.jpeg",
          "width": 2048,
          "class": "ImageResourceLevel",
          "height": 1024,
          "tags": "preload"
         },
         {
          "url": "media/panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01.jpeg",
          "width": 4002,
          "class": "ImageResourceLevel",
          "height": 2001
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "maps": [],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29, this.camera_8FB8AD0C_90BC_2416_41E0_253BC05B41BE); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.55,
           "distance": 100,
           "image": {
            "rowCount": 6,
            "class": "AnimatedImageResource",
            "colCount": 4,
            "frameDuration": 41,
            "frameCount": 24,
            "levels": [
             {
              "url": "media/panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01_0_HS_8_0.png",
              "width": 480,
              "class": "ImageResourceLevel",
              "height": 360
             }
            ]
           },
           "pitch": -6.69,
           "yaw": -32.6
          }
         ],
         "id": "overlay_8C295284_90D4_3C16_41E1_A3F70D186C77",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "maps": [],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19, this.camera_8FBD4D02_90BC_2412_41D8_7EC5ED43C6D4); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.49,
           "distance": 100,
           "image": {
            "rowCount": 6,
            "class": "AnimatedImageResource",
            "colCount": 4,
            "frameDuration": 41,
            "frameCount": 24,
            "levels": [
             {
              "url": "media/panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01_0_HS_9_0.png",
              "width": 480,
              "class": "ImageResourceLevel",
              "height": 420
             }
            ]
           },
           "pitch": -10.29,
           "yaw": -3.72
          }
         ],
         "id": "overlay_8BAB6E3B_90D4_2472_41D9_69F61E9BFC23",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "maps": [],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6, this.camera_8C705D4C_90BC_2416_41DE_6C6884592FA3); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.55,
           "distance": 100,
           "image": {
            "rowCount": 6,
            "class": "AnimatedImageResource",
            "colCount": 4,
            "frameDuration": 41,
            "frameCount": 24,
            "levels": [
             {
              "url": "media/panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01_0_HS_10_0.png",
              "width": 480,
              "class": "ImageResourceLevel",
              "height": 360
             }
            ]
           },
           "pitch": 6.21,
           "yaw": -4.95
          }
         ],
         "id": "overlay_8A435496_90D7_E432_41B1_D36C6D9606E1",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "maps": [],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA, this.camera_8FB0DCF3_90BC_25F2_41B7_879A4394590A); this.mainPlayList.set('selectedIndex', 6)",
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.59,
           "distance": 100,
           "image": {
            "rowCount": 6,
            "class": "AnimatedImageResource",
            "colCount": 4,
            "frameDuration": 41,
            "frameCount": 24,
            "levels": [
             {
              "url": "media/panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01_0_HS_11_0.png",
              "width": 480,
              "class": "ImageResourceLevel",
              "height": 360
             }
            ]
           },
           "pitch": 0.09,
           "yaw": 29.22
          }
         ],
         "id": "overlay_8A9C73CE_90D4_DC12_41D8_9903E1D6CEB7",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        }
       ],
       "thumbnailUrl": "media/panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01_t.jpg"
    },
    "backwardYaw": 29.22,
    "yaw": -52.42,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_81E33135_8B29_658A_4199_1C656A8828EF",
    "backwardYaw": -38.75,
    "yaw": 42.67,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6",
    "backwardYaw": 27.83,
    "yaw": 1.28,
    "class": "AdjacentPanorama",
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
     "levels": [
      {
       "url": "media/panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA_hq.jpeg",
       "width": 6434,
       "class": "ImageResourceLevel",
       "height": 3217,
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "url": "media/panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA_lq.jpeg",
       "width": 2048,
       "class": "ImageResourceLevel",
       "height": 1024,
       "tags": "preload"
      },
      {
       "url": "media/panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA.jpeg",
       "width": 4002,
       "class": "ImageResourceLevel",
       "height": 2001
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_81E33135_8B29_658A_4199_1C656A8828EF, this.camera_8C3F4DDB_90BC_2432_41C6_4ACF6BAF531F); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.57,
        "distance": 100,
        "image": {
         "rowCount": 6,
         "class": "AnimatedImageResource",
         "colCount": 4,
         "frameDuration": 41,
         "frameCount": 24,
         "levels": [
          {
           "url": "media/panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA_0_HS_3_0.png",
           "width": 480,
           "class": "ImageResourceLevel",
           "height": 360
          }
         ]
        },
        "pitch": 4.83,
        "yaw": 42.67
       }
      ],
      "id": "overlay_8AB20046_90B3_DC12_41D0_9023C948724B",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "maps": [],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6, this.camera_8C27EDE6_90BC_2412_41B1_FCA65F52B2B7); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.56,
        "distance": 100,
        "image": {
         "rowCount": 6,
         "class": "AnimatedImageResource",
         "colCount": 4,
         "frameDuration": 41,
         "frameCount": 24,
         "levels": [
          {
           "url": "media/panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA_0_HS_4_0.png",
           "width": 480,
           "class": "ImageResourceLevel",
           "height": 360
          }
         ]
        },
        "pitch": 5.96,
        "yaw": 1.28
       }
      ],
      "id": "overlay_8A3D9AD6_90B4_EC32_41DB_57D26A448218",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "maps": [],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01, this.camera_8C364DD1_90BC_240E_41CC_A24547311760); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.59,
        "distance": 100,
        "image": {
         "rowCount": 6,
         "class": "AnimatedImageResource",
         "colCount": 4,
         "frameDuration": 41,
         "frameCount": 24,
         "levels": [
          {
           "url": "media/panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA_0_HS_5_0.png",
           "width": 480,
           "class": "ImageResourceLevel",
           "height": 360
          }
         ]
        },
        "pitch": -0.53,
        "yaw": -52.42
       }
      ],
      "id": "overlay_8A303CFB_90B4_25F2_41AE_766832FEF282",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     }
    ],
    "thumbnailUrl": "media/panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F",
 {
  "items": [
   {
    "begin": "this.loopAlbum(this.playList_8FDBECDA_90BC_2432_41C5_8E881E9B1D2C, 0)",
    "media": {
     "class": "PhotoAlbum",
     "thumbnailUrl": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_t.png",
     "label": "Photo Album casa vista_00008",
     "audios": [
      {
       "class": "PhotoAlbumAudio",
       "audio": {
        "class": "AudioResource",
        "mp3Url": "media/audio_82EF16BE_90F4_E472_41CE_CC9967D93604.mp3",
        "oggUrl": "media/audio_82EF16BE_90F4_E472_41CE_CC9967D93604.ogg"
       },
       "id": "audio_82EF16BE_90F4_E472_41CE_CC9967D93604",
       "autoplay": true,
       "data": {
        "label": "audio"
       }
      }
     ],
     "id": "album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1",
     "playList": {
      "items": [
       {
        "media": {
         "class": "Photo",
         "label": "casa vista_00008",
         "id": "album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_0",
         "duration": 0,
         "width": 1920,
         "data": "Hill House",
         "image": {
          "levels": [
           {
            "url": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_0.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "height": 1080,
         "thumbnailUrl": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_0_t.jpg"
        },
        "class": "PhotoPlayListItem",
        "camera": {
         "class": "MovementPhotoCamera",
         "duration": 0,
         "targetPosition": {
          "x": "0.50",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1,
          "y": "0.50"
         },
         "scaleMode": "fit_inside",
         "initialPosition": {
          "x": "0.49",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1.01,
          "y": "0.31"
         },
         "easing": "linear"
        }
       },
       {
        "media": {
         "class": "Photo",
         "label": "Churaumi Aquarium_00289",
         "id": "album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_1",
         "duration": 0,
         "width": 1920,
         "image": {
          "levels": [
           {
            "url": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_1.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "height": 1080,
         "thumbnailUrl": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_1_t.jpg"
        },
        "class": "PhotoPlayListItem",
        "camera": {
         "class": "MovementPhotoCamera",
         "duration": 0,
         "targetPosition": {
          "x": "0.50",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1,
          "y": "0.50"
         },
         "scaleMode": "fit_inside",
         "initialPosition": {
          "x": "0.49",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1.01,
          "y": "0.49"
         },
         "easing": "linear"
        }
       },
       {
        "media": {
         "class": "Photo",
         "label": "cuarto de hotel elegante0014",
         "id": "album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_2",
         "duration": 0,
         "width": 1920,
         "image": {
          "levels": [
           {
            "url": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_2.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "height": 1080,
         "thumbnailUrl": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_2_t.png"
        },
        "class": "PhotoPlayListItem",
        "camera": {
         "class": "MovementPhotoCamera",
         "duration": 0,
         "targetPosition": {
          "x": "0.50",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1,
          "y": "0.50"
         },
         "scaleMode": "fit_inside",
         "initialPosition": {
          "x": "0.68",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1.01,
          "y": "0.28"
         },
         "easing": "linear"
        }
       },
       {
        "media": {
         "class": "Photo",
         "label": "CuartoHotel_SEC0007",
         "id": "album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_3",
         "duration": 0,
         "width": 1920,
         "image": {
          "levels": [
           {
            "url": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_3.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "height": 1080,
         "thumbnailUrl": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_3_t.png"
        },
        "class": "PhotoPlayListItem",
        "camera": {
         "class": "MovementPhotoCamera",
         "duration": 0,
         "targetPosition": {
          "x": "0.50",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1,
          "y": "0.50"
         },
         "scaleMode": "fit_inside",
         "initialPosition": {
          "x": "0.25",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1.01,
          "y": "0.51"
         },
         "easing": "linear"
        }
       },
       {
        "media": {
         "class": "Photo",
         "label": "hotel1",
         "id": "album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_4",
         "duration": 0,
         "width": 2240,
         "image": {
          "levels": [
           {
            "url": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_4.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "height": 1260,
         "thumbnailUrl": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_4_t.png"
        },
        "class": "PhotoPlayListItem",
        "camera": {
         "class": "MovementPhotoCamera",
         "duration": 0,
         "targetPosition": {
          "x": "0.50",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1,
          "y": "0.50"
         },
         "scaleMode": "fit_inside",
         "initialPosition": {
          "x": "0.67",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1.01,
          "y": "0.46"
         },
         "easing": "linear"
        }
       },
       {
        "media": {
         "class": "Photo",
         "label": "Porto Cedros  Residencial",
         "id": "album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_5",
         "duration": 0,
         "width": 1920,
         "image": {
          "levels": [
           {
            "url": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_5.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "height": 1080,
         "thumbnailUrl": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_5_t.jpg"
        },
        "class": "PhotoPlayListItem",
        "camera": {
         "class": "MovementPhotoCamera",
         "duration": 0,
         "targetPosition": {
          "x": "0.50",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1,
          "y": "0.50"
         },
         "scaleMode": "fit_inside",
         "initialPosition": {
          "x": "0.46",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1.01,
          "y": "0.27"
         },
         "easing": "linear"
        }
       },
       {
        "media": {
         "class": "Photo",
         "label": "Porto Cedros Bahia2",
         "id": "album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_6",
         "duration": 0,
         "width": 1920,
         "image": {
          "levels": [
           {
            "url": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_6.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "height": 1080,
         "thumbnailUrl": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_6_t.jpg"
        },
        "class": "PhotoPlayListItem",
        "camera": {
         "class": "MovementPhotoCamera",
         "duration": 0,
         "targetPosition": {
          "x": "0.50",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1,
          "y": "0.50"
         },
         "scaleMode": "fit_inside",
         "initialPosition": {
          "x": "0.42",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1.01,
          "y": "0.25"
         },
         "easing": "linear"
        }
       },
       {
        "media": {
         "class": "Photo",
         "label": "Porto Cedros Marina",
         "id": "album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_7",
         "duration": 0,
         "width": 1920,
         "image": {
          "levels": [
           {
            "url": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_7.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "height": 1080,
         "thumbnailUrl": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_7_t.jpg"
        },
        "class": "PhotoPlayListItem",
        "camera": {
         "class": "MovementPhotoCamera",
         "duration": 0,
         "targetPosition": {
          "x": "0.50",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1,
          "y": "0.50"
         },
         "scaleMode": "fit_inside",
         "initialPosition": {
          "x": "0.38",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1.01,
          "y": "0.47"
         },
         "easing": "linear"
        }
       },
       {
        "media": {
         "class": "Photo",
         "label": "resthotelsec_00025",
         "id": "album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_8",
         "duration": 0,
         "width": 1920,
         "image": {
          "levels": [
           {
            "url": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_8.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "height": 1080,
         "thumbnailUrl": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_8_t.jpg"
        },
        "class": "PhotoPlayListItem",
        "camera": {
         "class": "MovementPhotoCamera",
         "duration": 0,
         "targetPosition": {
          "x": "0.50",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1,
          "y": "0.50"
         },
         "scaleMode": "fit_inside",
         "initialPosition": {
          "x": "0.55",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1.01,
          "y": "0.43"
         },
         "easing": "linear"
        }
       },
       {
        "media": {
         "class": "Photo",
         "label": "SecuenciaHotel2_00297",
         "id": "album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_9",
         "duration": 0,
         "width": 1920,
         "image": {
          "levels": [
           {
            "url": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_9.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "height": 1080,
         "thumbnailUrl": "media/album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_9_t.png"
        },
        "class": "PhotoPlayListItem",
        "camera": {
         "class": "MovementPhotoCamera",
         "duration": 0,
         "targetPosition": {
          "x": "0.50",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1,
          "y": "0.50"
         },
         "scaleMode": "fit_inside",
         "initialPosition": {
          "x": "0.40",
          "class": "PhotoCameraPosition",
          "zoomFactor": 1.01,
          "y": "0.32"
         },
         "easing": "linear"
        }
       }
      ],
      "id": "album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_AlbumPlayList",
      "class": "PhotoPlayList"
     }
    },
    "player": {
     "buttonNext": {
      "class": "IconButton",
      "maxWidth": 60,
      "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
      "maxHeight": 60,
      "backgroundOpacity": 0,
      "transparencyActive": false,
      "right": 10,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "14.22%",
      "borderRadius": 0,
      "top": "20%",
      "minHeight": 50,
      "bottom": "20%",
      "verticalAlign": "middle",
      "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
      "mode": "push",
      "minWidth": 50,
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
      "propagateClick": true,
      "data": {
       "name": "IconButton >"
      },
      "horizontalAlign": "center",
      "cursor": "hand",
      "paddingBottom": 0
     },
     "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
     "viewerArea": {
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
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadHeight": 15,
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
      "playbackBarHeadShadowVerticalLength": 0,
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
      "playbackBarHeadShadowHorizontalLength": 0,
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
     "buttonPrevious": {
      "class": "IconButton",
      "maxWidth": 60,
      "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
      "left": 10,
      "maxHeight": 60,
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "transparencyActive": false,
      "width": "14.22%",
      "borderRadius": 0,
      "top": "20%",
      "minHeight": 50,
      "bottom": "20%",
      "verticalAlign": "middle",
      "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
      "mode": "push",
      "minWidth": 50,
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
      "propagateClick": true,
      "data": {
       "name": "IconButton <"
      },
      "horizontalAlign": "center",
      "cursor": "hand",
      "paddingBottom": 0
     },
     "class": "PhotoAlbumPlayer"
    },
    "class": "PhotoAlbumPlayListItem"
   }
  ],
  "id": "playList_8FDBECDA_90BC_2432_41C5_8E881E9B1D2C",
  "class": "PlayList"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8DFE0E4B_90BC_2412_41B2_6F8E33B53D93",
  "initialPosition": {
   "yaw": 176.9,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_1",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C6EFD89_90BC_241E_41DE_4969D549EFFC",
  "initialPosition": {
   "yaw": 124.56,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C01EE23_90BC_2412_41CF_95071D132DED",
  "initialPosition": {
   "yaw": -178.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_5",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8DE3FE58_90BC_243E_41B0_CA435808EB6B",
  "initialPosition": {
   "yaw": 169.01,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C406DBB_90BC_2472_41B7_B555105ACCA8",
  "initialPosition": {
   "yaw": -116.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_6",
 {
  "items": [
   {
    "media": "this.panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
    "player": {
     "buttonToggleGyroscope": {
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     },
     "viewerArea": "this.MainViewer",
     "class": "PanoramaPlayer",
     "mouseControlMode": "drag_acceleration",
     "touchControlMode": "drag_rotation",
     "gyroscopeVerticalDraggingEnabled": true,
     "displayPlaybackBar": true,
     "id": "MainViewerPanoramaPlayer",
     "buttonToggleHotspots": {
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     },
     "buttonCardboardView": {
      "class": "IconButton",
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
      "visible": false,
      "cursor": "hand",
      "paddingBottom": 0
     }
    }
   },
   {
    "media": "this.panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29",
    "class": "PanoramaPlayListItem",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F",
    "class": "PanoramaPlayListItem",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_81E395A9_8B29_AC9A_41D2_9120750043E4",
    "class": "PanoramaPlayListItem",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_81E395A9_8B29_AC9A_41D2_9120750043E4_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_81E33135_8B29_658A_4199_1C656A8828EF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_81E33135_8B29_658A_4199_1C656A8828EF_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA",
    "class": "PanoramaPlayListItem",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6",
    "class": "PanoramaPlayListItem",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 0)",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
  "class": "PlayList"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C3F4DDB_90BC_2432_41C6_4ACF6BAF531F",
  "initialPosition": {
   "yaw": 141.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_8",
 {
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
   "class": "ViewerArea",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadHeight": 15,
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
   "rollOver": "this.setMediaBehaviour(this.playList_8FD84CDA_90BC_2432_41CF_21834C84878F, 0)",
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
   "playbackBarHeadShadowVerticalLength": 0,
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
   "playbackBarHeadShadowHorizontalLength": 0,
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
  "movementMode": "constrained",
  "class": "MapPlayer"
 },
 "this.panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C1B0E19_90BC_243E_41D7_C91B6AE62CB9",
  "initialPosition": {
   "yaw": 134.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8FBD4D02_90BC_2412_41D8_7EC5ED43C6D4",
  "initialPosition": {
   "yaw": -55.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C2CDDF7_90BC_27F2_41C1_51FB8B7D1EC4",
  "initialPosition": {
   "yaw": 176.28,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C7A9D75_90BC_24F6_41C1_D5CFB7543870",
  "initialPosition": {
   "yaw": 74.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "media": {
     "minimumZoomFactor": 0.5,
     "class": "Map",
     "image": {
      "levels": [
       {
        "url": "media/map_8407EF4E_90ED_E412_4180_9413E8B12AF8.jpeg",
        "width": 1600,
        "class": "ImageResourceLevel",
        "height": 1081
       },
       {
        "url": "media/map_8407EF4E_90ED_E412_4180_9413E8B12AF8_lq.jpeg",
        "width": 622,
        "class": "ImageResourceLevel",
        "height": 421,
        "tags": "preload"
       }
      ],
      "class": "ImageResource"
     },
     "label": "master-plan",
     "fieldOfViewOverlayRadiusScale": 0.3,
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "maximumZoomFactor": 1.2,
     "width": 2000,
     "id": "map_8407EF4E_90ED_E412_4180_9413E8B12AF8",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "scaleMode": "fit_inside",
     "height": 1352,
     "thumbnailUrl": "media/map_8407EF4E_90ED_E412_4180_9413E8B12AF8_t.jpg"
    },
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_8FD84CDA_90BC_2432_41CF_21834C84878F",
  "class": "PlayList"
 },
 "this.panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29",
 "this.panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01",
 "this.album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_7",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C520D9E_90BC_2432_41D3_9C2C8EED4B36",
  "initialPosition": {
   "yaw": 62.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_9",
 "this.audio_82EF16BE_90F4_E472_41CE_CC9967D93604",
 "this.album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C5B0DB1_90BC_240E_41C8_AEC0C813C229",
  "initialPosition": {
   "yaw": 106.71,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C496DC7_90BC_2412_41DA_CDC80E3E725D",
  "initialPosition": {
   "yaw": 7.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_2",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C0ECE33_90BC_2472_41D3_6898104835D9",
  "initialPosition": {
   "yaw": 175.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29_camera",
 "this.album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_0",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8FB8AD0C_90BC_2416_41E0_253BC05B41BE",
  "initialPosition": {
   "yaw": -61.85,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C27EDE6_90BC_2412_41B1_FCA65F52B2B7",
  "initialPosition": {
   "yaw": -152.17,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C15CE02_90BC_2413_41C1_E6D8419C0DC0",
  "initialPosition": {
   "yaw": -84.89,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8FB0DCF3_90BC_25F2_41B7_879A4394590A",
  "initialPosition": {
   "yaw": 127.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_81E395A9_8B29_AC9A_41D2_9120750043E4",
 {
  "items": [
   {
    "media": "this.panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_81E14179_8B29_A47A_41C2_14DDC33EAB01_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_819498AD_8B28_A49A_41D7_AD2E8EB61D29_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_81E395A9_8B29_AC9A_41D2_9120750043E4",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_81E395A9_8B29_AC9A_41D2_9120750043E4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_81E33135_8B29_658A_4199_1C656A8828EF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_81E33135_8B29_658A_4199_1C656A8828EF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_81E3D551_8B28_AD8B_41D4_88A86B976DEA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_3",
 "this.panorama_81E3193C_8B29_65F9_41DC_309652A9BF3F_camera",
 "this.panorama_81E5CD8E_8B29_7C96_41C2_84F5144D07C6_camera",
 "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C616D7F_90BC_24F2_4189_5124CE55501C",
  "initialPosition": {
   "yaw": -139.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_81E33135_8B29_658A_4199_1C656A8828EF",
 "this.MainViewerPanoramaPlayer",
 "this.panorama_81E395A9_8B29_AC9A_41D2_9120750043E4_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C555D93_90BC_2432_41E0_51CB0E263D98",
  "initialPosition": {
   "yaw": -82.28,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C123E0F_90BC_2412_41D9_7F6F5B433AB8",
  "initialPosition": {
   "yaw": -137.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C364DD1_90BC_240E_41CC_A24547311760",
  "initialPosition": {
   "yaw": -150.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C7D6D5E_90BC_2432_41E0_05E0C62D0658",
  "initialPosition": {
   "yaw": -5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C705D4C_90BC_2416_41DE_6C6884592FA3",
  "initialPosition": {
   "yaw": -59.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.album_9F366D45_90B4_E416_41C5_4EE1E83A8FE1_4",
 "this.map_8407EF4E_90ED_E412_4180_9413E8B12AF8",
 "this.panorama_8064BC93_8B28_DC8E_41E0_6D3A8C7E0A19",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8DF73E3D_90BC_2476_41DD_53D659EBCF6E",
  "initialPosition": {
   "yaw": 149.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8C7E7D6A_90BC_2412_41E0_5019DC53811C",
  "initialPosition": {
   "yaw": 147.4,
   "class": "PanoramaCameraPosition",
   "pitch": 0
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
  "playbackBarRight": 0,
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
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
  "playbackBarHeadShadowVerticalLength": 0,
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
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "class": "Container",
  "children": [
   {
    "class": "Container",
    "children": [
     {
      "class": "Container",
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
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
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
    "gap": 10,
    "visible": false,
    "paddingBottom": 0
   },
   {
    "class": "Container",
    "backgroundColorRatios": [
     0
    ],
    "children": [
     {
      "class": "Image",
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
      "scaleMode": "fit_inside",
      "paddingBottom": 0
     },
     {
      "class": "Container",
      "children": [
       {
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "class": "Button",
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundOpacity": 0,
        "fontColor": "#FFFFFF",
        "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
        "fontFamily": "Oswald",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "gap": 5,
        "shadowSpread": 1,
        "borderRadius": 0,
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
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
        "fontSize": 18,
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
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "class": "Button",
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundOpacity": 0,
        "fontColor": "#FFFFFF",
        "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
        "fontFamily": "Oswald",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "gap": 23,
        "shadowSpread": 1,
        "borderRadius": 0,
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
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
        "fontSize": 18,
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
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "class": "Button",
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundOpacity": 0,
        "fontColor": "#FFFFFF",
        "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
        "fontFamily": "Oswald",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "gap": 5,
        "shadowSpread": 1,
        "borderRadius": 0,
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
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
        "fontSize": 18,
        "minWidth": 1,
        "borderColor": "#000000",
        "pressedLabel": "Location",
        "paddingRight": 0,
        "height": 50,
        "paddingTop": 0,
        "label": "Site Location",
        "rollOverBackgroundOpacity": 0.8,
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
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "class": "Button",
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundOpacity": 0,
        "fontColor": "#FFFFFF",
        "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
        "fontFamily": "Oswald",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "gap": 5,
        "shadowSpread": 1,
        "borderRadius": 0,
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
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
        "fontSize": 18,
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
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "class": "Button",
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundOpacity": 0,
        "fontColor": "#FFFFFF",
        "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
        "fontFamily": "Oswald",
        "paddingLeft": 10,
        "borderSize": 0,
        "shadow": false,
        "gap": 5,
        "shadowSpread": 1,
        "borderRadius": 0,
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
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
        "fontSize": 18,
        "minWidth": 1,
        "borderColor": "#000000",
        "rollOverBackgroundOpacity": 0.8,
        "paddingRight": 0,
        "height": 50,
        "paddingTop": 0,
        "label": "Concept",
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
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "class": "Container",
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
      "gap": 0,
      "paddingBottom": 0
     },
     {
      "class": "Container",
      "children": [
       {
        "class": "Container",
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
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "class": "IconButton",
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
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "children": [
   {
    "class": "Container",
    "children": [
     {
      "class": "IconButton",
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
    "gap": 10,
    "paddingBottom": 0
   },
   {
    "class": "Container",
    "children": [
     "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
     "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
     {
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     },
     "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
     {
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     },
     {
      "class": "IconButton",
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
    "gap": 3,
    "visible": false,
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
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "children": [
   {
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "children": [
     {
      "class": "Label",
      "left": "0%",
      "backgroundOpacity": 0,
      "fontColor": "#000000",
      "id": "Label_97E97B63_8BDB_658E_41B5_989C3E8574EC",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "fontFamily": "Arial",
      "width": "100%",
      "borderRadius": 0,
      "text": "Porto Cedros",
      "top": "0%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "minWidth": 1,
      "paddingRight": 0,
      "height": "100%",
      "paddingTop": 0,
      "fontSize": "6vh",
      "fontStyle": "normal",
      "propagateClick": false,
      "data": {
       "name": "Label34501"
      },
      "horizontalAlign": "center",
      "textDecoration": "none",
      "fontWeight": "bold",
      "paddingBottom": 0
     }
    ],
    "left": "0%",
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
    "paddingLeft": 0,
    "borderSize": 0,
    "shadowColor": "#000000",
    "shadow": true,
    "width": 366,
    "shadowSpread": 1,
    "shadowBlurRadius": 8,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": 2,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "height": 78,
    "minHeight": 1,
    "borderRadius": 0,
    "minWidth": 1,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "shadowVerticalLength": 0,
    "layout": "absolute",
    "shadowHorizontalLength": 0,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": true,
    "data": {
     "name": "white block"
    },
    "horizontalAlign": "left",
    "gap": 10,
    "shadowOpacity": 0.3
   },
   {
    "class": "Container",
    "backgroundColorRatios": [
     0.01
    ],
    "children": [
     {
      "class": "Label",
      "left": "0%",
      "backgroundOpacity": 0,
      "fontColor": "#FFFFFF",
      "id": "Label_90C94937_8BDF_65F6_41D4_4C9B5B2CBE68",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "fontFamily": "Arial",
      "width": "100%",
      "borderRadius": 0,
      "text": "Puntarenas, Costa Rica",
      "top": "0%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "minWidth": 1,
      "paddingRight": 0,
      "height": "100%",
      "paddingTop": 0,
      "fontSize": "4vh",
      "fontStyle": "normal",
      "propagateClick": false,
      "data": {
       "name": "Label35163"
      },
      "horizontalAlign": "center",
      "textDecoration": "none",
      "fontWeight": "normal",
      "paddingBottom": 0
     }
    ],
    "left": 0,
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
    "paddingLeft": 0,
    "borderSize": 0,
    "shadowColor": "#000000",
    "shadow": true,
    "width": 366,
    "shadowSpread": 1,
    "shadowBlurRadius": 7,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": 86,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "height": 46,
    "minHeight": 1,
    "borderRadius": 0,
    "minWidth": 1,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [
     "#5CA1DE"
    ],
    "shadowVerticalLength": 0,
    "layout": "absolute",
    "shadowHorizontalLength": 0,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": true,
    "data": {
     "name": "blue block"
    },
    "horizontalAlign": "left",
    "gap": 10,
    "shadowOpacity": 0.3
   }
  ],
  "left": 70,
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "paddingLeft": 0,
  "width": 381,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "creationPolicy": "inAdvance",
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
  "visible": false,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "children": [
   {
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "children": [
     {
      "class": "Container",
      "backgroundColorRatios": [
       0
      ],
      "children": [
       {
        "class": "Image",
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
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "class": "Container",
      "backgroundColorRatios": [
       0,
       1
      ],
      "children": [
       {
        "class": "Container",
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
        "gap": 0,
        "paddingBottom": 0
       },
       {
        "class": "Container",
        "backgroundColorRatios": [
         0,
         1
        ],
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
          "class": "Button",
          "backgroundColorRatios": [
           0
          ],
          "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
          "backgroundOpacity": 0.7,
          "fontColor": "#FFFFFF",
          "fontFamily": "Oswald",
          "paddingLeft": 0,
          "borderSize": 0,
          "shadow": false,
          "width": 180,
          "shadowSpread": 1,
          "borderRadius": 50,
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
          "textDecoration": "none",
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
        "gap": 10,
        "paddingBottom": 10
       },
       {
        "class": "Container",
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
      "gap": 0,
      "paddingBottom": 20
     }
    ],
    "left": "15%",
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
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
    "shadowHorizontalLength": 0,
    "paddingTop": 0,
    "shadowVerticalLength": 0,
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
    "children": [
     {
      "class": "IconButton",
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
      "cursor": "hand",
      "paddingBottom": 0
     }
    ],
    "left": "15%",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
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
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "children": [
   {
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "children": [
     {
      "class": "Container",
      "backgroundColorRatios": [
       0,
       1
      ],
      "children": [
       {
        "class": "IconButton",
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
      "selectedItemThumbnailShadowVerticalLength": 0,
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
      "itemBorderRadius": 0,
      "scrollBarVisible": "rollOver",
      "selectedItemThumbnailShadowHorizontalLength": 0,
      "itemLabelPosition": "bottom",
      "paddingLeft": 70,
      "shadow": false,
      "itemMode": "normal",
      "itemBackgroundColorDirection": "vertical",
      "itemPaddingBottom": 3,
      "bottom": -0.2,
      "itemThumbnailHeight": 125,
      "itemThumbnailOpacity": 1,
      "rollOverItemThumbnailShadowHorizontalLength": 8,
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
      "itemLabelFontWeight": "normal",
      "rollOverItemThumbnailShadowVerticalLength": 0
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
    "shadowHorizontalLength": 0,
    "paddingTop": 0,
    "shadowVerticalLength": 0,
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
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "children": [
   {
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "children": [
     {
      "class": "WebFrame",
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
    "shadowHorizontalLength": 0,
    "paddingTop": 0,
    "shadowVerticalLength": 0,
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
    "children": [
     {
      "class": "IconButton",
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
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "children": [
   {
    "class": "Container",
    "backgroundColorRatios": [
     0
    ],
    "children": [
     "this.MapViewer",
     {
      "class": "Container",
      "children": [
       {
        "class": "IconButton",
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
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "backgroundColorDirection": "vertical",
    "bottom": "10%",
    "backgroundColor": [
     "#000000"
    ],
    "borderRadius": 0,
    "minWidth": 1,
    "overflow": "visible",
    "paddingRight": 0,
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "layout": "absolute",
    "shadowHorizontalLength": 0,
    "shadowVerticalLength": 0,
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
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "children": [
   {
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "children": [
     {
      "class": "Container",
      "backgroundColorRatios": [
       0
      ],
      "children": [
       "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
       "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
       "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
       {
        "class": "IconButton",
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
        "cursor": "hand",
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
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "backgroundColorDirection": "vertical",
    "bottom": "10%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "borderRadius": 0,
    "minWidth": 1,
    "overflow": "visible",
    "paddingRight": 0,
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "layout": "vertical",
    "shadowHorizontalLength": 0,
    "shadowVerticalLength": 0,
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
  "rollOver": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_8FDBECDA_90BC_2432_41C5_8E881E9B1D2C.set('selectedIndex', -1); }, this); this.playList_8FDBECDA_90BC_2432_41C5_8E881E9B1D2C.set('selectedIndex', 0)",
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
 }
], 
 "class": "Player",
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "shadow": false,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_8FD84CDA_90BC_2432_41CF_21834C84878F.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
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
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); }
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

(function(){
    var script = { "definitions": [
 {
  "class": "ImageResource",
  "id": "ImageResource_86C7CA9F_952C_B331_41D3_38C5166BA311",
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
  ]
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
    "media": {
     "vfov": 180,
     "thumbnailUrl": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_t.jpg",
     "id": "panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
     "hfov": 360,
     "class": "Panorama",
     "label": "Marina",
     "pitch": 0,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_t.jpg",
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.showPopupPanoramaOverlay(this.popup_9BFD5A81_94C7_21B4_4179_595DFDD5D662, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#0066CC'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#FFFFFF','pressedBackgroundColorRatios':[0],'rollOverBackgroundColor':['#0066CC'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':50,'backgroundColor':['#0066CC'],'iconColor':'#FFFFFF'}, this.ImageResource_984F4838_94DC_7F7F_41C5_A901FA0A44A2, null, null, null, null, false)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 7.04,
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
           "pitch": -10.73,
           "hfov": 8.64
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "hfov": 8.64,
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
           "pitch": -10.73,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 7.04
          }
         ],
         "id": "overlay_B584BB4A_B8A1_41F1_41E1_BF54F170BC58",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248, this.camera_DF019781_D1CC_5BDD_41E1_4901FC51DDD5); this.mainPlayList.set('selectedIndex', 6)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 28.32,
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
           "pitch": 1.8,
           "hfov": 6.59
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
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
           "pitch": 1.8,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 28.32
          }
         ],
         "id": "overlay_B5840B4A_B8A1_41F1_41E6_B16D00999FF1",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD, this.camera_DF2487B2_D1CC_5B3E_41E7_327D63CE69D2); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -3.72,
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
           "pitch": -10.29,
           "hfov": 6.49
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
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
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -3.72
          }
         ],
         "id": "overlay_B5843B4A_B8A1_41F1_41C6_6A5CD43D7CA5",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_DF736768_D1CC_5B2A_41D6_605A7221BF1C); this.mainPlayList.set('selectedIndex', 7)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -4.95,
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
           "pitch": 6.21,
           "hfov": 6.55
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
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
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -4.95
          }
         ],
         "id": "overlay_B587CB4A_B8A1_41F1_41D8_D517929CA23D",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368, this.camera_DF16179A_D1CC_5BEE_41DD_AFF5241DA51C); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -32.6,
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
           "pitch": -6.69,
           "hfov": 6.55
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
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
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -32.6
          }
         ],
         "id": "overlay_B587EB4A_B8A1_41F1_41D3_4EF9F180E309",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "rotationY": 0,
         "hideDuration": 500,
         "rotationX": 0,
         "showDuration": 500,
         "rotationZ": 0,
         "class": "PopupPanoramaOverlay",
         "popupDistance": 100,
         "popupMaxWidth": "95%",
         "hfov": 8.64,
         "hideEasing": "cubic_out",
         "popupMaxHeight": "95%",
         "id": "popup_9BFD5A81_94C7_21B4_4179_595DFDD5D662",
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
         "pitch": -10.73,
         "showEasing": "cubic_in",
         "yaw": 7.04
        },
        {
         "bleachingDistance": 0.4,
         "yaw": -36.83,
         "bleaching": 0.7,
         "pitch": 46.94,
         "class": "LensFlarePanoramaOverlay",
         "id": "overlay_DCC47994_D1CC_57FA_41E9_BA41C7B27906"
        }
       ],
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
       }
      }
     ],
     "hfovMin": 60,
     "hfovMax": 130,
     "partial": false,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "vfov": 180,
        "thumbnailUrl": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_t.jpg",
        "id": "panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
        "hfov": 360,
        "class": "Panorama",
        "label": "Events Plaza",
        "pitch": 0,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_t.jpg",
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.showPopupPanoramaOverlay(this.popup_84A25397_94EC_7131_41E2_3DC776E3E17A, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#0066CC'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#FFFFFF','pressedBackgroundColorRatios':[0],'rollOverBackgroundColor':['#0066CC'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':50,'backgroundColor':['#0066CC'],'iconColor':'#FFFFFF'}, this.ImageResource_86C0BAA4_952C_B317_41D5_ED7EBC4E8F95, null, null, null, null, false)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 0.79,
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
              "pitch": -15.57,
              "hfov": 8.47
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 8.47,
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
              "pitch": -15.57,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 0.79
             }
            ],
            "id": "overlay_B7ED8B02_B8A3_4171_41E3_F93B8AA4A121",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD, this.camera_DF62974F_D1CC_5B66_41D8_548BD5D495B5); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -63.81,
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
              "pitch": -13.68,
              "hfov": 6.4
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 6.4,
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
              "pitch": -13.68,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -63.81
             }
            ],
            "id": "overlay_B7EA2B02_B8A3_4171_41BB_4B4FCFFF68D7",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248, this.camera_DFAA06E7_D1CC_5D26_41D4_085D9FE5D4E9); this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 30.74,
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
              "pitch": -9.83,
              "hfov": 6.5
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
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
              "pitch": -9.83,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 30.74
             }
            ],
            "id": "overlay_B7EA1B02_B8A3_4171_41E1_3A0EC9C38B3E",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A, this.camera_DF5FC71E_D1CC_5CE6_41DD_B4DBC7F6373A); this.mainPlayList.set('selectedIndex', 0)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 131.6,
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
              "pitch": -7.52,
              "hfov": 6.54
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 6.54,
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
              "pitch": -7.52,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 131.6
             }
            ],
            "id": "overlay_B7EAEB02_B8A3_4171_41E3_07B6F7327A93",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368, this.camera_DF6C4736_D1CC_5B27_41E5_15B2C8AF288E); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 154.73,
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
              "pitch": -19.41,
              "hfov": 6.22
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 6.22,
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
              "pitch": -19.41,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 154.73
             }
            ],
            "id": "overlay_B7EABB02_B8A3_4171_41E6_F900D04153FD",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA, this.camera_DFB8B6F4_D1CC_5D3A_41E3_E1643C86CFFB); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -148.22,
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
              "pitch": -4.95,
              "hfov": 6.57
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 6.57,
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
              "pitch": -4.95,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -148.22
             }
            ],
            "id": "overlay_B7EAAB02_B8A3_4171_41DE_37EF204C7CB9",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE, this.camera_DF491700_D1CC_5CDA_41CC_7917F29FA398); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -18.6,
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
              "pitch": -5.67,
              "hfov": 5.16
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 5.16,
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
              "pitch": -5.67,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -18.6
             }
            ],
            "id": "overlay_B7EA9B02_B8A3_4171_41E0_45913E1B9A7C",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "rotationY": 0,
            "hideDuration": 500,
            "rotationX": 0,
            "showDuration": 500,
            "rotationZ": 0,
            "class": "PopupPanoramaOverlay",
            "popupDistance": 100,
            "popupMaxWidth": "95%",
            "hfov": 8.47,
            "hideEasing": "cubic_out",
            "popupMaxHeight": "95%",
            "id": "popup_84A25397_94EC_7131_41E2_3DC776E3E17A",
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
            "pitch": -15.57,
            "showEasing": "cubic_in",
            "yaw": 0.79
           },
           {
            "bleachingDistance": 0.4,
            "yaw": -69.7,
            "bleaching": 0.7,
            "pitch": 17.47,
            "class": "LensFlarePanoramaOverlay",
            "id": "overlay_DD1CB144_D1CD_D75A_41E5_C9E967B95D6C"
           }
          ],
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
          }
         }
        ],
        "hfovMin": 60,
        "hfovMax": 130,
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "vfov": 180,
           "thumbnailUrl": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_t.jpg",
           "id": "panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
           "hfov": 360,
           "class": "Panorama",
           "label": "South Bay",
           "pitch": 0,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_t.jpg",
             "overlays": [
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.showPopupPanoramaOverlay(this.popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#0066CC'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#FFFFFF','pressedBackgroundColorRatios':[0],'rollOverBackgroundColor':['#0066CC'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':50,'backgroundColor':['#0066CC'],'iconColor':'#FFFFFF'}, this.ImageResource_00E1834F_0DE6_179A_418D_7C59A643B09E, null, null, null, null, false)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 50.27,
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
                 "pitch": -6.97,
                 "hfov": 8.72
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "hfov": 8.72,
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
                 "pitch": -6.97,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 50.27
                }
               ],
               "id": "overlay_B628C358_B8A3_4190_41B3_9D227009FCE2",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.showPopupPanoramaOverlay(this.popup_846D32DD_94EF_9331_41C4_9360FA56FF36, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#0066CC'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#FFFFFF','pressedBackgroundColorRatios':[0],'rollOverBackgroundColor':['#0066CC'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':50,'backgroundColor':['#0066CC'],'iconColor':'#FFFFFF'}, this.ImageResource_86C2EAA4_952C_B317_41E0_D1F4952F4164, null, null, null, null, false)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 23.09,
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
                 "pitch": -8.05,
                 "hfov": 8.7
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "hfov": 8.7,
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
                 "pitch": -8.05,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 23.09
                }
               ],
               "id": "overlay_B6288358_B8A3_4190_41D8_784D52D25348",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.showPopupPanoramaOverlay(this.popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#0066CC'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#FFFFFF','pressedBackgroundColorRatios':[0],'rollOverBackgroundColor':['#0066CC'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':50,'backgroundColor':['#0066CC'],'iconColor':'#FFFFFF'}, this.ImageResource_00E0C34F_0DE6_179A_41A3_4FE116A624F6, null, null, null, null, false)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -10.2,
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
                 "pitch": -24.59,
                 "hfov": 7.99
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "hfov": 7.99,
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
                 "pitch": -24.59,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -10.2
                }
               ],
               "id": "overlay_B628A358_B8A3_4190_41D5_0554F9565709",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE, this.camera_DC3E967C_D1CC_5D2A_41C8_86C46D34AF10); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 43.33,
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
                 "pitch": -0.19,
                 "hfov": 6.59
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "hfov": 6.59,
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
                 "pitch": -0.19,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 43.33
                }
               ],
               "id": "overlay_B6295358_B8A3_4190_41DC_E5C1151C04FB",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_DC131662_D1CC_5D5E_41E5_7A0D4DD6FFE9); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -11.27,
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
                 "pitch": -0.22,
                 "hfov": 6.59
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "hfov": 6.59,
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
                 "pitch": -0.22,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -11.27
                }
               ],
               "id": "overlay_B6297358_B8A3_4190_41E6_5A331B9A1155",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A, this.camera_DC24966F_D1CC_5D26_41B3_EAAD445971A1); this.mainPlayList.set('selectedIndex', 0)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -42.73,
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
                 "pitch": -1.69,
                 "hfov": 6.59
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
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
                 "pitch": -1.69,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -42.73
                }
               ],
               "id": "overlay_B6292358_B8A3_4190_41E1_87904AC42B88",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "rotationY": 0,
               "hideDuration": 500,
               "rotationX": 0,
               "showDuration": 500,
               "rotationZ": 0,
               "class": "PopupPanoramaOverlay",
               "popupDistance": 100,
               "popupMaxWidth": "95%",
               "hfov": 8.72,
               "hideEasing": "cubic_out",
               "popupMaxHeight": "95%",
               "id": "popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282",
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
               "pitch": -6.97,
               "showEasing": "cubic_in",
               "yaw": 50.27
              },
              {
               "rotationY": 0,
               "hideDuration": 500,
               "rotationX": 0,
               "showDuration": 500,
               "rotationZ": 0,
               "class": "PopupPanoramaOverlay",
               "popupDistance": 100,
               "popupMaxWidth": "95%",
               "hfov": 8.7,
               "hideEasing": "cubic_out",
               "popupMaxHeight": "95%",
               "id": "popup_846D32DD_94EF_9331_41C4_9360FA56FF36",
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
               "pitch": -8.05,
               "showEasing": "cubic_in",
               "yaw": 23.09
              },
              {
               "rotationY": 0,
               "hideDuration": 500,
               "rotationX": 0,
               "showDuration": 500,
               "rotationZ": 0,
               "class": "PopupPanoramaOverlay",
               "popupDistance": 100,
               "popupMaxWidth": "95%",
               "hfov": 7.99,
               "hideEasing": "cubic_out",
               "popupMaxHeight": "95%",
               "id": "popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3",
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
               "pitch": -24.59,
               "showEasing": "cubic_in",
               "yaw": -10.2
              },
              {
               "bleachingDistance": 0.4,
               "yaw": 77.63,
               "bleaching": 0.7,
               "pitch": 17.09,
               "class": "LensFlarePanoramaOverlay",
               "id": "overlay_DD1EE644_D1CD_FD5A_41DD_5B83743E4FD6"
              }
             ],
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
             }
            }
           ],
           "hfovMin": 60,
           "hfovMax": 130,
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
             "yaw": -11.27,
             "distance": 1,
             "backwardYaw": 30.74
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
             "yaw": -42.73,
             "distance": 1,
             "backwardYaw": 28.32
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "vfov": 180,
              "thumbnailUrl": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_t.jpg",
              "id": "panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
              "hfov": 360,
              "class": "Panorama",
              "label": "Mountain View",
              "pitch": 0,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_t.jpg",
                "overlays": [
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.showPopupPanoramaOverlay(this.popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#0066CC'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#FFFFFF','pressedBackgroundColorRatios':[0],'rollOverBackgroundColor':['#0066CC'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':50,'backgroundColor':['#0066CC'],'iconColor':'#FFFFFF'}, this.ImageResource_86C5FA9F_952C_B331_41D0_AE789F4CE5A5, null, null, null, null, false)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -53.78,
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
                    "pitch": -37.26,
                    "hfov": 7
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "hfov": 7,
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
                    "pitch": -37.26,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -53.78
                   }
                  ],
                  "id": "overlay_B601ED08_B8A1_4171_41C5_E0DDA8257DEC",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.showPopupPanoramaOverlay(this.popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#0066CC'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#FFFFFF','pressedBackgroundColorRatios':[0],'rollOverBackgroundColor':['#0066CC'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':50,'backgroundColor':['#0066CC'],'iconColor':'#FFFFFF'}, this.ImageResource_00E1334F_0DE6_179A_4187_C542509C3B77, null, null, null, null, false)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 34.98,
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
                    "pitch": -15.7,
                    "hfov": 8.46
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
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
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 34.98
                   }
                  ],
                  "id": "overlay_B601BD08_B8A1_4171_41E0_592B92D1B041",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD, this.camera_DF95F6DC_D1CC_5D6A_41E1_3CA3301DFB98); this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 114.83,
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
                    "pitch": -10.55,
                    "hfov": 6.48
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "hfov": 6.48,
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
                    "pitch": -10.55,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 114.83
                   }
                  ],
                  "id": "overlay_B6019D09_B8A1_4173_41BB_8F37E182537D",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_DFF006C3_D1CC_5D5E_41D2_C58A8AA6B458); this.mainPlayList.set('selectedIndex', 7)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 44.4,
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
                    "pitch": -6.76,
                    "hfov": 6.55
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "hfov": 6.55,
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
                    "pitch": -6.76,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 44.4
                   }
                  ],
                  "id": "overlay_B6017D09_B8A1_4173_41E1_9E8DBA2686CB",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248, this.camera_DF86E6CF_D1CC_5D66_41D5_3E12645A18A2); this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -35.53,
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
                    "pitch": -11.31,
                    "hfov": 6.46
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "hfov": 6.46,
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
                    "pitch": -11.31,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -35.53
                   }
                  ],
                  "id": "overlay_B6014D09_B8A1_4173_41C3_A5E19DEFE476",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "rotationY": 0,
                  "hideDuration": 500,
                  "rotationX": 0,
                  "showDuration": 500,
                  "rotationZ": 0,
                  "class": "PopupPanoramaOverlay",
                  "popupDistance": 100,
                  "popupMaxWidth": "95%",
                  "hfov": 7,
                  "hideEasing": "cubic_out",
                  "popupMaxHeight": "95%",
                  "id": "popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582",
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
                  "pitch": -37.26,
                  "showEasing": "cubic_in",
                  "yaw": -53.78
                 },
                 {
                  "rotationY": 0,
                  "hideDuration": 500,
                  "rotationX": 0,
                  "showDuration": 500,
                  "rotationZ": 0,
                  "class": "PopupPanoramaOverlay",
                  "popupDistance": 100,
                  "popupMaxWidth": "95%",
                  "hfov": 8.46,
                  "hideEasing": "cubic_out",
                  "popupMaxHeight": "95%",
                  "id": "popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640",
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
                  "showEasing": "cubic_in",
                  "yaw": 34.98
                 },
                 {
                  "bleachingDistance": 0.4,
                  "yaw": 176.22,
                  "bleaching": 0.7,
                  "pitch": 22,
                  "class": "LensFlarePanoramaOverlay",
                  "id": "overlay_DD02669A_D1CD_DDEE_41D8_64A9082D45DA"
                 }
                ],
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
                }
               }
              ],
              "hfovMin": 60,
              "hfovMax": 130,
              "partial": false,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
                "yaw": 44.4,
                "distance": 1,
                "backwardYaw": -18.6
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
                "yaw": -35.53,
                "distance": 1,
                "backwardYaw": 43.33
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_t.jpg",
                 "id": "panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
                 "hfov": 360,
                 "class": "Panorama",
                 "label": "Long Beach",
                 "pitch": 0,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_B683EE32_B8A1_4391_41D8_F928442156FD_t.jpg",
                   "overlays": [
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.showPopupPanoramaOverlay(this.popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#0066CC'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#FFFFFF','pressedBackgroundColorRatios':[0],'rollOverBackgroundColor':['#0066CC'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':50,'backgroundColor':['#0066CC'],'iconColor':'#FFFFFF'}, this.ImageResource_86C7CA9F_952C_B331_41D3_38C5166BA311, null, null, null, null, false)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -17.88,
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
                       "pitch": -39.42,
                       "hfov": 6.79
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
                       "hfov": 6.79,
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
                       "pitch": -39.42,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -17.88
                      }
                     ],
                     "id": "overlay_B683CE32_B8A1_4391_41DB_9AD9A5E7634E",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.showPopupPanoramaOverlay(this.popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#0066CC'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#FFFFFF','pressedBackgroundColorRatios':[0],'rollOverBackgroundColor':['#0066CC'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':50,'backgroundColor':['#0066CC'],'iconColor':'#FFFFFF'}, this.ImageResource_00E2A34F_0DE6_179A_4190_3A74D6498631, null, null, null, null, false)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -29.12,
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
                       "pitch": -11.35,
                       "hfov": 8.62
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
                       "hfov": 8.62,
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
                       "pitch": -11.35,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -29.12
                      }
                     ],
                     "id": "overlay_B6839E33_B8A1_4397_4199_EF3385370003",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA, this.camera_DEF2B839_D1CC_552A_41B6_697ABACAE75C); this.mainPlayList.set('selectedIndex', 3)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 63.25,
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
                       "pitch": -8.87,
                       "hfov": 6.51
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
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
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 63.25
                      }
                     ],
                     "id": "overlay_B6837E33_B8A1_4397_41E1_D983E27C3612",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_DEFC1829_D1CC_552A_41E0_FCC072F0FAB6); this.mainPlayList.set('selectedIndex', 7)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 22,
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
                       "pitch": 0.71,
                       "hfov": 6.59
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
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
                       "pitch": 0.71,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 22
                      }
                     ],
                     "id": "overlay_B6836E33_B8A1_4397_41E5_DAA6A17B9020",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE, this.camera_DE833845_D1CC_555A_41BC_237911292800); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -32.6,
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
                       "pitch": 1.04,
                       "hfov": 6.59
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
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
                       "pitch": 1.04,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -32.6
                      }
                     ],
                     "id": "overlay_B6834E33_B8A1_4397_41AD_DCA0D4307539",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "rotationY": 0,
                     "hideDuration": 500,
                     "rotationX": 0,
                     "showDuration": 500,
                     "rotationZ": 0,
                     "class": "PopupPanoramaOverlay",
                     "popupDistance": 100,
                     "popupMaxWidth": "95%",
                     "hfov": 6.79,
                     "hideEasing": "cubic_out",
                     "popupMaxHeight": "95%",
                     "id": "popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D",
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
                     "pitch": -39.42,
                     "showEasing": "cubic_in",
                     "yaw": -17.88
                    },
                    {
                     "rotationY": 0,
                     "hideDuration": 500,
                     "rotationX": 0,
                     "showDuration": 500,
                     "rotationZ": 0,
                     "class": "PopupPanoramaOverlay",
                     "popupDistance": 100,
                     "popupMaxWidth": "95%",
                     "hfov": 8.62,
                     "hideEasing": "cubic_out",
                     "popupMaxHeight": "95%",
                     "id": "popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7",
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
                     "pitch": -11.35,
                     "showEasing": "cubic_in",
                     "yaw": -29.12
                    },
                    {
                     "bleachingDistance": 0.4,
                     "yaw": -146.38,
                     "bleaching": 0.7,
                     "pitch": 15.96,
                     "class": "LensFlarePanoramaOverlay",
                     "id": "overlay_DD1F39FB_D1CD_B72E_41E8_AEA121CAC2EA"
                    }
                   ],
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
                   }
                  }
                 ],
                 "hfovMin": 60,
                 "hfovMax": 130,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
                   "yaw": 22,
                   "distance": 1,
                   "backwardYaw": -63.81
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_t.jpg",
                    "id": "panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
                    "hfov": 360,
                    "class": "Panorama",
                    "label": "Little Bay",
                    "pitch": 0,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_t.jpg",
                      "overlays": [
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.showPopupPanoramaOverlay(this.popup_9B1340F2_94EC_B0F3_41B2_C60EF3D9A93C, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#0066CC'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#FFFFFF','pressedBackgroundColorRatios':[0],'rollOverBackgroundColor':['#0066CC'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':50,'backgroundColor':['#0066CC'],'iconColor':'#FFFFFF'}, this.ImageResource_86B81A9F_952C_B331_41D8_1720B1DE5760, null, null, null, null, false)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -34.74,
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
                          "pitch": -56.62,
                          "hfov": 4.84
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "hfov": 4.84,
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
                          "pitch": -56.62,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -34.74
                         }
                        ],
                        "id": "overlay_B5CA32DD_B8A2_C093_41CE_8B8962ED84E6",
                        "rollOverDisplay": false,
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD, this.camera_DFD926A0_D1CC_5DDA_41DC_DCDD04643B2F); this.mainPlayList.set('selectedIndex', 4)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -43.6,
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
                          "pitch": -13.61,
                          "hfov": 6.41
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "hfov": 6.41,
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
                          "pitch": -13.61,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -43.6
                         }
                        ],
                        "id": "overlay_B5CA52DD_B8A2_C093_41C1_32FB4D1CA5C0",
                        "rollOverDisplay": false,
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_DC333688_D1CC_5DEA_41E6_2380E4676BE6); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 2.14,
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
                          "pitch": -0.34,
                          "hfov": 6.59
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "hfov": 6.59,
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
                          "pitch": -0.34,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 2.14
                         }
                        ],
                        "id": "overlay_B5CA62DD_B8A2_C093_419E_5DCE32C6A3DE",
                        "rollOverDisplay": false,
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368, this.camera_DFC40694_D1CC_5DFA_41D5_DDA2C1DF5D24); this.mainPlayList.set('selectedIndex', 2)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 52.88,
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
                          "pitch": -18.59,
                          "hfov": 6.25
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "hfov": 6.25,
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
                          "pitch": -18.59,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 52.88
                         }
                        ],
                        "id": "overlay_B5CA92DD_B8A2_C093_41DB_2A427CFC3F65",
                        "rollOverDisplay": false,
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "rotationY": 0,
                        "hideDuration": 500,
                        "rotationX": 0,
                        "showDuration": 500,
                        "rotationZ": 0,
                        "class": "PopupPanoramaOverlay",
                        "popupDistance": 100,
                        "popupMaxWidth": "95%",
                        "hfov": 4.84,
                        "hideEasing": "cubic_out",
                        "popupMaxHeight": "95%",
                        "id": "popup_9B1340F2_94EC_B0F3_41B2_C60EF3D9A93C",
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
                        "pitch": -56.62,
                        "showEasing": "cubic_in",
                        "yaw": -34.74
                       },
                       {
                        "bleachingDistance": 0.4,
                        "yaw": -89.72,
                        "bleaching": 0.7,
                        "pitch": 18.98,
                        "class": "LensFlarePanoramaOverlay",
                        "id": "overlay_DD002C0A_D1CC_4CEE_41E9_7F8D250105A2"
                       }
                      ],
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
                      }
                     }
                    ],
                    "hfovMin": 60,
                    "hfovMax": 130,
                    "partial": false,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
                      "yaw": 2.14,
                      "distance": 1,
                      "backwardYaw": -148.22
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "vfov": 180,
                       "thumbnailUrl": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_t.jpg",
                       "id": "panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
                       "hfov": 360,
                       "class": "Panorama",
                       "label": "North Bay",
                       "pitch": 0,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_t.jpg",
                         "overlays": [
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.showPopupPanoramaOverlay(this.popup_9A426626_94E4_7312_41DB_0F6235998161, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#0066CC'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#FFFFFF','pressedBackgroundColorRatios':[0],'rollOverBackgroundColor':['#0066CC'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':50,'backgroundColor':['#0066CC'],'iconColor':'#FFFFFF'}, this.ImageResource_86B91A9F_952C_B331_41D5_14F31A9DC9C5, null, null, null, null, false)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -3.63,
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
                             "pitch": -9.87,
                             "hfov": 8.66
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "hfov": 8.66,
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
                             "pitch": -9.87,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -3.63
                            }
                           ],
                           "id": "overlay_B6C31A07_B8A3_437F_419A_9C49F5CB0636",
                           "rollOverDisplay": false,
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8, this.camera_DF3527CA_D1CC_5B6E_41E2_74A1CCA6C666); this.mainPlayList.set('selectedIndex', 7)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -40.65,
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
                             "pitch": 7.39,
                             "hfov": 6.54
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "hfov": 6.54,
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
                             "pitch": 7.39,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -40.65
                            }
                           ],
                           "id": "overlay_B6C0DA08_B8A3_4371_41E1_E87BCFFAD2AC",
                           "rollOverDisplay": false,
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA, this.camera_DEDEB7FA_D1CC_5B2E_419D_3A6E676CCBBE); this.mainPlayList.set('selectedIndex', 3)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -87.14,
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
                             "pitch": 6.63,
                             "hfov": 6.55
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "hfov": 6.55,
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
                             "pitch": 6.63,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -87.14
                            }
                           ],
                           "id": "overlay_B6C0FA08_B8A3_4371_41CC_1C8DEF596AB1",
                           "rollOverDisplay": false,
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A, this.camera_DEC8E7E2_D1CC_5B5E_41C2_443D37A7A6BD); this.mainPlayList.set('selectedIndex', 0)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 98.93,
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
                             "pitch": 3.75,
                             "hfov": 6.58
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "hfov": 6.58,
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
                             "pitch": 3.75,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 98.93
                            }
                           ],
                           "id": "overlay_B6C08A08_B8A3_4371_41E0_67D8D8B8D894",
                           "rollOverDisplay": false,
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD, this.camera_DEEFF812_D1CC_54FE_41BE_2AE919ED858D); this.mainPlayList.set('selectedIndex', 1)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 73.74,
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
                             "pitch": -12.97,
                             "hfov": 6.42
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "hfov": 6.42,
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
                             "pitch": -12.97,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 73.74
                            }
                           ],
                           "id": "overlay_B6C0BA08_B8A3_4371_41DB_65B8C8E99F80",
                           "rollOverDisplay": false,
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "rotationY": 0,
                           "hideDuration": 500,
                           "rotationX": 0,
                           "showDuration": 500,
                           "rotationZ": 0,
                           "class": "PopupPanoramaOverlay",
                           "popupDistance": 100,
                           "popupMaxWidth": "95%",
                           "hfov": 8.66,
                           "hideEasing": "cubic_out",
                           "popupMaxHeight": "95%",
                           "id": "popup_9A426626_94E4_7312_41DB_0F6235998161",
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
                           "pitch": -9.87,
                           "showEasing": "cubic_in",
                           "yaw": -3.63
                          },
                          {
                           "bleachingDistance": 0.4,
                           "yaw": -71.96,
                           "bleaching": 0.7,
                           "pitch": 17.47,
                           "class": "LensFlarePanoramaOverlay",
                           "id": "overlay_DD018C71_D1CC_4D3A_41BF_F82B8ECDF046"
                          }
                         ],
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
                         }
                        }
                       ],
                       "hfovMin": 60,
                       "hfovMax": 130,
                       "partial": false,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
                         "yaw": -40.65,
                         "distance": 1,
                         "backwardYaw": 154.73
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
                         "yaw": 98.93,
                         "distance": 1,
                         "backwardYaw": -32.6
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
                         "yaw": -87.14,
                         "distance": 1,
                         "backwardYaw": 52.88
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "vfov": 180,
                          "thumbnailUrl": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_t.jpg",
                          "id": "panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
                          "hfov": 360,
                          "class": "Panorama",
                          "label": "Aquarium",
                          "pitch": 0,
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_t.jpg",
                            "overlays": [
                             {
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.showPopupPanoramaOverlay(this.popup_9A5F8A98_94C9_21D4_41E2_20B574E1A54C, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#0066CC'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#FFFFFF','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#FFFFFF','pressedBackgroundColorRatios':[0],'rollOverBackgroundColor':['#0066CC'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#FFFFFF','rollOverBackgroundColorRatios':[0],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':50,'backgroundColor':['#0066CC'],'iconColor':'#FFFFFF'}, this.ImageResource_9847583E_94DC_7F72_41C5_2EB4E1027395, null, null, null, null, false)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -18.4,
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
                                "pitch": 0.57,
                                "hfov": 8.79
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
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
                                "pitch": 0.57,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -18.4
                               }
                              ],
                              "id": "overlay_B7B8AE83_B8A2_C377_41D9_365839E92BE3",
                              "rollOverDisplay": false,
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A, this.camera_DFE276B8_D1CC_5D2A_41E7_FE4287A3C472); this.mainPlayList.set('selectedIndex', 0)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 93.07,
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
                                "pitch": 5.2,
                                "hfov": 6.56
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "hfov": 6.56,
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
                                "pitch": 5.2,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 93.07
                               }
                              ],
                              "id": "overlay_B7B8CE83_B8A2_C377_41AD_576401C06BB0",
                              "rollOverDisplay": false,
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368, this.camera_DFEC66AC_D1CC_5D2A_41E2_91D2C320CB60); this.mainPlayList.set('selectedIndex', 2)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -140.09,
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
                                "pitch": 1.3,
                                "hfov": 6.59
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "hfov": 6.59,
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
                                "pitch": 1.3,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -140.09
                               }
                              ],
                              "id": "overlay_B7B8FE83_B8A2_C377_41D9_43D4D856B302",
                              "rollOverDisplay": false,
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "rotationY": 0,
                              "hideDuration": 500,
                              "rotationX": 0,
                              "showDuration": 500,
                              "rotationZ": 0,
                              "class": "PopupPanoramaOverlay",
                              "popupDistance": 100,
                              "popupMaxWidth": "95%",
                              "hfov": 8.79,
                              "hideEasing": "cubic_out",
                              "popupMaxHeight": "95%",
                              "id": "popup_9A5F8A98_94C9_21D4_41E2_20B574E1A54C",
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
                              "pitch": 0.57,
                              "showEasing": "cubic_in",
                              "yaw": -18.4
                             },
                             {
                              "bleachingDistance": 0.4,
                              "yaw": -121.45,
                              "bleaching": 0.7,
                              "pitch": 14.83,
                              "class": "LensFlarePanoramaOverlay",
                              "id": "overlay_DD1A952A_D1CC_7F2E_41E2_F647D913B1EA"
                             }
                            ],
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
                            }
                           }
                          ],
                          "hfovMin": 60,
                          "hfovMax": 130,
                          "partial": false,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
                            "yaw": -140.09,
                            "distance": 1,
                            "backwardYaw": 73.74
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
                            "yaw": 93.07,
                            "distance": 1,
                            "backwardYaw": -3.72
                           }
                          ]
                         },
                         "yaw": 73.74,
                         "distance": 1,
                         "backwardYaw": -140.09
                        }
                       ]
                      },
                      "yaw": 52.88,
                      "distance": 1,
                      "backwardYaw": -87.14
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
                      "yaw": -43.6,
                      "distance": 1,
                      "backwardYaw": 63.25
                     }
                    ]
                   },
                   "yaw": 63.25,
                   "distance": 1,
                   "backwardYaw": -43.6
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
                   "yaw": -32.6,
                   "distance": 1,
                   "backwardYaw": 114.83
                  }
                 ]
                },
                "yaw": 114.83,
                "distance": 1,
                "backwardYaw": -32.6
               }
              ]
             },
             "yaw": 43.33,
             "distance": 1,
             "backwardYaw": -35.53
            }
           ]
          },
          "yaw": 30.74,
          "distance": 1,
          "backwardYaw": -11.27
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
          "yaw": -148.22,
          "distance": 1,
          "backwardYaw": 2.14
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
          "yaw": -18.6,
          "distance": 1,
          "backwardYaw": 44.4
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
          "yaw": 131.6,
          "distance": 1,
          "backwardYaw": -4.95
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
          "yaw": 154.73,
          "distance": 1,
          "backwardYaw": -40.65
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
          "yaw": -63.81,
          "distance": 1,
          "backwardYaw": 22
         }
        ]
       },
       "yaw": -4.95,
       "distance": 1,
       "backwardYaw": 131.6
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
       "yaw": 28.32,
       "distance": 1,
       "backwardYaw": -42.73
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
       "yaw": -32.6,
       "distance": 1,
       "backwardYaw": 98.93
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
       "yaw": -3.72,
       "distance": 1,
       "backwardYaw": 93.07
      }
     ]
    },
    "class": "PanoramaPlayListItem",
    "player": {
     "gyroscopeVerticalDraggingEnabled": true,
     "buttonCardboardView": {
      "visible": false,
      "paddingLeft": 0,
      "maxWidth": 58,
      "class": "IconButton",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "maxHeight": 58,
      "width": 58,
      "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
      "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "minHeight": 1,
      "propagateClick": true,
      "mode": "push",
      "height": 58,
      "minWidth": 1,
      "transparencyActive": true,
      "paddingTop": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
      "cursor": "hand",
      "data": {
       "name": "IconButton VR"
      }
     },
     "mouseControlMode": "drag_acceleration",
     "touchControlMode": "drag_rotation",
     "buttonToggleGyroscope": {
      "paddingLeft": 0,
      "maxWidth": 58,
      "class": "IconButton",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "maxHeight": 58,
      "width": 58,
      "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "minHeight": 1,
      "propagateClick": true,
      "mode": "toggle",
      "height": 58,
      "minWidth": 1,
      "transparencyActive": true,
      "paddingTop": 0,
      "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
      "borderRadius": 0,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
      "cursor": "hand",
      "data": {
       "name": "IconButton GYRO"
      }
     },
     "class": "PanoramaPlayer",
     "viewerArea": "this.MainViewer",
     "id": "MainViewerPanoramaPlayer",
     "buttonToggleHotspots": {
      "paddingLeft": 0,
      "maxWidth": 58,
      "class": "IconButton",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "maxHeight": 58,
      "width": 58,
      "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "minHeight": 1,
      "propagateClick": true,
      "mode": "toggle",
      "height": 58,
      "minWidth": 1,
      "transparencyActive": true,
      "paddingTop": 0,
      "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
      "borderRadius": 0,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
      "cursor": "hand",
      "data": {
       "name": "IconButton HS "
      }
     },
     "displayPlaybackBar": true
    },
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "id": "panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_camera"
    }
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
    "media": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "id": "panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_camera"
    }
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
    "media": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "id": "panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_camera"
    }
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
    "media": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "id": "panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_camera"
    }
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
    "media": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "id": "panorama_B683EE32_B8A1_4391_41D8_F928442156FD_camera"
    }
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
    "media": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "id": "panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_camera"
    }
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
    "media": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "id": "panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_camera"
    }
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 0)",
    "media": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "id": "panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_camera"
    }
   }
  ],
  "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "media": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_camera"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 175.05,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DF5FC71E_D1CC_5CE6_41DD_B4DBC7F6373A"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 168.73,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DFAA06E7_D1CC_5D26_41D4_085D9FE5D4E9"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -135.6,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DF491700_D1CC_5CDA_41CC_7917F29FA398"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -106.26,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DFEC66AC_D1CC_5D2A_41E2_91D2C320CB60"
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_86B91A9F_952C_B331_41D5_14F31A9DC9C5",
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
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 139.35,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DF6C4736_D1CC_5B27_41E5_15B2C8AF288E"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -25.27,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DF3527CA_D1CC_5B6E_41E2_74A1CCA6C666"
 },
 "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A",
 {
  "class": "ImageResource",
  "id": "ImageResource_984F4838_94DC_7F7F_41C5_A901FA0A44A2",
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
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -151.68,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DC24966F_D1CC_5D26_41B3_EAAD445971A1"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.86,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DFB8B6F4_D1CC_5D3A_41E3_E1643C86CFFB"
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_00E2A34F_0DE6_179A_4190_3A74D6498631",
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
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.4,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DFF006C3_D1CC_5D5E_41D2_C58A8AA6B458"
 },
 "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD",
 "this.popup_1C69E4DF_0DD4_0BDD_41A8_AF09B33452A3",
 "this.popup_1F3DB53D_0DEC_0A62_41A3_4CF1D0FF55A7",
 {
  "class": "ImageResource",
  "id": "ImageResource_00E0C34F_0DE6_179A_41A3_4FE116A624F6",
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
  ]
 },
 "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE_camera",
 "this.popup_9A426626_94E4_7312_41DB_0F6235998161",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 147.4,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DEC8E7E2_D1CC_5B5E_41C2_443D37A7A6BD"
 },
 "this.panorama_B584FB49_B8A1_41F3_41E4_8245CB8A9B8A_camera",
 "this.MainViewerPanoramaPlayer",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -86.93,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DF2487B2_D1CC_5B3E_41E7_327D63CE69D2"
 },
 "this.panorama_B6061D08_B8A1_4171_41D3_C04F0AF5FDCE",
 "this.popup_9B1340F2_94EC_B0F3_41B2_C60EF3D9A93C",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -81.07,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DF16179A_D1CC_5BEE_41DD_AFF5241DA51C"
 },
 "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA_camera",
 {
  "class": "ImageResource",
  "id": "ImageResource_86B81A9F_952C_B331_41D8_1720B1DE5760",
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
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.86,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DFC40694_D1CC_5DFA_41D5_DDA2C1DF5D24"
 },
 "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD_camera",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -48.4,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DF736768_D1CC_5B2A_41D6_605A7221BF1C"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 39.91,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DEEFF812_D1CC_54FE_41BE_2AE919ED858D"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 137.27,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DF019781_D1CC_5BDD_41E1_4901FC51DDD5"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -127.12,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DEDEB7FA_D1CC_5B2E_419D_3A6E676CCBBE"
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_00E1834F_0DE6_179A_418D_7C59A643B09E",
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
  ]
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": {
     "fieldOfViewOverlayOutsideOpacity": 0,
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "class": "Map",
     "thumbnailUrl": "media/map_8407EF4E_90ED_E412_4180_9413E8B12AF8_t.jpg",
     "id": "map_8407EF4E_90ED_E412_4180_9413E8B12AF8",
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "label": "master-plan",
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideColor": "#000000",
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
     "fieldOfViewOverlayRadiusScale": 0.3,
     "width": 2000,
     "initialZoomFactor": 1,
     "minimumZoomFactor": 0.5,
     "height": 1352
    },
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": {
     "class": "MapPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "left": 0,
      "toolTipPaddingTop": 4,
      "playbackBarHeight": 10,
      "id": "MapViewer",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadShadowVerticalLength": 0,
      "progressLeft": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "width": "100%",
      "playbackBarHeadWidth": 6,
      "toolTipDisplayTime": 600,
      "progressBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "minHeight": 1,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressBorderRadius": 0,
      "progressBackgroundColorRatios": [
       0.01
      ],
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarProgressOpacity": 1,
      "playbackBarRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "minWidth": 1,
      "toolTipShadowSpread": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarBorderSize": 0,
      "height": "100%",
      "toolTipFontSize": 12,
      "playbackBarBackgroundOpacity": 1,
      "toolTipBorderRadius": 3,
      "progressBarBorderSize": 0,
      "playbackBarLeft": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "toolTipBorderColor": "#767676",
      "toolTipShadowOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowBlurRadius": 3,
      "paddingRight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBorderRadius": 0,
      "progressBottom": 2,
      "playbackBarHeadHeight": 15,
      "paddingLeft": 0,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarProgressBorderSize": 0,
      "class": "ViewerArea",
      "playbackBarHeadShadowColor": "#000000",
      "progressHeight": 10,
      "progressBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "transitionDuration": 500,
      "progressBarBackgroundColorDirection": "vertical",
      "progressOpacity": 1,
      "shadow": false,
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#FFFFFF",
      "borderSize": 0,
      "progressBarBorderRadius": 0,
      "progressBarBorderColor": "#0066FF",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipFontFamily": "Arial",
      "top": 0,
      "propagateClick": false,
      "rollOver": "this.setMediaBehaviour(this.playList_DC62A627_D1CC_5D26_41E6_1CB1BDD03BA5, 0)",
      "playbackBarHeadShadow": true,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "displayTooltipInTouchScreens": true,
      "playbackBarHeadOpacity": 1,
      "playbackBarProgressBorderColor": "#000000",
      "transitionMode": "blending",
      "toolTipFontColor": "#606060",
      "data": {
       "name": "Floor Plan"
      },
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipPaddingRight": 6
     },
     "id": "MapViewerMapPlayer",
     "movementMode": "constrained"
    }
   }
  ],
  "id": "playList_DC62A627_D1CC_5D26_41E6_1CB1BDD03BA5"
 },
 "this.popup_9A5F8A98_94C9_21D4_41E2_20B574E1A54C",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -65.17,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DE833845_D1CC_555A_41BC_237911292800"
 },
 "this.panorama_B5CA12DD_B8A2_C093_41B6_3CFAC81323CA",
 "this.popup_1C616E6E_0DD4_16FF_41A1_2696EDFEC640",
 "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248",
 "this.MapViewerMapPlayer",
 "this.panorama_B6282358_B8A3_4190_41C7_2B4BFF974248_camera",
 "this.panorama_B7B86E83_B8A2_C377_41E1_C905975BC1AD_camera",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 31.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DC333688_D1CC_5DEA_41E6_2380E4676BE6"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -136.67,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DF86E6CF_D1CC_5D66_41D5_3E12645A18A2"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -116.75,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DFD926A0_D1CC_5DDA_41DC_DCDD04643B2F"
 },
 "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368",
 "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8_camera",
 "this.popup_84D5AAE3_94EF_B311_41E2_8AD47D9C653D",
 "this.popup_9BFD5A81_94C7_21B4_4179_595DFDD5D662",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 116.19,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DEFC1829_D1CC_552A_41E0_FCC072F0FAB6"
 },
 "this.panorama_B683EE32_B8A1_4391_41D8_F928442156FD",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -149.26,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DC131662_D1CC_5D5E_41E5_7A0D4DD6FFE9"
 },
 "this.panorama_B6C36A07_B8A3_437F_41E2_951D3787C368_camera",
 {
  "class": "ImageResource",
  "id": "ImageResource_86C2EAA4_952C_B317_41E0_D1F4952F4164",
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
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.28,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DFE276B8_D1CC_5D2A_41E7_FE4287A3C472"
 },
 "this.map_8407EF4E_90ED_E412_4180_9413E8B12AF8",
 "this.popup_846D32DD_94EF_9331_41C4_9360FA56FF36",
 {
  "class": "ImageResource",
  "id": "ImageResource_86C0BAA4_952C_B317_41D5_ED7EBC4E8F95",
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
  ]
 },
 "this.popup_9B12EA1A_94E4_F332_41D9_ACFB48B2D582",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 136.4,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DEF2B839_D1CC_552A_41B6_697ABACAE75C"
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_00E1334F_0DE6_179A_4187_C542509C3B77",
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
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 147.4,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DF95F6DC_D1CC_5D6A_41E1_3CA3301DFB98"
 },
 "this.panorama_B7ED9B02_B8A3_4171_41DD_592294C4FAF8",
 "this.popup_1FFB4FC3_0DEC_1626_41A8_D00A5048E282",
 {
  "class": "ImageResource",
  "id": "ImageResource_86C5FA9F_952C_B331_41D0_AE789F4CE5A5",
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
  ]
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_9847583E_94DC_7F72_41C5_2EB4E1027395",
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
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -158,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DF62974F_D1CC_5B66_41D8_548BD5D495B5"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 144.47,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_DC3E967C_D1CC_5D2A_41C8_86C46D34AF10"
 },
 "this.popup_84A25397_94EC_7131_41E2_3DC776E3E17A"
], "children": [
 {
  "paddingBottom": 0,
  "left": 0,
  "toolTipPaddingTop": 7,
  "playbackBarHeight": 10,
  "id": "MainViewer",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontWeight": "normal",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderSize": 1,
  "width": "100%",
  "progressLeft": 0,
  "toolTipDisplayTime": 600,
  "progressBorderSize": 0,
  "toolTipPaddingLeft": 10,
  "minHeight": 50,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderRadius": 0,
  "progressBackgroundColorRatios": [
   0.01
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressOpacity": 1,
  "playbackBarRight": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "minWidth": 100,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#000000",
  "playbackBarBorderSize": 0,
  "height": "100%",
  "toolTipFontSize": 13,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "progressBarBorderSize": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "toolTipShadowOpacity": 0,
  "borderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "paddingRight": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBorderRadius": 0,
  "progressBottom": 0,
  "playbackBarHeadHeight": 15,
  "paddingLeft": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 10,
  "progressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "playbackBarBottom": 5,
  "toolTipFontStyle": "normal",
  "transitionDuration": 500,
  "progressBarBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "shadow": false,
  "toolTipOpacity": 0.5,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#FFFFFF",
  "borderSize": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderColor": "#0066FF",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontFamily": "Georgia",
  "top": 0,
  "propagateClick": true,
  "playbackBarHeadShadow": true,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarBorderRadius": 0,
  "toolTipPaddingBottom": 7,
  "paddingTop": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "displayTooltipInTouchScreens": true,
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "transitionMode": "blending",
  "toolTipFontColor": "#FFFFFF",
  "data": {
   "name": "Main Viewer"
  },
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipPaddingRight": 10
 },
 {
  "paddingLeft": 0,
  "class": "Container",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "left": "0%",
  "width": 300,
  "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "children": [
   {
    "visible": false,
    "paddingLeft": 0,
    "class": "Container",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "left": "0%",
    "width": 66,
    "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
    "children": [
     {
      "paddingLeft": 0,
      "backgroundColorDirection": "vertical",
      "class": "Container",
      "backgroundOpacity": 0.4,
      "paddingBottom": 0,
      "left": "0%",
      "width": 36,
      "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
      "horizontalAlign": "left",
      "shadow": false,
      "verticalAlign": "top",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "minHeight": 1,
      "layout": "absolute",
      "top": "0%",
      "propagateClick": true,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "backgroundColor": [
       "#000000"
      ],
      "minWidth": 1,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "backgroundColorRatios": [
       0
      ],
      "height": "100%",
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "gap": 10,
      "borderRadius": 0,
      "paddingRight": 0,
      "contentOpaque": false,
      "data": {
       "name": "Container black"
      }
     },
     {
      "paddingLeft": 0,
      "maxWidth": 80,
      "class": "IconButton",
      "paddingBottom": 0,
      "left": 10,
      "maxHeight": 80,
      "width": 50,
      "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
      "backgroundOpacity": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "40%",
      "propagateClick": true,
      "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
      "bottom": "40%",
      "mode": "push",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
      "transparencyActive": true,
      "paddingTop": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
      "cursor": "hand",
      "data": {
       "name": "IconButton arrow"
      }
     }
    ],
    "shadow": false,
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "layout": "absolute",
    "minHeight": 1,
    "horizontalAlign": "left",
    "top": "0%",
    "propagateClick": true,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "height": "100%",
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "creationPolicy": "inAdvance",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "gap": 10,
    "borderRadius": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "data": {
     "name": "- COLLAPSE"
    }
   },
   {
    "paddingLeft": 40,
    "backgroundColorDirection": "vertical",
    "class": "Container",
    "backgroundOpacity": 0.7,
    "paddingBottom": 40,
    "horizontalAlign": "left",
    "width": 300,
    "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
    "right": "0%",
    "children": [
     {
      "paddingLeft": 0,
      "maxWidth": 1095,
      "class": "Image",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "left": "0%",
      "maxHeight": 1095,
      "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
      "horizontalAlign": "left",
      "verticalAlign": "top",
      "shadow": false,
      "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
      "width": "100%",
      "borderSize": 0,
      "minHeight": 30,
      "top": "0%",
      "propagateClick": true,
      "height": "25%",
      "minWidth": 40,
      "paddingTop": 0,
      "borderRadius": 0,
      "scaleMode": "fit_inside",
      "paddingRight": 0,
      "data": {
       "name": "Image Company"
      }
     },
     {
      "paddingLeft": 0,
      "class": "Container",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "left",
      "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "backgroundColorDirection": "vertical",
        "class": "Container",
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
        "verticalAlign": "top",
        "shadow": false,
        "width": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "layout": "absolute",
        "minHeight": 1,
        "propagateClick": true,
        "scrollBarMargin": 2,
        "height": 1,
        "overflow": "scroll",
        "minWidth": 1,
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "gap": 10,
        "borderRadius": 0,
        "paddingRight": 0,
        "contentOpaque": false,
        "data": {
         "name": "line"
        }
       },
       {
        "paddingLeft": 10,
        "backgroundColorDirection": "vertical",
        "data": {
         "name": "Button Tour Info"
        },
        "class": "Button",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "shadowSpread": 1,
        "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
        "fontFamily": "Oswald",
        "verticalAlign": "middle",
        "iconBeforeLabel": true,
        "shadow": false,
        "iconHeight": 32,
        "width": "100%",
        "rollOverBackgroundOpacity": 0.8,
        "borderSize": 0,
        "pressedBackgroundOpacity": 1,
        "layout": "horizontal",
        "minHeight": 1,
        "fontWeight": "normal",
        "propagateClick": true,
        "shadowColor": "#000000",
        "fontColor": "#FFFFFF",
        "mode": "push",
        "height": 50,
        "minWidth": 1,
        "borderColor": "#000000",
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "label": "Tour Information",
        "fontStyle": "italic",
        "fontSize": 18,
        "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
        "gap": 5,
        "borderRadius": 0,
        "paddingRight": 0,
        "textDecoration": "none",
        "cursor": "hand",
        "iconWidth": 32,
        "shadowBlurRadius": 6,
        "rollOverBackgroundColorRatios": [
         0
        ]
       },
       {
        "paddingLeft": 0,
        "backgroundColorDirection": "vertical",
        "class": "Container",
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
        "verticalAlign": "top",
        "shadow": false,
        "width": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "layout": "absolute",
        "minHeight": 1,
        "propagateClick": true,
        "scrollBarMargin": 2,
        "height": 1,
        "overflow": "scroll",
        "minWidth": 1,
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "gap": 10,
        "borderRadius": 0,
        "paddingRight": 0,
        "contentOpaque": false,
        "data": {
         "name": "line"
        }
       },
       {
        "paddingLeft": 10,
        "backgroundColorDirection": "vertical",
        "data": {
         "name": "Button Panorama List"
        },
        "class": "Button",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "shadowSpread": 1,
        "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
        "fontFamily": "Oswald",
        "verticalAlign": "middle",
        "iconBeforeLabel": true,
        "shadow": false,
        "iconHeight": 32,
        "width": "100%",
        "rollOverBackgroundOpacity": 0.8,
        "borderSize": 0,
        "pressedBackgroundOpacity": 1,
        "layout": "horizontal",
        "minHeight": 1,
        "fontWeight": "normal",
        "propagateClick": true,
        "shadowColor": "#000000",
        "fontColor": "#FFFFFF",
        "mode": "push",
        "height": 50,
        "minWidth": 1,
        "borderColor": "#000000",
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "label": "Tour Locations",
        "fontStyle": "italic",
        "fontSize": 18,
        "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
        "gap": 23,
        "borderRadius": 0,
        "paddingRight": 0,
        "textDecoration": "none",
        "cursor": "hand",
        "iconWidth": 32,
        "shadowBlurRadius": 6,
        "rollOverBackgroundColorRatios": [
         0
        ]
       },
       {
        "paddingLeft": 0,
        "backgroundColorDirection": "vertical",
        "class": "Container",
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
        "verticalAlign": "top",
        "shadow": false,
        "width": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "layout": "absolute",
        "minHeight": 1,
        "propagateClick": true,
        "scrollBarMargin": 2,
        "height": 1,
        "overflow": "scroll",
        "minWidth": 1,
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "gap": 10,
        "borderRadius": 0,
        "paddingRight": 0,
        "contentOpaque": false,
        "data": {
         "name": "line"
        }
       },
       {
        "paddingLeft": 10,
        "backgroundColorDirection": "vertical",
        "data": {
         "name": "Button Location"
        },
        "class": "Button",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "shadowSpread": 1,
        "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
        "fontFamily": "Oswald",
        "verticalAlign": "middle",
        "iconBeforeLabel": true,
        "shadow": false,
        "iconHeight": 32,
        "width": "100%",
        "rollOverBackgroundOpacity": 0.8,
        "borderSize": 0,
        "pressedBackgroundOpacity": 1,
        "layout": "horizontal",
        "minHeight": 1,
        "fontWeight": "normal",
        "propagateClick": true,
        "shadowColor": "#000000",
        "fontColor": "#FFFFFF",
        "mode": "push",
        "height": 50,
        "minWidth": 1,
        "borderColor": "#000000",
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "label": "Site Location",
        "fontStyle": "italic",
        "fontSize": 18,
        "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
        "gap": 5,
        "borderRadius": 0,
        "paddingRight": 0,
        "textDecoration": "none",
        "pressedLabel": "Location",
        "cursor": "hand",
        "iconWidth": 32,
        "shadowBlurRadius": 6,
        "rollOverBackgroundColorRatios": [
         0
        ]
       },
       {
        "paddingLeft": 0,
        "backgroundColorDirection": "vertical",
        "class": "Container",
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
        "verticalAlign": "top",
        "shadow": false,
        "width": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "layout": "absolute",
        "minHeight": 1,
        "propagateClick": true,
        "scrollBarMargin": 2,
        "height": 1,
        "overflow": "scroll",
        "minWidth": 1,
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "gap": 10,
        "borderRadius": 0,
        "paddingRight": 0,
        "contentOpaque": false,
        "data": {
         "name": "line"
        }
       },
       {
        "paddingLeft": 10,
        "backgroundColorDirection": "vertical",
        "data": {
         "name": "Button Floorplan"
        },
        "class": "Button",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "shadowSpread": 1,
        "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
        "fontFamily": "Oswald",
        "verticalAlign": "middle",
        "iconBeforeLabel": true,
        "shadow": false,
        "iconHeight": 32,
        "width": "100%",
        "rollOverBackgroundOpacity": 0.8,
        "borderSize": 0,
        "pressedBackgroundOpacity": 1,
        "layout": "horizontal",
        "minHeight": 1,
        "fontWeight": "normal",
        "propagateClick": true,
        "shadowColor": "#000000",
        "fontColor": "#FFFFFF",
        "mode": "push",
        "height": 50,
        "minWidth": 1,
        "borderColor": "#000000",
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "label": "Master Plan",
        "fontStyle": "italic",
        "fontSize": 18,
        "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
        "gap": 5,
        "borderRadius": 0,
        "paddingRight": 0,
        "textDecoration": "none",
        "cursor": "hand",
        "iconWidth": 32,
        "shadowBlurRadius": 6,
        "rollOverBackgroundColorRatios": [
         0
        ]
       },
       {
        "paddingLeft": 0,
        "backgroundColorDirection": "vertical",
        "class": "Container",
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
        "verticalAlign": "top",
        "shadow": false,
        "width": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "layout": "absolute",
        "minHeight": 1,
        "propagateClick": true,
        "scrollBarMargin": 2,
        "height": 1,
        "overflow": "scroll",
        "minWidth": 1,
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "gap": 10,
        "borderRadius": 0,
        "paddingRight": 0,
        "contentOpaque": false,
        "data": {
         "name": "line"
        }
       },
       {
        "paddingLeft": 10,
        "backgroundColorDirection": "vertical",
        "data": {
         "name": "Button Photoalbum"
        },
        "class": "Button",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "shadowSpread": 1,
        "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
        "fontFamily": "Oswald",
        "verticalAlign": "middle",
        "iconBeforeLabel": true,
        "shadow": false,
        "iconHeight": 32,
        "width": "100%",
        "rollOverBackgroundOpacity": 0.8,
        "borderSize": 0,
        "pressedBackgroundOpacity": 1,
        "layout": "horizontal",
        "minHeight": 1,
        "fontWeight": "normal",
        "propagateClick": true,
        "shadowColor": "#000000",
        "fontColor": "#FFFFFF",
        "mode": "push",
        "height": 50,
        "minWidth": 1,
        "borderColor": "#000000",
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "rollOverBackgroundColor": [
         "#5CA1DE"
        ],
        "backgroundColor": [
         "#000000",
         "#000000"
        ],
        "label": "Overview Video",
        "fontStyle": "italic",
        "fontSize": 18,
        "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
        "gap": 5,
        "borderRadius": 0,
        "paddingRight": 0,
        "textDecoration": "none",
        "cursor": "hand",
        "iconWidth": 32,
        "shadowBlurRadius": 6,
        "rollOverBackgroundColorRatios": [
         0
        ]
       },
       {
        "paddingLeft": 0,
        "backgroundColorDirection": "vertical",
        "class": "Container",
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
        "verticalAlign": "top",
        "shadow": false,
        "width": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "layout": "absolute",
        "minHeight": 1,
        "propagateClick": true,
        "scrollBarMargin": 2,
        "height": 1,
        "overflow": "scroll",
        "minWidth": 1,
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "gap": 10,
        "borderRadius": 0,
        "paddingRight": 0,
        "contentOpaque": false,
        "data": {
         "name": "line"
        }
       },
       {
        "paddingLeft": 0,
        "backgroundColorDirection": "vertical",
        "class": "Container",
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
        "verticalAlign": "top",
        "shadow": false,
        "width": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "layout": "absolute",
        "minHeight": 1,
        "propagateClick": true,
        "scrollBarMargin": 2,
        "height": 1,
        "overflow": "scroll",
        "minWidth": 1,
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "gap": 10,
        "borderRadius": 0,
        "paddingRight": 0,
        "contentOpaque": false,
        "data": {
         "name": "line"
        }
       }
      ],
      "shadow": false,
      "right": "0%",
      "width": "100%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "layout": "vertical",
      "minHeight": 1,
      "top": "25%",
      "propagateClick": true,
      "scrollBarMargin": 2,
      "bottom": "25%",
      "minWidth": 1,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "overflow": "scroll",
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "gap": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "contentOpaque": false,
      "data": {
       "name": "-Container buttons"
      }
     },
     {
      "paddingLeft": 0,
      "class": "Container",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "left": "0%",
      "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
      "horizontalAlign": "left",
      "verticalAlign": "bottom",
      "children": [
       {
        "paddingLeft": 0,
        "backgroundColorDirection": "vertical",
        "class": "Container",
        "backgroundOpacity": 1,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "width": 40,
        "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
        "shadow": false,
        "verticalAlign": "top",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "layout": "horizontal",
        "minHeight": 1,
        "propagateClick": true,
        "scrollBarMargin": 2,
        "height": 2,
        "overflow": "visible",
        "minWidth": 1,
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "backgroundColorRatios": [
         0
        ],
        "backgroundColor": [
         "#5CA1DE"
        ],
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "gap": 10,
        "borderRadius": 0,
        "paddingRight": 0,
        "contentOpaque": false,
        "data": {
         "name": "blue line"
        }
       },
       {
        "paddingLeft": 0,
        "maxWidth": 80,
        "class": "IconButton",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "horizontalAlign": "center",
        "maxHeight": 80,
        "width": 42,
        "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
        "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
        "shadow": false,
        "verticalAlign": "middle",
        "borderSize": 0,
        "minHeight": 1,
        "propagateClick": true,
        "mode": "push",
        "height": 42,
        "minWidth": 1,
        "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
        "transparencyActive": true,
        "paddingTop": 0,
        "borderRadius": 0,
        "paddingRight": 0,
        "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
        "cursor": "hand",
        "data": {
         "name": "IconButton collapse"
        }
       }
      ],
      "shadow": false,
      "width": "100%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "layout": "vertical",
      "minHeight": 1,
      "propagateClick": true,
      "scrollBarMargin": 2,
      "bottom": "0%",
      "height": "10.687%",
      "minWidth": 1,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "overflow": "scroll",
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "gap": 10,
      "borderRadius": 0,
      "paddingRight": 0,
      "contentOpaque": false,
      "data": {
       "name": "-Container footer"
      }
     }
    ],
    "shadow": false,
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "minHeight": 1,
    "layout": "absolute",
    "top": "0%",
    "propagateClick": true,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "backgroundColor": [
     "#000000"
    ],
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "paddingTop": 40,
    "backgroundColorRatios": [
     0
    ],
    "height": "100%",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "gap": 10,
    "borderRadius": 0,
    "paddingRight": 40,
    "contentOpaque": false,
    "data": {
     "name": "- EXPANDED"
    }
   }
  ],
  "shadow": false,
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "layout": "absolute",
  "minHeight": 1,
  "horizontalAlign": "left",
  "top": "0%",
  "propagateClick": false,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "height": "100%",
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "gap": 10,
  "borderRadius": 0,
  "paddingRight": 0,
  "contentOpaque": false,
  "data": {
   "name": "--- LEFT PANEL"
  }
 },
 {
  "paddingLeft": 0,
  "class": "Container",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "horizontalAlign": "left",
  "width": 115.05,
  "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "right": "0%",
  "children": [
   {
    "paddingLeft": 0,
    "class": "Container",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "horizontalAlign": "center",
    "width": 110,
    "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
    "right": "0%",
    "children": [
     {
      "paddingLeft": 0,
      "maxWidth": 60,
      "class": "IconButton",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "maxHeight": 60,
      "width": 60,
      "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "minHeight": 1,
      "propagateClick": true,
      "mode": "toggle",
      "height": 60,
      "minWidth": 1,
      "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
      "transparencyActive": true,
      "paddingTop": 0,
      "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
      "borderRadius": 0,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
      "cursor": "hand",
      "data": {
       "name": "image button menu"
      }
     }
    ],
    "shadow": false,
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "layout": "horizontal",
    "minHeight": 1,
    "top": "0%",
    "propagateClick": true,
    "scrollBarMargin": 2,
    "overflow": "visible",
    "height": 110,
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "gap": 10,
    "borderRadius": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "data": {
     "name": "button menu sup"
    }
   },
   {
    "visible": false,
    "paddingLeft": 0,
    "class": "Container",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "horizontalAlign": "center",
    "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
    "verticalAlign": "top",
    "children": [
     "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
     "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
     {
      "paddingLeft": 0,
      "maxWidth": 58,
      "class": "IconButton",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "maxHeight": 58,
      "width": 58,
      "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "minHeight": 1,
      "propagateClick": true,
      "mode": "toggle",
      "height": 58,
      "minWidth": 1,
      "transparencyActive": true,
      "paddingTop": 0,
      "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
      "borderRadius": 0,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
      "cursor": "hand",
      "data": {
       "name": "IconButton MUTE"
      }
     },
     "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
     {
      "paddingLeft": 0,
      "maxWidth": 58,
      "class": "IconButton",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "maxHeight": 58,
      "width": 58,
      "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "minHeight": 1,
      "propagateClick": true,
      "mode": "toggle",
      "height": 58,
      "minWidth": 1,
      "transparencyActive": true,
      "paddingTop": 0,
      "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
      "borderRadius": 0,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
      "cursor": "hand",
      "data": {
       "name": "IconButton FULLSCREEN"
      }
     },
     {
      "paddingLeft": 0,
      "maxWidth": 58,
      "class": "IconButton",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "maxHeight": 58,
      "width": 58,
      "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
      "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
      "shadow": false,
      "verticalAlign": "middle",
      "borderSize": 0,
      "minHeight": 1,
      "propagateClick": true,
      "mode": "push",
      "height": 58,
      "minWidth": 1,
      "click": "this.shareFacebook(location.href)",
      "transparencyActive": true,
      "paddingTop": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
      "cursor": "hand",
      "data": {
       "name": "IconButton FB"
      }
     }
    ],
    "shadow": false,
    "right": "0%",
    "width": "91.304%",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "layout": "vertical",
    "minHeight": 1,
    "propagateClick": true,
    "scrollBarMargin": 2,
    "bottom": "0%",
    "height": "85.959%",
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "overflow": "scroll",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "gap": 3,
    "borderRadius": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "data": {
     "name": "-button set"
    }
   }
  ],
  "shadow": false,
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "layout": "absolute",
  "minHeight": 1,
  "top": "0%",
  "propagateClick": true,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "height": 641,
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "gap": 10,
  "borderRadius": 0,
  "paddingRight": 0,
  "contentOpaque": false,
  "data": {
   "name": "-- SETTINGS"
  }
 },
 {
  "paddingLeft": 0,
  "class": "Container",
  "paddingBottom": 0,
  "left": 70,
  "width": 381,
  "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "shadow": false,
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "layout": "absolute",
  "minHeight": 1,
  "horizontalAlign": "left",
  "top": 34,
  "propagateClick": true,
  "backgroundOpacity": 0,
  "scrollBarMargin": 2,
  "overflow": "visible",
  "height": 140,
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "gap": 10,
  "borderRadius": 0,
  "paddingRight": 0,
  "contentOpaque": false,
  "data": {
   "name": "--STICKER"
  }
 },
 {
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "class": "Container",
  "paddingBottom": 0,
  "left": "0%",
  "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
  "backgroundOpacity": 0.6,
  "right": "0%",
  "verticalAlign": "top",
  "children": [
   {
    "paddingLeft": 0,
    "backgroundColorDirection": "vertical",
    "data": {
     "name": "Global"
    },
    "class": "Container",
    "paddingBottom": 0,
    "left": "15%",
    "shadowSpread": 1,
    "backgroundOpacity": 1,
    "verticalAlign": "top",
    "children": [
     {
      "paddingLeft": 0,
      "backgroundColorDirection": "vertical",
      "class": "Container",
      "backgroundOpacity": 1,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "maxWidth": 2000,
        "class": "Image",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "left": "0%",
        "maxHeight": 1000,
        "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
        "horizontalAlign": "center",
        "verticalAlign": "middle",
        "shadow": false,
        "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
        "width": "100%",
        "borderSize": 0,
        "minHeight": 1,
        "top": "0%",
        "propagateClick": false,
        "height": "100%",
        "minWidth": 1,
        "paddingTop": 0,
        "borderRadius": 0,
        "scaleMode": "fit_outside",
        "paddingRight": 0,
        "data": {
         "name": "Image"
        }
       }
      ],
      "shadow": false,
      "width": "43.172%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "layout": "absolute",
      "minHeight": 1,
      "propagateClick": false,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "backgroundColor": [
       "#000000"
      ],
      "minWidth": 1,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "backgroundColorRatios": [
       0
      ],
      "height": "100%",
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "gap": 10,
      "borderRadius": 0,
      "paddingRight": 0,
      "contentOpaque": false,
      "data": {
       "name": "-left"
      }
     },
     {
      "paddingLeft": 50,
      "backgroundColorDirection": "vertical",
      "class": "Container",
      "backgroundOpacity": 1,
      "paddingBottom": 20,
      "horizontalAlign": "left",
      "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
      "verticalAlign": "top",
      "children": [
       {
        "paddingLeft": 0,
        "backgroundColorDirection": "vertical",
        "class": "Container",
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "horizontalAlign": "right",
        "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
        "verticalAlign": "top",
        "shadow": false,
        "width": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "layout": "horizontal",
        "minHeight": 0,
        "propagateClick": false,
        "scrollBarMargin": 2,
        "height": 50,
        "overflow": "scroll",
        "minWidth": 1,
        "scrollBarOpacity": 0.5,
        "paddingTop": 20,
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "gap": 0,
        "borderRadius": 0,
        "paddingRight": 0,
        "contentOpaque": false,
        "data": {
         "name": "Container space"
        }
       },
       {
        "paddingLeft": 0,
        "backgroundColorDirection": "vertical",
        "class": "Container",
        "backgroundOpacity": 0.3,
        "paddingBottom": 10,
        "horizontalAlign": "left",
        "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
        "verticalAlign": "top",
        "children": [
         {
          "paddingLeft": 10,
          "class": "HTMLText",
          "backgroundOpacity": 0,
          "paddingBottom": 20,
          "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
          "width": "100%",
          "shadow": false,
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "minHeight": 1,
          "propagateClick": false,
          "scrollBarMargin": 2,
          "height": "100%",
          "minWidth": 1,
          "scrollBarWidth": 10,
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.9vh;font-family:'Oswald';\"><B><I>PORTO CEDROS</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.9vh;font-family:'Oswald';\"><B><I>PROJECT</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.59vh;font-family:'Oswald';\"><B>A tourism pole that offers everything the luxury traveler demands in the XXI century. </B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">A modern marine protected by natural barriers receives shuttles from Punta Arenas. The International Aquarium welcomes visitors and dips them into the wonders of Costa Rican Central Pacific. The marina will accommodate nearly 200 boats of low and average draft.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Commercial areas, craft sales and other Costa Rican goods will guide the visitor in an ecological and cultural experience.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">All housing will offer spectacular views of the \u201cNicoya Peninsula\u201d. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">For the most demanding, a boutique hotel will fulfill their expectations. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">And for the ones who fell in love with this heaven, permanent residences with the highest quality standards will be available.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">A paradise, with all Costa Rica has to offer to the national and international traveler.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Porto Cedros, the Nicoyan Jewel!</SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.59vh;font-family:'Oswald';\"><B><I>FEATURES</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><I>\u2022 2 Big Commercial Areas</I></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><I>\u2022 4 International Hotels</I></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><I>\u2022 More than 2000 rooms</I></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><I>\u2022 4000 direct and 12000 indirect jobs</I></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><I>\u2022 Various residential areas with a diversified offer</I></SPAN></DIV></div>",
          "scrollBarColor": "#04A3E1",
          "borderRadius": 0,
          "paddingRight": 10,
          "data": {
           "name": "HTMLText"
          }
         },
         {
          "paddingLeft": 0,
          "backgroundColorDirection": "vertical",
          "data": {
           "name": "Button31015"
          },
          "class": "Button",
          "backgroundOpacity": 0.7,
          "paddingBottom": 0,
          "horizontalAlign": "center",
          "shadowSpread": 1,
          "width": 180,
          "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
          "fontFamily": "Oswald",
          "shadow": false,
          "iconHeight": 32,
          "verticalAlign": "middle",
          "rollOverBackgroundOpacity": 1,
          "iconBeforeLabel": true,
          "borderSize": 0,
          "pressedBackgroundOpacity": 1,
          "layout": "horizontal",
          "minHeight": 1,
          "pressedBackgroundColor": [
           "#000000"
          ],
          "fontWeight": "bold",
          "propagateClick": false,
          "shadowColor": "#000000",
          "height": 50,
          "fontColor": "#FFFFFF",
          "mode": "push",
          "minWidth": 1,
          "borderColor": "#000000",
          "paddingTop": 0,
          "backgroundColorRatios": [
           0
          ],
          "pressedBackgroundColorRatios": [
           0
          ],
          "backgroundColor": [
           "#04A3E1"
          ],
          "label": "More Info...",
          "fontStyle": "italic",
          "fontSize": "2.39vh",
          "click": "this.openLink('https://www.mondriam.com/', '_blank')",
          "gap": 5,
          "borderRadius": 50,
          "paddingRight": 0,
          "textDecoration": "none",
          "cursor": "hand",
          "iconWidth": 32,
          "shadowBlurRadius": 6
         }
        ],
        "shadow": false,
        "width": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "layout": "vertical",
        "minHeight": 300,
        "propagateClick": false,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "minWidth": 100,
        "scrollBarOpacity": 0.79,
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "height": "100%",
        "scrollBarWidth": 10,
        "scrollBarColor": "#E73B2C",
        "gap": 10,
        "borderRadius": 0,
        "paddingRight": 0,
        "contentOpaque": false,
        "data": {
         "name": "Container text"
        }
       },
       {
        "paddingLeft": 0,
        "backgroundColorDirection": "vertical",
        "class": "Container",
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "horizontalAlign": "left",
        "width": 370,
        "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
        "shadow": false,
        "verticalAlign": "top",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "layout": "horizontal",
        "minHeight": 1,
        "propagateClick": false,
        "scrollBarMargin": 2,
        "height": 30,
        "overflow": "scroll",
        "minWidth": 1,
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "gap": 10,
        "borderRadius": 0,
        "paddingRight": 0,
        "contentOpaque": false,
        "data": {
         "name": "Container space"
        }
       }
      ],
      "shadow": false,
      "width": "50%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "layout": "vertical",
      "minHeight": 1,
      "propagateClick": false,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "minWidth": 460,
      "scrollBarOpacity": 0.51,
      "paddingTop": 20,
      "backgroundColorRatios": [
       0,
       1
      ],
      "height": "100%",
      "scrollBarWidth": 10,
      "scrollBarColor": "#0069A3",
      "gap": 0,
      "borderRadius": 0,
      "paddingRight": 50,
      "contentOpaque": false,
      "data": {
       "name": "-right"
      }
     }
    ],
    "shadowColor": "#000000",
    "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
    "right": "15%",
    "scrollBarVisible": "rollOver",
    "shadow": true,
    "borderSize": 0,
    "minHeight": 1,
    "horizontalAlign": "left",
    "layout": "horizontal",
    "top": "10%",
    "propagateClick": false,
    "scrollBarMargin": 2,
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "shadowHorizontalLength": 0,
    "bottom": "10%",
    "minWidth": 1,
    "shadowOpacity": 0.3,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "overflow": "scroll",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "gap": 10,
    "borderRadius": 0,
    "shadowBlurRadius": 25,
    "contentOpaque": false,
    "paddingRight": 0
   },
   {
    "paddingLeft": 0,
    "class": "Container",
    "paddingBottom": 0,
    "left": "15%",
    "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
    "backgroundOpacity": 0,
    "right": "15%",
    "verticalAlign": "top",
    "children": [
     {
      "paddingLeft": 0,
      "maxWidth": 60,
      "class": "IconButton",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "maxHeight": 60,
      "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
      "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
      "verticalAlign": "middle",
      "shadow": false,
      "width": "25%",
      "borderSize": 0,
      "minHeight": 50,
      "propagateClick": false,
      "mode": "push",
      "height": "75%",
      "minWidth": 50,
      "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
      "transparencyActive": false,
      "paddingTop": 0,
      "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
      "borderRadius": 0,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
      "cursor": "hand",
      "data": {
       "name": "X"
      }
     }
    ],
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "layout": "vertical",
    "minHeight": 1,
    "horizontalAlign": "right",
    "top": "10%",
    "propagateClick": false,
    "scrollBarMargin": 2,
    "bottom": "80%",
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "paddingTop": 20,
    "overflow": "visible",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "gap": 10,
    "borderRadius": 0,
    "paddingRight": 20,
    "contentOpaque": false,
    "data": {
     "name": "Container X global"
    }
   }
  ],
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "minHeight": 1,
  "horizontalAlign": "left",
  "layout": "absolute",
  "top": "0%",
  "propagateClick": true,
  "scrollBarMargin": 2,
  "bottom": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "minWidth": 1,
  "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "creationPolicy": "inAdvance",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "gap": 10,
  "borderRadius": 0,
  "paddingRight": 0,
  "visible": false,
  "contentOpaque": false,
  "data": {
   "name": "--INFO photo"
  }
 },
 {
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "class": "Container",
  "paddingBottom": 0,
  "left": "0%",
  "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "backgroundOpacity": 0.6,
  "right": "0%",
  "verticalAlign": "top",
  "children": [
   {
    "paddingLeft": 0,
    "backgroundColorDirection": "vertical",
    "data": {
     "name": "Global"
    },
    "class": "Container",
    "paddingBottom": 0,
    "left": "15%",
    "shadowSpread": 1,
    "backgroundOpacity": 1,
    "verticalAlign": "top",
    "children": [
     {
      "paddingLeft": 0,
      "backgroundColorDirection": "vertical",
      "class": "Container",
      "backgroundOpacity": 0.3,
      "paddingBottom": 0,
      "horizontalAlign": "left",
      "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
      "verticalAlign": "top",
      "children": [
       {
        "paddingLeft": 0,
        "maxWidth": 60,
        "class": "IconButton",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "horizontalAlign": "right",
        "maxHeight": 60,
        "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
        "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
        "verticalAlign": "top",
        "shadow": false,
        "right": 20,
        "width": "100%",
        "borderSize": 0,
        "minHeight": 50,
        "top": 20,
        "propagateClick": false,
        "mode": "push",
        "height": "36.14%",
        "minWidth": 50,
        "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
        "transparencyActive": false,
        "paddingTop": 0,
        "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
        "borderRadius": 0,
        "paddingRight": 0,
        "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
        "cursor": "hand",
        "data": {
         "name": "IconButton X"
        }
       }
      ],
      "shadow": false,
      "width": "100%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "layout": "absolute",
      "minHeight": 1,
      "propagateClick": false,
      "scrollBarMargin": 2,
      "height": 140,
      "overflow": "scroll",
      "minWidth": 1,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "gap": 10,
      "borderRadius": 0,
      "paddingRight": 0,
      "contentOpaque": false,
      "data": {
       "name": "header"
      }
     },
     {
      "itemBackgroundColorDirection": "vertical",
      "paddingBottom": 70,
      "left": 0,
      "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
      "horizontalAlign": "center",
      "verticalAlign": "middle",
      "rollOverItemThumbnailShadowBlurRadius": 0,
      "width": "100%",
      "itemMinHeight": 50,
      "itemThumbnailOpacity": 1,
      "itemLabelGap": 7,
      "minHeight": 1,
      "rollOverItemThumbnailShadow": true,
      "scrollBarMargin": 2,
      "selectedItemLabelFontWeight": "bold",
      "itemLabelFontFamily": "Oswald",
      "itemHorizontalAlign": "center",
      "itemLabelFontColor": "#666666",
      "scrollBarOpacity": 0.5,
      "height": "92%",
      "minWidth": 1,
      "scrollBarWidth": 10,
      "itemLabelFontWeight": "normal",
      "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
      "itemThumbnailShadow": false,
      "itemLabelHorizontalAlign": "center",
      "itemLabelFontSize": 16,
      "itemLabelTextDecoration": "none",
      "scrollBarColor": "#04A3E1",
      "itemPaddingRight": 3,
      "borderRadius": 5,
      "itemWidth": 220,
      "itemHeight": 160,
      "selectedItemThumbnailShadowBlurRadius": 16,
      "itemThumbnailWidth": 220,
      "backgroundOpacity": 0,
      "itemMaxWidth": 1000,
      "paddingRight": 70,
      "selectedItemThumbnailShadow": true,
      "paddingLeft": 70,
      "itemMinWidth": 50,
      "selectedItemThumbnailShadowVerticalLength": 0,
      "class": "ThumbnailGrid",
      "rollOverItemThumbnailShadowVerticalLength": 0,
      "itemVerticalAlign": "top",
      "selectedItemThumbnailShadowHorizontalLength": 0,
      "itemLabelFontStyle": "italic",
      "itemBackgroundOpacity": 0,
      "itemBackgroundColor": [],
      "selectedItemLabelFontColor": "#04A3E1",
      "shadow": false,
      "scrollBarVisible": "rollOver",
      "itemLabelPosition": "bottom",
      "borderSize": 0,
      "itemOpacity": 1,
      "propagateClick": false,
      "bottom": -0.2,
      "itemThumbnailScaleMode": "fit_outside",
      "rollOverItemLabelFontColor": "#04A3E1",
      "paddingTop": 10,
      "itemPaddingLeft": 3,
      "itemThumbnailHeight": 125,
      "itemMode": "normal",
      "itemMaxHeight": 1000,
      "rollOverItemThumbnailShadowColor": "#04A3E1",
      "itemBackgroundColorRatios": [],
      "gap": 26,
      "rollOverItemThumbnailShadowHorizontalLength": 8,
      "itemBorderRadius": 0,
      "itemThumbnailBorderRadius": 0,
      "itemPaddingTop": 3,
      "itemPaddingBottom": 3,
      "data": {
       "name": "ThumbnailList"
      }
     }
    ],
    "shadowColor": "#000000",
    "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
    "right": "15%",
    "scrollBarVisible": "rollOver",
    "shadow": true,
    "borderSize": 0,
    "minHeight": 1,
    "horizontalAlign": "center",
    "layout": "absolute",
    "top": "10%",
    "propagateClick": false,
    "scrollBarMargin": 2,
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "shadowHorizontalLength": 0,
    "bottom": "10%",
    "minWidth": 1,
    "shadowOpacity": 0.3,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "overflow": "visible",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "gap": 10,
    "borderRadius": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "shadowBlurRadius": 25
   }
  ],
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "minHeight": 1,
  "horizontalAlign": "left",
  "layout": "absolute",
  "top": "0%",
  "propagateClick": true,
  "scrollBarMargin": 2,
  "bottom": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "minWidth": 1,
  "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "creationPolicy": "inAdvance",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "gap": 10,
  "borderRadius": 0,
  "paddingRight": 0,
  "visible": false,
  "contentOpaque": false,
  "data": {
   "name": "--PANORAMA LIST"
  }
 },
 {
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "class": "Container",
  "paddingBottom": 0,
  "left": "0%",
  "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "backgroundOpacity": 0.6,
  "right": "0%",
  "verticalAlign": "top",
  "children": [
   {
    "paddingLeft": 0,
    "backgroundColorDirection": "vertical",
    "data": {
     "name": "Global"
    },
    "class": "Container",
    "paddingBottom": 0,
    "left": "15%",
    "shadowSpread": 1,
    "backgroundOpacity": 1,
    "verticalAlign": "top",
    "children": [
     {
      "paddingLeft": 0,
      "backgroundColorDirection": "vertical",
      "class": "WebFrame",
      "backgroundOpacity": 1,
      "paddingBottom": 0,
      "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
      "width": "100%",
      "shadow": false,
      "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.445412814212!2d-84.89076631517214!3d9.84101422282578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1d4bf60494955%3A0x5405ab4c21909c80!2sIsla+Cedros!5e0!3m2!1sen!2scr!4v1561414119669!5m2!1sen!2scr",
      "borderSize": 0,
      "minHeight": 1,
      "propagateClick": false,
      "insetBorder": false,
      "scrollEnabled": true,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "paddingTop": 0,
      "backgroundColorRatios": [
       0
      ],
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "data": {
       "name": "WebFrame48191"
      }
     }
    ],
    "shadowColor": "#000000",
    "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
    "right": "15%",
    "scrollBarVisible": "rollOver",
    "shadow": true,
    "borderSize": 0,
    "minHeight": 1,
    "horizontalAlign": "left",
    "layout": "horizontal",
    "top": "10%",
    "propagateClick": false,
    "scrollBarMargin": 2,
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "shadowHorizontalLength": 0,
    "bottom": "10%",
    "minWidth": 1,
    "shadowOpacity": 0.3,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "overflow": "scroll",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "gap": 10,
    "borderRadius": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "shadowBlurRadius": 25
   },
   {
    "paddingLeft": 0,
    "class": "Container",
    "paddingBottom": 0,
    "left": "15%",
    "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
    "backgroundOpacity": 0,
    "right": "15%",
    "verticalAlign": "top",
    "children": [
     {
      "paddingLeft": 0,
      "maxWidth": 60,
      "class": "IconButton",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "maxHeight": 60,
      "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
      "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
      "verticalAlign": "middle",
      "shadow": false,
      "width": "25%",
      "borderSize": 0,
      "minHeight": 50,
      "propagateClick": false,
      "mode": "push",
      "height": "75%",
      "minWidth": 50,
      "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
      "transparencyActive": false,
      "paddingTop": 0,
      "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
      "borderRadius": 0,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
      "cursor": "hand",
      "data": {
       "name": "X"
      }
     }
    ],
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "layout": "vertical",
    "minHeight": 1,
    "horizontalAlign": "right",
    "top": "10%",
    "propagateClick": false,
    "scrollBarMargin": 2,
    "bottom": "80%",
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "paddingTop": 20,
    "overflow": "visible",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "gap": 10,
    "borderRadius": 0,
    "paddingRight": 20,
    "contentOpaque": false,
    "data": {
     "name": "Container X global"
    }
   }
  ],
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "minHeight": 1,
  "horizontalAlign": "left",
  "layout": "absolute",
  "top": "0%",
  "propagateClick": true,
  "scrollBarMargin": 2,
  "bottom": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "minWidth": 1,
  "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "creationPolicy": "inAdvance",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "gap": 10,
  "borderRadius": 0,
  "paddingRight": 0,
  "visible": false,
  "contentOpaque": false,
  "data": {
   "name": "--LOCATION"
  }
 },
 {
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "class": "Container",
  "paddingBottom": 0,
  "left": "0%",
  "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "backgroundOpacity": 0.6,
  "right": "0%",
  "verticalAlign": "top",
  "children": [
   {
    "paddingLeft": 0,
    "backgroundColorDirection": "vertical",
    "data": {
     "name": "Global"
    },
    "class": "Container",
    "paddingBottom": 0,
    "left": "15%",
    "shadowSpread": 1,
    "backgroundOpacity": 1,
    "verticalAlign": "top",
    "children": [
     "this.MapViewer",
     {
      "paddingLeft": 0,
      "class": "Container",
      "paddingBottom": 0,
      "left": 0,
      "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
      "backgroundOpacity": 0,
      "verticalAlign": "top",
      "children": [
       {
        "paddingLeft": 0,
        "maxWidth": 60,
        "class": "IconButton",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "horizontalAlign": "right",
        "maxHeight": 60,
        "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
        "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
        "verticalAlign": "top",
        "shadow": false,
        "right": 12.05,
        "width": "7.276%",
        "borderSize": 0,
        "minHeight": 50,
        "top": "15.24%",
        "propagateClick": false,
        "mode": "push",
        "height": "63.291%",
        "minWidth": 50,
        "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
        "transparencyActive": false,
        "paddingTop": 0,
        "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
        "borderRadius": 0,
        "paddingRight": 0,
        "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
        "cursor": "hand",
        "data": {
         "name": "IconButton X"
        }
       }
      ],
      "shadow": false,
      "width": "100%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "layout": "absolute",
      "minHeight": 1,
      "horizontalAlign": "left",
      "top": 0,
      "propagateClick": false,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "height": 84,
      "minWidth": 1,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "gap": 10,
      "borderRadius": 0,
      "paddingRight": 0,
      "contentOpaque": false,
      "data": {
       "name": "header"
      }
     }
    ],
    "shadowColor": "#000000",
    "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
    "right": "15%",
    "scrollBarVisible": "rollOver",
    "shadow": true,
    "borderSize": 0,
    "minHeight": 1,
    "horizontalAlign": "center",
    "layout": "absolute",
    "top": "10%",
    "propagateClick": false,
    "scrollBarMargin": 2,
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#000000"
    ],
    "shadowHorizontalLength": 0,
    "bottom": "10%",
    "minWidth": 1,
    "shadowOpacity": 0.3,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "backgroundColorRatios": [
     0
    ],
    "overflow": "visible",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "gap": 10,
    "borderRadius": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "shadowBlurRadius": 25
   }
  ],
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "minHeight": 1,
  "horizontalAlign": "left",
  "layout": "absolute",
  "top": "0%",
  "propagateClick": true,
  "scrollBarMargin": 2,
  "bottom": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "minWidth": 1,
  "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "creationPolicy": "inAdvance",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "gap": 10,
  "borderRadius": 0,
  "paddingRight": 0,
  "visible": false,
  "contentOpaque": false,
  "data": {
   "name": "--FLOORPLAN"
  }
 },
 {
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "class": "Container",
  "paddingBottom": 0,
  "left": "0%",
  "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "backgroundOpacity": 0.6,
  "right": "0%",
  "verticalAlign": "top",
  "children": [
   {
    "paddingLeft": 0,
    "backgroundColorDirection": "vertical",
    "data": {
     "name": "Global"
    },
    "class": "Container",
    "paddingBottom": 0,
    "left": "15%",
    "shadowSpread": 1,
    "backgroundOpacity": 1,
    "verticalAlign": "top",
    "children": [
     {
      "paddingLeft": 0,
      "backgroundColorDirection": "vertical",
      "class": "Container",
      "backgroundOpacity": 1,
      "paddingBottom": 0,
      "horizontalAlign": "left",
      "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
      "verticalAlign": "top",
      "children": [
       {
        "paddingBottom": 0,
        "left": "0%",
        "toolTipPaddingTop": 4,
        "playbackBarHeight": 10,
        "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
        "progressBarBackgroundColor": [
         "#3399FF"
        ],
        "toolTipFontWeight": "normal",
        "playbackBarHeadBorderColor": "#000000",
        "playbackBarHeadShadowVerticalLength": 0,
        "playbackBarHeadWidth": 6,
        "playbackBarHeadBorderRadius": 0,
        "toolTipBorderSize": 1,
        "width": "100%",
        "progressLeft": 0,
        "toolTipDisplayTime": 600,
        "progressBorderSize": 0,
        "toolTipPaddingLeft": 6,
        "minHeight": 1,
        "playbackBarHeadBorderSize": 0,
        "playbackBarBackgroundColorDirection": "vertical",
        "progressBorderRadius": 0,
        "progressBackgroundColorRatios": [
         0.01
        ],
        "progressBackgroundColor": [
         "#FFFFFF"
        ],
        "playbackBarProgressBackgroundColorRatios": [
         0
        ],
        "playbackBarProgressOpacity": 1,
        "playbackBarRight": 0,
        "playbackBarHeadShadowHorizontalLength": 0,
        "minWidth": 1,
        "toolTipShadowSpread": 0,
        "toolTipBackgroundColor": "#F6F6F6",
        "playbackBarBorderSize": 0,
        "height": "100%",
        "toolTipFontSize": 12,
        "playbackBarBackgroundOpacity": 1,
        "toolTipBorderRadius": 3,
        "progressBarBorderSize": 0,
        "playbackBarLeft": 0,
        "playbackBarHeadShadowBlurRadius": 3,
        "toolTipTextShadowColor": "#000000",
        "toolTipBorderColor": "#767676",
        "toolTipShadowOpacity": 1,
        "borderRadius": 0,
        "toolTipShadowBlurRadius": 3,
        "paddingRight": 0,
        "playbackBarHeadBackgroundColor": [
         "#111111",
         "#666666"
        ],
        "playbackBarHeadBackgroundColorRatios": [
         0,
         1
        ],
        "playbackBarProgressBorderRadius": 0,
        "progressBottom": 2,
        "playbackBarHeadHeight": 15,
        "paddingLeft": 0,
        "toolTipTextShadowBlurRadius": 3,
        "playbackBarProgressBorderSize": 0,
        "class": "ViewerArea",
        "playbackBarHeadShadowColor": "#000000",
        "progressHeight": 10,
        "progressBackgroundColorDirection": "vertical",
        "progressRight": 0,
        "playbackBarBottom": 0,
        "toolTipFontStyle": "normal",
        "transitionDuration": 500,
        "progressBarBackgroundColorDirection": "vertical",
        "progressOpacity": 1,
        "shadow": false,
        "toolTipOpacity": 1,
        "playbackBarHeadBackgroundColorDirection": "vertical",
        "progressBorderColor": "#FFFFFF",
        "borderSize": 0,
        "progressBarBorderRadius": 0,
        "progressBarBorderColor": "#0066FF",
        "playbackBarProgressBackgroundColor": [
         "#3399FF"
        ],
        "progressBarBackgroundColorRatios": [
         0
        ],
        "toolTipFontFamily": "Arial",
        "top": "0%",
        "propagateClick": false,
        "playbackBarHeadShadow": true,
        "toolTipShadowColor": "#333333",
        "toolTipTextShadowOpacity": 0,
        "progressBackgroundOpacity": 1,
        "playbackBarBorderRadius": 0,
        "toolTipPaddingBottom": 4,
        "toolTipShadowHorizontalLength": 0,
        "paddingTop": 0,
        "toolTipShadowVerticalLength": 0,
        "playbackBarProgressBackgroundColorDirection": "vertical",
        "playbackBarOpacity": 1,
        "progressBarOpacity": 1,
        "playbackBarHeadShadowOpacity": 0.7,
        "playbackBarBackgroundColor": [
         "#FFFFFF"
        ],
        "displayTooltipInTouchScreens": true,
        "playbackBarHeadOpacity": 1,
        "playbackBarProgressBorderColor": "#000000",
        "transitionMode": "blending",
        "toolTipFontColor": "#606060",
        "data": {
         "name": "Viewer photoalbum 1"
        },
        "playbackBarBorderColor": "#FFFFFF",
        "toolTipPaddingRight": 6
       },
       {
        "paddingLeft": 0,
        "maxWidth": 60,
        "class": "IconButton",
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "horizontalAlign": "right",
        "maxHeight": 60,
        "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
        "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
        "verticalAlign": "top",
        "shadow": false,
        "right": 20,
        "width": "10%",
        "borderSize": 0,
        "minHeight": 50,
        "top": 20,
        "propagateClick": true,
        "mode": "push",
        "height": "10%",
        "minWidth": 50,
        "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
        "transparencyActive": false,
        "paddingTop": 0,
        "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
        "borderRadius": 0,
        "paddingRight": 0,
        "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
        "cursor": "hand",
        "data": {
         "name": "IconButton X"
        }
       },
       {
        "paddingLeft": 0,
        "backgroundColorDirection": "vertical",
        "class": "WebFrame",
        "backgroundOpacity": 1,
        "paddingBottom": 0,
        "left": "0%",
        "id": "WebFrame_86240609_9524_B31E_41E2_7DE25AACD92F",
        "width": "100%",
        "shadow": false,
        "url": "//www.youtube.com/embed/q2mU0fJ3F_U?v=q2mU0fJ3F_U",
        "borderSize": 0,
        "minHeight": 1,
        "top": "0%",
        "propagateClick": false,
        "insetBorder": false,
        "scrollEnabled": true,
        "backgroundColor": [
         "#FFFFFF"
        ],
        "minWidth": 1,
        "paddingTop": 0,
        "backgroundColorRatios": [
         0
        ],
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "data": {
         "name": "WebFrame17420"
        }
       }
      ],
      "shadow": false,
      "width": "100%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "layout": "absolute",
      "minHeight": 1,
      "propagateClick": false,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "backgroundColor": [
       "#000000"
      ],
      "minWidth": 1,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "backgroundColorRatios": [
       0
      ],
      "height": "100%",
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "gap": 10,
      "borderRadius": 0,
      "paddingRight": 0,
      "contentOpaque": false,
      "data": {
       "name": "Container photo"
      }
     }
    ],
    "shadowColor": "#000000",
    "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
    "right": "15%",
    "scrollBarVisible": "rollOver",
    "shadow": true,
    "borderSize": 0,
    "minHeight": 1,
    "horizontalAlign": "center",
    "layout": "vertical",
    "top": "10%",
    "propagateClick": false,
    "scrollBarMargin": 2,
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "shadowHorizontalLength": 0,
    "bottom": "10%",
    "minWidth": 1,
    "shadowOpacity": 0.3,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "overflow": "visible",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "gap": 10,
    "borderRadius": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "shadowBlurRadius": 25
   }
  ],
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "minHeight": 1,
  "horizontalAlign": "left",
  "layout": "absolute",
  "top": "0%",
  "propagateClick": true,
  "scrollBarMargin": 2,
  "bottom": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "minWidth": 1,
  "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "creationPolicy": "inAdvance",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "gap": 10,
  "borderRadius": 0,
  "paddingRight": 0,
  "visible": false,
  "contentOpaque": false,
  "data": {
   "name": "--PHOTOALBUM"
  }
 },
 {
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "class": "UIComponent",
  "paddingBottom": 0,
  "left": 0,
  "id": "veilPopupPanorama",
  "backgroundOpacity": 0.55,
  "right": 0,
  "shadow": false,
  "borderSize": 0,
  "minHeight": 0,
  "top": 0,
  "propagateClick": false,
  "bottom": 0,
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 0,
  "paddingTop": 0,
  "backgroundColorRatios": [
   0
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "borderRadius": 0,
  "paddingRight": 0,
  "visible": false,
  "data": {
   "name": "UIComponent1864"
  }
 },
 {
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "class": "ZoomImage",
  "paddingBottom": 0,
  "left": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundOpacity": 1,
  "right": 0,
  "shadow": false,
  "borderSize": 0,
  "minHeight": 0,
  "top": 0,
  "propagateClick": false,
  "bottom": 0,
  "backgroundColor": [],
  "minWidth": 0,
  "paddingTop": 0,
  "backgroundColorRatios": [],
  "borderRadius": 0,
  "scaleMode": "custom",
  "paddingRight": 0,
  "visible": false,
  "data": {
   "name": "ZoomImage1865"
  }
 },
 {
  "visible": false,
  "paddingLeft": 5,
  "backgroundColorDirection": "vertical",
  "data": {
   "name": "CloseButton1866"
  },
  "class": "CloseButton",
  "backgroundOpacity": 0.3,
  "paddingBottom": 5,
  "horizontalAlign": "center",
  "shadowSpread": 1,
  "id": "closeButtonPopupPanorama",
  "fontFamily": "Arial",
  "pressedIconColor": "#888888",
  "right": 10,
  "verticalAlign": "middle",
  "iconBeforeLabel": true,
  "shadow": false,
  "borderSize": 0,
  "layout": "horizontal",
  "minHeight": 0,
  "iconHeight": 20,
  "fontWeight": "normal",
  "top": 10,
  "propagateClick": false,
  "rollOverIconColor": "#666666",
  "shadowColor": "#000000",
  "fontColor": "#FFFFFF",
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "minWidth": 0,
  "borderColor": "#000000",
  "paddingTop": 5,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "fontSize": "1.29vh",
  "label": "",
  "fontStyle": "normal",
  "gap": 5,
  "borderRadius": 0,
  "iconLineWidth": 5,
  "paddingRight": 5,
  "iconColor": "#000000",
  "textDecoration": "none",
  "cursor": "hand",
  "iconWidth": 20,
  "shadowBlurRadius": 6
 }
], 
 "paddingLeft": 0,
 "class": "Player",
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "id": "rootPlayer",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_DC62A627_D1CC_5D26_41E6_1CB1BDD03BA5.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "verticalAlign": "top",
 "shadow": false,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "layout": "absolute",
 "minHeight": 20,
 "propagateClick": true,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "desktopMipmappingEnabled": false,
 "scripts": {
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getKey": function(key){  return window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } }
 },
 "height": "100%",
 "scrollBarWidth": 10,
 "width": "100%",
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "gap": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "data": {
  "name": "Player468"
 }
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

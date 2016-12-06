export let eventsMock = {
    userActivityEmpty: {
        "@count":"0",
        "@upto":"eb5cff2e-fd9b-11e4-ae3f-d421f411f250",
        "@since":"daaf75d0-fd9b-11e4-90b5-7d8c11a788c9"
    },
    userActivitySingle: {
        "@count":"3",
        "@upto":"eb5cff2e-fd9b-11e4-ae3f-d421f411f250",
        "@since":"daaf75d0-fd9b-11e4-90b5-7d8c11a788c9",
        "event":{
            "@id":"eb5cff2e-fd9b-11e4-ae3f-d421f411f250",
            "@datetime":"Mon, 18 May 2015 20:24:43 GMT",
            "@type":"page:view",
            "@journaled":"false",
            "@version":"2",
            "data":{"_uri.host":"marsdev.mindtouch.dev","_uri.query":"","_uri.scheme":"https"},
            "page":{
                "@id":"361",
                "@draft.state":"active",
                "@href":"https://marsdev.mindtouch.dev/@api/deki/pages/361?redirects=0",
                "@deleted":"false",
                "date.created":"Wed, 01 Apr 2015 21:24:12 GMT",
                "language":"en-US",
                "namespace":"main",
                "path":{"@seo":"true","#text":"Category_1/Guide_4/Page_Title_3"},
                "path.original":"Category_1/Guide_4/Page_Title_3",
                "title":"Page Title 3",
                "uri.ui":"https://marsdev.mindtouch.dev/Category_1/Guide_4/Page_Title_3"
            },
            "request":{"@id":"eb5cff2e-fd9b-11e4-ae3f-d7734efeb7bb"}
        }
    },
    userActivity: {
        "@count":"3",
        "@upto":"eb5cff2e-fd9b-11e4-ae3f-d421f411f250",
        "@since":"daaf75d0-fd9b-11e4-90b5-7d8c11a788c9",
        "event":[
            {
                "@id":"eb5cff2e-fd9b-11e4-ae3f-d421f411f250",
                "@datetime":"Mon, 18 May 2015 20:24:43 GMT",
                "@type":"page:view",
                "@journaled":"false",
                "@version":"2",
                "data":{"_uri.host":"marsdev.mindtouch.dev","_uri.query":"","_uri.scheme":"https"},
                "page":{
                    "@id":"361",
                    "@draft.state":"active",
                    "@href":"https://marsdev.mindtouch.dev/@api/deki/pages/361?redirects=0",
                    "@deleted":"false",
                    "date.created":"Wed, 01 Apr 2015 21:24:12 GMT",
                    "language":"en-US",
                    "namespace":"main",
                    "path":{"@seo":"true","#text":"Category_1/Guide_4/Page_Title_3"},
                    "path.original":"Category_1/Guide_4/Page_Title_3",
                    "title":"Page Title 3",
                    "uri.ui":"https://marsdev.mindtouch.dev/Category_1/Guide_4/Page_Title_3"
                },
                "request":{"@id":"eb5cff2e-fd9b-11e4-ae3f-d7734efeb7bb"}
            },
            {
                "@id":"e8e51952-fd9b-11e4-9259-c0b9b9e9894c",
                "@datetime":"Mon, 18 May 2015 20:24:39 GMT",
                "@type":"page:view",
                "@journaled":"false",
                "@version":"2",
                "data":{"_uri.host":"marsdev.mindtouch.dev","_uri.query":"","_uri.scheme":"https"},
                "page":{
                    "@id":"361",
                    "@draft.state":"active",
                    "@href":"https://marsdev.mindtouch.dev/@api/deki/pages/361?redirects=0",
                    "@deleted":"false",
                    "date.created":"Wed, 01 Apr 2015 21:24:12 GMT",
                    "language":"en-US",
                    "namespace":"main",
                    "path":{"@seo":"true","#text":"Category_1/Guide_4/Page_Title_3"},
                    "path.original":"Category_1/Guide_4/Page_Title_3",
                    "title":"Page Title 3",
                    "uri.ui":"https://marsdev.mindtouch.dev/Category_1/Guide_4/Page_Title_3"
                },
                "request":{"@id":"e8e51952-fd9b-11e4-9259-4cb756ea5bf5"}
            },
            {
                "@id":"d61d022a-ea36-11e5-aa42-395b15e44541",
                "@datetime":"Mon, 14 Mar 2016 22:48:14 GMT",
                "@type":"user:search",
                "@language":"en-US",
                "@journaled":"false",
                "@version":"2",
                "data":{
                    "constraint":"+(+namespace:main)",
                    "limit":"11",
                    "path":"/",
                    "qid":"3075",
                    "query":"page",
                    "totalrecommended":"1",
                    "totalresults":"38"
                },
                "request":{"@id":"d61d022a-ea36-11e5-aa42-cb143372ce7f"},
                "user":{"@id":"6"}
            }
        ]
    },
    event: {
        "@id":"8aecfaba-d5cf-11e5-ba3a-6ade75ec748e",
        "@datetime":"Wed, 17 Feb 2016 23:38:27 GMT",
        "@type":"page.content:update",
        "@language":"en-US",
        "@journaled":"true",
        "@version":"2",
        "diff":{
            "added":"431",
            "attributes":"1",
            "removed":"223",
            "structural":"2"
        },
        "page":{
            "@id":"556",
            "@revision":"0",
            "path":"Template:MindTouch/GeniusSearch/Views/SimpleSearch"
        },
        "request":{"@id":"8aecfaba-d5cf-11e5-ba3a-64d74b9028b3"},
        "revision":"18"
    },
    eventUserName: {
        "@id":"e91852da-d5b4-11e5-9a92-af4a7f17d011",
        "@datetime":"Wed, 17 Feb 2016 20:27:48 GMT",
        "@type":"page:create",
        "@language":"en-US",
        "@journaled":"true",
        "@version":"2",
        "create-reason":"user-homepage",
        "diff":{
            "added":"0",
            "attributes":"0",
            "removed":"0",
            "structural":"0"
        },
        "page":{
            "@id":"589",
            "@revision":"0",
            "path":"User:none"
        },
        "request":{"@id":"e91852da-d5b4-11e5-9a92-c5ed5b4adba2"},
        "user":{"@id":"8","name":"none"}
    },
    eventDetail: {
        "@count":"1",
        "summary":{
            "@id":"8aecfaba-d5cf-11e5-ba3a-28b32c020000",
            "@datetime":"Wed, 17 Feb 2016 23:38:27 GMT",
            "@count":"1",
            "@journaled":"true",
            "@diffable":"true",
            "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/user-page/556/8aecfaba-d5cf-11e5-ba3a-28b32c020000",
            "event":{
                "@id":"8aecfaba-d5cf-11e5-ba3a-6ade75ec748e",
                "@datetime":"Wed, 17 Feb 2016 23:38:27 GMT",
                "@type":"page.content:update",
                "@language":"en-US",
                "@journaled":"true",
                "@version":"2",
                "diff":{"added":"431","attributes":"1","removed":"223","structural":"2"},
                "page":{"@id":"556","@revision":"0","path":"Template:MindTouch/GeniusSearch/Views/SimpleSearch"},
                "request":{"@id":"8aecfaba-d5cf-11e5-ba3a-64d74b9028b3"},
                "revision":"18"
            }
        }
    },
    eventList: {
        "@count":"25",
        "@upto":"73c38628-ebd3-11e5-a8c6-b853ffffffff",
        "@since":"3f90bb30-b58e-11e5-b0fb-40b8b7010000",
        "summary":[
            {
                "@id":"cac39f8a-d40e-11e5-8adf-d06fb7010000",
                "@datetime":"Mon, 15 Feb 2016 18:06:10 GMT",
                "@count":"5",
                "@detailid":"82d85b8e-fca0-5426-9afd-2b2f1a2e28f4",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_1/82d85b8e-fca0-5426-9afd-2b2f1a2e28f4",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_1",
                "event":{
                    "@id":"cac39f8a-d40e-11e5-8adf-c00c61700f6d",
                    "@datetime":"Mon, 15 Feb 2016 18:06:10 GMT",
                    "@type":"page.property:create",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "page":{"@id":"439","@revision":"0","path":"Category_2/Guide_3/Topic_1"},
                    "property":{"id":"1323","name":"mindtouch.page#overview"},
                    "request":{"@id":"cac39f8a-d40e-11e5-8adf-034dec4ad06f"}
                },
                "page":{"path":"Category_2/Guide_3/Topic_1"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"c03c7f06-d408-11e5-86bf-7d0451010000",
                "@datetime":"Mon, 15 Feb 2016 17:22:55 GMT",
                "@count":"5",
                "@detailid":"72b18670-af98-991e-a6c4-6e22d3eabe78",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2/72b18670-af98-991e-a6c4-6e22d3eabe78",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2",
                "event":{
                    "@id":"c03c7f06-d408-11e5-86bf-c8c7afa85743",
                    "@datetime":"Mon, 15 Feb 2016 17:22:55 GMT",
                    "@type":"page.tag:update",
                    "@language":"en-US",
                    "@journaled":"false",
                    "@version":"2",
                    "page":{"@id":"337","@revision":"0","path":"Category_2"},
                    "request":{"@id":"c03c7f06-d408-11e5-86bf-1dac4e707d04"},
                    "tags-added":{"tag":{"name":"test:a","type":"text"}},
                    "tags-removed":""
                },
                "page":{"path":"Category_2"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"aab2f476-d408-11e5-b634-c248b9010000",
                "@datetime":"Mon, 15 Feb 2016 17:22:19 GMT",
                "@count":"4",
                "@detailid":"407eed97-556b-b3cc-1375-71b2dd5338f9",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_3/407eed97-556b-b3cc-1375-71b2dd5338f9",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_3",
                "event":{
                    "@id":"aab2f476-d408-11e5-b634-8021566c4213",
                    "@datetime":"Mon, 15 Feb 2016 17:22:19 GMT",
                    "@type":"page.tag:update",
                    "@language":"en-US",
                    "@journaled":"false",
                    "@version":"2",
                    "page":{"@id":"441","@revision":"0","path":"Category_2/Guide_3/Topic_3"},
                    "request":{"@id":"aab2f476-d408-11e5-b634-05934c41c248"},
                    "tags-added":"",
                    "tags-removed":{"tag":{"name":"test:b","type":"text"}}
                },
                "page":{"path":"Category_2/Guide_3/Topic_3"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"aab2f476-d408-11e5-b634-c248b8010000",
                "@datetime":"Mon, 15 Feb 2016 17:22:19 GMT",
                "@count":"4",
                "@detailid":"b2e024c8-c55f-0292-79b7-ae5c6d561e45",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_2/b2e024c8-c55f-0292-79b7-ae5c6d561e45",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_2",
                "event":{
                    "@id":"aab2f476-d408-11e5-b634-7c56075b6caa",
                    "@datetime":"Mon, 15 Feb 2016 17:22:19 GMT",
                    "@type":"page.tag:update",
                    "@language":"en-US",
                    "@journaled":"false",
                    "@version":"2",
                    "page":{"@id":"440","@revision":"0","path":"Category_2/Guide_3/Topic_2"},
                    "request":{"@id":"aab2f476-d408-11e5-b634-05934c41c248"},
                    "tags-added":"",
                    "tags-removed":{"tag":{"name":"test:b","type":"text"}}
                },
                "page":{"path":"Category_2/Guide_3/Topic_2"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"aab2f476-d408-11e5-b634-c248b6010000",
                "@datetime":"Mon, 15 Feb 2016 17:22:19 GMT",
                "@count":"4",
                "@detailid":"3619be2a-5272-2aa7-1850-4ae0fee8b934",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3/3619be2a-5272-2aa7-1850-4ae0fee8b934",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3",
                "event":{
                    "@id":"aab2f476-d408-11e5-b634-9edc91108e96",
                    "@datetime":"Mon, 15 Feb 2016 17:22:19 GMT",
                    "@type":"page.tag:update",
                    "@language":"en-US",
                    "@journaled":"false",
                    "@version":"2",
                    "page":{"@id":"438","@revision":"0","path":"Category_2/Guide_3"},
                    "request":{"@id":"aab2f476-d408-11e5-b634-05934c41c248"},
                    "tags-added":"",
                    "tags-removed":{"tag":{"name":"test:b","type":"text"}}
                },
                "page":{"path":"Category_2/Guide_3"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"aab2f476-d408-11e5-b634-c24840020000",
                "@datetime":"Mon, 15 Feb 2016 17:22:19 GMT",
                "@count":"4",
                "@detailid":"80eee285-6546-6f9f-1ffa-647d704b06ee",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTest_%2525232/80eee285-6546-6f9f-1ffa-647d704b06ee",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTest_%2525232",
                "event":{
                    "@id":"aab2f476-d408-11e5-b634-f607707f46cd",
                    "@datetime":"Mon, 15 Feb 2016 17:22:19 GMT",
                    "@type":"page.tag:update",
                    "@language":"en-US",
                    "@journaled":"false",
                    "@version":"2",
                    "page":{"@id":"576","@revision":"0","path":"Category_2/Guide_3/Test_%232"},
                    "request":{"@id":"aab2f476-d408-11e5-b634-05934c41c248"},
                    "tags-added":"",
                    "tags-removed":{"tag":{"name":"test:b","type":"text"}}
                },
                "page":{"path":"Category_2/Guide_3/Test_%232"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"7019e02c-c6de-11e5-ac20-36a049020000",
                "@datetime":"Fri, 29 Jan 2016 23:17:17 GMT",
                "@count":"6",
                "@detailid":"772beb62-b084-e2fa-fb1b-176414cdc05b",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title_4/772beb62-b084-e2fa-fb1b-176414cdc05b",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title_4",
                "event":{
                    "@id":"7019e02c-c6de-11e5-ac20-6ef1f621998b",
                    "@datetime":"Fri, 29 Jan 2016 23:17:17 GMT",
                    "@type":"page.tag:update",
                    "@language":"en-US",
                    "@journaled":"false",
                    "@version":"2",
                    "page":{"@id":"585","@revision":"0","path":"Category_1/Guide_1/Page_Title_4"},
                    "request":{"@id":"7019e02c-c6de-11e5-ac20-01cf715e36a0"},
                    "tags-added":{"tag":{"name":"foo1","type":"text"}},
                    "tags-removed":""
                },
                "page":{"path":"Category_1/Guide_1/Page_Title_4"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"d3f26562-bfc0-11e5-a2a5-bee247020000",
                "@datetime":"Wed, 20 Jan 2016 21:57:41 GMT",
                "@count":"1",
                "@detailid":"f0160afa-5de3-4e84-baa9-acdf4be213c6",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Page_Title_2/f0160afa-5de3-4e84-baa9-acdf4be213c6",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Page_Title_2",
                "event":{
                    "@id":"d3f26562-bfc0-11e5-a2a5-94327adcf48b",
                    "@datetime":"Wed, 20 Jan 2016 21:57:41 GMT",
                    "@type":"page:copy",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "@cascading":"false",
                    "diff":{"added":"8","attributes":"0","removed":"0","structural":"0"},
                    "page":{"@id":"583","@revision":"0","path":"Page_Title_2"},
                    "request":{"@id":"d3f26562-bfc0-11e5-a2a5-c37bc5eabee2"},
                    "root.page":{"@id":"583","@revision":"0","path":"Page_Title_2"},
                    "source.page":{"@id":"564","@revision":"0","path":"Category_1/Guide_1/Page_Title_2"}
                },
                "page":{"path":"Page_Title_2"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"1b9f9f6a-bf9e-11e5-aadf-c3b634020000",
                "@datetime":"Wed, 20 Jan 2016 17:49:09 GMT",
                "@count":"2",
                "@detailid":"453b5e3c-c249-b097-3f68-382077e4a91b",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title_2/453b5e3c-c249-b097-3f68-382077e4a91b",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title_2",
                "event":{
                    "@id":"1b9f9f6a-bf9e-11e5-aadf-6ed694e789d6",
                    "@datetime":"Wed, 20 Jan 2016 17:49:09 GMT",
                    "@type":"page.restriction:update",
                    "@language":"en-US",
                    "@journaled":"false",
                    "@version":"2",
                    "@cascading":"false",
                    "page":{"@id":"564","@revision":"0","path":"Category_1/Guide_1/Page_Title_2"},
                    "previous.restriction-id":"1",
                    "request":{"@id":"1b9f9f6a-bf9e-11e5-aadf-b299e82bc3b6"},
                    "restriction-id":"3",
                    "root.page":{"@id":"564","@revision":"0","path":"Category_1/Guide_1/Page_Title_2"}
                },
                "page":{"path":"Category_1/Guide_1/Page_Title_2"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"f1ac5da6-bf9d-11e5-a69d-91d239020000",
                "@datetime":"Wed, 20 Jan 2016 17:47:59 GMT",
                "@count":"1",
                "@detailid":"4af8db5a-f8a3-5fca-fd48-ccf3bbf732aa",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title_3/4af8db5a-f8a3-5fca-fd48-ccf3bbf732aa",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title_3",
                "event":{
                    "@id":"f1ac5da6-bf9d-11e5-a69d-91d4831c1171",
                    "@datetime":"Wed, 20 Jan 2016 17:47:59 GMT",
                    "@type":"attachment:move",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "file":{"@id":"122","@res-id":"1143","@revision":"3","@size":"966020","filename":"2015-07-02.jpg","location":"site_1/114/3.res/2.bin"},
                    "page":{"@id":"569","@revision":"0","path":"Category_1/Guide_1/Page_Title_3"},
                    "request":{"@id":"f1ac5da6-bf9d-11e5-a69d-62fe1b3891d2"},
                    "source.file":{"@id":"122","@res-id":"1143","@revision":"2","@size":"966020","filename":"2015-07-02.jpg","location":"site_1/114/3.res/2.bin"},
                    "source.page":{"@id":"564","@revision":"0","path":"Category_1/Guide_1/Page_Title_2"}
                },
                "page":{"path":"Category_1/Guide_1/Page_Title_3"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"d5b6e6fc-bf0c-11e5-bc26-a515a6010000",
                "@datetime":"Wed, 20 Jan 2016 00:29:15 GMT",
                "@count":"1",
                "@detailid":"2dbb9ca0-65d1-2cd6-fe2e-3cd17fe0da8b",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FTopic_1%252FGuide_Under_Topic/2dbb9ca0-65d1-2cd6-fe2e-3cd17fe0da8b",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FTopic_1%252FGuide_Under_Topic",
                "event":{
                    "@id":"d5b6e6fc-bf0c-11e5-bc26-ce941552fdf0",
                    "@datetime":"Wed, 20 Jan 2016 00:29:15 GMT",
                    "@type":"attachment:move",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "file":{"@id":"159","@res-id":"1321","@revision":"2","@size":"50802","filename":"42nd.xml","location":"site_1/132/1.res/1.bin"},
                    "page":{"@id":"422","@revision":"0","path":"Category_1/Guide_1/Topic_1/Guide_Under_Topic"},
                    "request":{"@id":"d5b6e6fc-bf0c-11e5-bc26-692d3ccba515"},
                    "source.file":{"@id":"159","@res-id":"1321","@revision":"1","@size":"50802","filename":"42nd.xml","location":"site_1/132/1.res/1.bin"},
                    "source.page":{"@id":"543","@revision":"0","path":"Category_1/Guide_1/Topic_1/Topic_1.1"}
                },
                "page":{"path":"Category_1/Guide_1/Topic_1/Guide_Under_Topic"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"d5b6e6fc-bf0c-11e5-bc26-a5151f020000",
                "@datetime":"Wed, 20 Jan 2016 00:29:15 GMT",
                "@count":"2",
                "@detailid":"9e178145-973d-866b-2b46-a549fc4d87c3",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FTopic_1%252FTopic_1.1/9e178145-973d-866b-2b46-a549fc4d87c3",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FTopic_1%252FTopic_1.1",
                "event":{
                    "@id":"d5b6e6fc-bf0c-11e5-bc26-ce941552fdf0",
                    "@datetime":"Wed, 20 Jan 2016 00:29:15 GMT",
                    "@type":"attachment:move",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "@move-source":"true",
                    "file":{"@id":"159","@res-id":"1321","@revision":"2","@size":"50802","filename":"42nd.xml","location":"site_1/132/1.res/1.bin"},
                    "page":{"@id":"422","@revision":"0","path":"Category_1/Guide_1/Topic_1/Guide_Under_Topic"},
                    "request":{"@id":"d5b6e6fc-bf0c-11e5-bc26-692d3ccba515"},
                    "source.file":{"@id":"159","@res-id":"1321","@revision":"1","@size":"50802","filename":"42nd.xml","location":"site_1/132/1.res/1.bin"},
                    "source.page":{"@id":"543","@revision":"0","path":"Category_1/Guide_1/Topic_1/Topic_1.1"}
                },
                "page":{"path":"Category_1/Guide_1/Topic_1/Topic_1.1"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"7a8efe18-bf0c-11e5-983e-fdc95a010000",
                "@datetime":"Wed, 20 Jan 2016 00:26:42 GMT",
                "@count":"1",
                "@detailid":"023b365d-9739-e8e4-e5b8-a4f90608e7f1",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title%252FBLANK!!/023b365d-9739-e8e4-e5b8-a4f90608e7f1",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title%252FBLANK!!",
                "event":{
                    "@id":"7a8efe18-bf0c-11e5-983e-87966b230397",
                    "@datetime":"Wed, 20 Jan 2016 00:26:42 GMT",
                    "@type":"attachment:move",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "file":{"@id":"61","@res-id":"311","@revision":"2","@size":"2612931","filename":"LPP_std.png","location":"site_1/311.res/1.bin"},
                    "page":{"@id":"346","@revision":"0","path":"Category_1/Guide_1/Page_Title/BLANK!!"},
                    "request":{"@id":"7a8efe18-bf0c-11e5-983e-7fec9173fdc9"},
                    "source.file":{"@id":"61","@res-id":"311","@revision":"1","@size":"2612931","filename":"LPP_std.png","location":"site_1/311.res/1.bin"},
                    "source.page":{"@id":"344","@revision":"0","path":"Category_1/Guide_1/Page_Title"}
                },
                "page":{"path":"Category_1/Guide_1/Page_Title/BLANK!!"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"7a8efe18-bf0c-11e5-983e-fdc958010000",
                "@datetime":"Wed, 20 Jan 2016 00:26:42 GMT",
                "@count":"1",
                "@detailid":"985931fd-1fd4-7cef-1b31-0d2bcccaaf7a",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title/985931fd-1fd4-7cef-1b31-0d2bcccaaf7a",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title",
                "event":{
                    "@id":"7a8efe18-bf0c-11e5-983e-87966b230397",
                    "@datetime":"Wed, 20 Jan 2016 00:26:42 GMT",
                    "@type":"attachment:move",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "@move-source":"true",
                    "file":{"@id":"61","@res-id":"311","@revision":"2","@size":"2612931","filename":"LPP_std.png","location":"site_1/311.res/1.bin"},
                    "page":{"@id":"346","@revision":"0","path":"Category_1/Guide_1/Page_Title/BLANK!!"},
                    "request":{"@id":"7a8efe18-bf0c-11e5-983e-7fec9173fdc9"},
                    "source.file":{"@id":"61","@res-id":"311","@revision":"1","@size":"2612931","filename":"LPP_std.png","location":"site_1/311.res/1.bin"},
                    "source.page":{"@id":"344","@revision":"0","path":"Category_1/Guide_1/Page_Title"}
                },
                "page":{"path":"Category_1/Guide_1/Page_Title"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"df3d265a-bef3-11e5-9a66-f1d9b9010000",
                "@datetime":"Tue, 19 Jan 2016 21:30:33 GMT",
                "@count":"5",
                "@detailid":"ce482d3d-1d53-2db0-b0d2-07415198cfde",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_3/ce482d3d-1d53-2db0-b0d2-07415198cfde",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_3",
                "event":{
                    "@id":"df3d265a-bef3-11e5-9a66-e2ac93b7cb07",
                    "@datetime":"Tue, 19 Jan 2016 21:30:33 GMT",
                    "@type":"attachment:create",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "file":{"@id":"158","@res-id":"1320","@revision":"1","@size":"1371173","filename":"IMG_20151123_201817.jpg","location":"site_1/132/0.res/1.bin"},
                    "page":{"@id":"441","@revision":"0","path":"Category_2/Guide_3/Topic_3"},
                    "request":{"@id":"df3d265a-bef3-11e5-9a66-da4e836ef1d9"}
                },
                "page":{"path":"Category_2/Guide_3/Topic_3"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"8611103e-bed3-11e5-be50-e20ca5010000",
                "@datetime":"Tue, 19 Jan 2016 17:39:00 GMT",
                "@count":"11",
                "@detailid":"89c3be30-743d-547e-47c3-4f0e856e3af7",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FTopic_1/89c3be30-743d-547e-47c3-4f0e856e3af7",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FTopic_1",
                "event":{
                    "@id":"8611103e-bed3-11e5-be50-0220a4d4927a",
                    "@datetime":"Tue, 19 Jan 2016 17:39:00 GMT",
                    "@type":"attachment:delete",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "file":{"@id":"152","@res-id":"1314","@revision":"2","@size":"10293915","filename":"baby1.png","location":"site_1/131/4.res/1.bin"},
                    "page":{"@id":"421","@revision":"0","path":"Category_1/Guide_1/Topic_1"},
                    "request":{"@id":"8611103e-bed3-11e5-be50-4af09957e20c"}
                },
                "page":{"path":"Category_1/Guide_1/Topic_1"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"24b00a0a-be3f-11e5-8a4a-2b01a5010000",
                "@datetime":"Mon, 18 Jan 2016 23:56:51 GMT",
                "@count":"2",
                "@detailid":"adb326d9-b6ec-b672-c29a-5471a83fb8cc",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FTopic_1/adb326d9-b6ec-b672-c29a-5471a83fb8cc",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FTopic_1",
                "event":{
                    "@id":"24b00a0a-be3f-11e5-8a4a-b66c28d24c23",
                    "@datetime":"Mon, 18 Jan 2016 23:56:51 GMT",
                    "@type":"attachment:create",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "file":{"@id":"149","@res-id":"1311","@revision":"1","@size":"1809319","filename":"IMG_20160114_070539.jpg","location":"site_1/131/1.res/1.bin"},
                    "page":{"@id":"421","@revision":"0","path":"Category_1/Guide_1/Topic_1"},
                    "request":{"@id":"24b00a0a-be3f-11e5-8a4a-e813b5cc2b01"}
                },
                "page":{"path":"Category_1/Guide_1/Topic_1"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"d42d17f8-b8b2-11e5-b857-131134020000",
                "@datetime":"Mon, 11 Jan 2016 22:29:50 GMT",
                "@count":"4",
                "@detailid":"c6607f8e-428c-2549-dfb2-703683a46ec7",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title_2/c6607f8e-428c-2549-dfb2-703683a46ec7",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title_2",
                "event":{
                    "@id":"d42d17f8-b8b2-11e5-b857-03f8fff87eb2",
                    "@datetime":"Mon, 11 Jan 2016 22:29:50 GMT",
                    "@type":"page.content:update",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "change-comment":"",
                    "diff":{"added":"0","attributes":"1","removed":"14","structural":"2"},
                    "page":{"@id":"564","@revision":"0","path":"Category_1/Guide_1/Page_Title_2"},
                    "request":{"@id":"d42d17f8-b8b2-11e5-b857-ca9ecd111311"},
                    "revision":"7"
                },
                "page":{"path":"Category_1/Guide_1/Page_Title_2"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"344d8386-b668-11e5-86c3-9a5820010000",
                "@datetime":"Sat, 09 Jan 2016 00:30:37 GMT",
                "@count":"4",
                "@detailid":"4d06c955-0adb-f556-f8fe-51ab7f6b490d",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Acme_Jetpack_User_Guide%252F005_-_Safety_Features/4d06c955-0adb-f556-f8fe-51ab7f6b490d",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Acme_Jetpack_User_Guide%252F005_-_Safety_Features",
                "event":{
                    "@id":"344d8386-b668-11e5-86c3-f9aab9af7f8a",
                    "@datetime":"Sat, 09 Jan 2016 00:30:37 GMT",
                    "@type":"attachment:create",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "file":{"@id":"147","@res-id":"1309","@revision":"1","@size":"1945724","filename":"Medley_Reels.mp4","location":"site_1/130/9.res/1.bin"},
                    "page":{"@id":"288","@revision":"0","path":"Acme_Jetpack_User_Guide/005_-_Safety_Features"},
                    "request":{"@id":"344d8386-b668-11e5-86c3-a12bfe529a58"}
                },
                "page":{"path":"Acme_Jetpack_User_Guide/005_-_Safety_Features"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"b7beb0da-b593-11e5-9af0-44f439020000",
                "@datetime":"Thu, 07 Jan 2016 23:09:35 GMT",
                "@count":"5","@detailid":"bbb53b90-79ba-9397-0b8d-f1a20aeca4d7",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title_3/bbb53b90-79ba-9397-0b8d-f1a20aeca4d7",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_1%252FGuide_1%252FPage_Title_3",
                "event":{
                    "@id":"b7beb0da-b593-11e5-9af0-1831901e89a9",
                    "@datetime":"Thu, 07 Jan 2016 23:09:35 GMT",
                    "@type":"attachment:create",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "file":{"@id":"143","@res-id":"1305","@revision":"1","@size":"1945724","filename":"Medley_Reels.mp4","location":"site_1/130/5.res/1.bin"},
                    "page":{"@id":"569","@revision":"0","path":"Category_1/Guide_1/Page_Title_3"},
                    "request":{"@id":"b7beb0da-b593-11e5-9af0-cb08d0c644f4"}
                },
                "page":{"path":"Category_1/Guide_1/Page_Title_3"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"546eb43a-b58e-11e5-baf4-9e72b6010000",
                "@datetime":"Thu, 07 Jan 2016 22:31:01 GMT",
                "@count":"3",
                "@detailid":"dfa55d03-9ec9-efd4-c0d8-12cd2687148b",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3/dfa55d03-9ec9-efd4-c0d8-12cd2687148b",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3",
                "event":{
                    "@id":"546eb43a-b58e-11e5-baf4-78c2d8dc1725",
                    "@datetime":"Thu, 07 Jan 2016 22:31:01 GMT",
                    "@type":"page.property:update",
                    "@language":"en-US",
                    "@journaled":"true",
                    "@version":"2",
                    "page":{"@id":"438","@revision":"0","path":"Category_2/Guide_3"},
                    "property":{"id":"327","name":"mindtouch#idf.guideTabs"},
                    "request":{"@id":"546eb43a-b58e-11e5-baf4-d04616849e72"}
                },
                "page":{"path":"Category_2/Guide_3"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"43248bd2-b58e-11e5-92cb-26ee51010000",
                "@datetime":"Thu, 07 Jan 2016 22:30:32 GMT",
                "@count":"3",
                "@detailid":"59687452-9776-c605-03fd-44c4fb32fff5",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2/59687452-9776-c605-03fd-44c4fb32fff5",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2",
                "event":{
                    "@id":"43248bd2-b58e-11e5-92cb-b3c2c0bd1d98",
                    "@datetime":"Thu, 07 Jan 2016 22:30:32 GMT",
                    "@type":"page.tag:update",
                    "@language":"en-US",
                    "@journaled":"false",
                    "@version":"2",
                    "page":{"@id":"337","@revision":"0","path":"Category_2"},
                    "request":{"@id":"43248bd2-b58e-11e5-92cb-4d587f5626ee"},
                    "tags-added":{"tag":{"name":"foo","type":"text"}},
                    "tags-removed":""
                },
                "page":{"path":"Category_2"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"3f90bb30-b58e-11e5-b0fb-40b8b9010000",
                "@datetime":"Thu, 07 Jan 2016 22:30:26 GMT",
                "@count":"1",
                "@detailid":"f0b84a67-1593-ab5b-99fd-432f4cee4012",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_3/f0b84a67-1593-ab5b-99fd-432f4cee4012",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_3",
                "event":{
                    "@id":"3f90bb30-b58e-11e5-b0fb-74f2245ce5d8",
                    "@datetime":"Thu, 07 Jan 2016 22:30:26 GMT",
                    "@type":"page.tag:update",
                    "@language":"en-US",
                    "@journaled":"false",
                    "@version":"2",
                    "page":{"@id":"441","@revision":"0","path":"Category_2/Guide_3/Topic_3"},
                    "request":{"@id":"3f90bb30-b58e-11e5-b0fb-d1bfd1d840b8"},
                    "tags-added":{"tag":{"name":"test:a","type":"text"}},
                    "tags-removed":""
                },
                "page":{"path":"Category_2/Guide_3/Topic_3"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"3f90bb30-b58e-11e5-b0fb-40b8b8010000",
                "@datetime":"Thu, 07 Jan 2016 22:30:26 GMT",
                "@count":"1",
                "@detailid":"06b1a083-cd73-f302-c5b8-72102640d672",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_2/06b1a083-cd73-f302-c5b8-72102640d672",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_2",
                "event":{
                    "@id":"3f90bb30-b58e-11e5-b0fb-c9ffc09d00a3",
                    "@datetime":"Thu, 07 Jan 2016 22:30:26 GMT",
                    "@type":"page.tag:update",
                    "@language":"en-US",
                    "@journaled":"false",
                    "@version":"2",
                    "page":{"@id":"440","@revision":"0","path":"Category_2/Guide_3/Topic_2"},
                    "request":{"@id":"3f90bb30-b58e-11e5-b0fb-d1bfd1d840b8"},
                    "tags-added":{"tag":{"name":"test:a","type":"text"}},
                    "tags-removed":""
                },
                "page":{"path":"Category_2/Guide_3/Topic_2"},
                "users":{"user":{"@id":"1"}}
            },
            {
                "@id":"3f90bb30-b58e-11e5-b0fb-40b8b7010000",
                "@datetime":"Thu, 07 Jan 2016 22:30:26 GMT",
                "@count":"1","@detailid":"603ed35d-a8a1-8307-eec2-dcd8275e2304",
                "@uri.detail":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_1/603ed35d-a8a1-8307-eec2-dcd8275e2304",
                "@uri.hierarchy":"https://marsdev.mindtouch.dev/@api/deki/events/page-hierarchy/=Category_2%252FGuide_3%252FTopic_1",
                "event":{
                    "@id":"3f90bb30-b58e-11e5-b0fb-0b1068cd73ad",
                    "@datetime":"Thu, 07 Jan 2016 22:30:26 GMT",
                    "@type":"page.tag:update",
                    "@language":"en-US",
                    "@journaled":"false",
                    "@version":"2",
                    "page":{"@id":"439","@revision":"0","path":"Category_2/Guide_3/Topic_1"},
                    "request":{"@id":"3f90bb30-b58e-11e5-b0fb-d1bfd1d840b8"},
                    "tags-added":{"tag":{"name":"test:a","type":"text"}},
                    "tags-removed":""
                },
                "page":{"path":"Category_2/Guide_3/Topic_1"},
                "users":{"user":{"@id":"1"}}
            }
        ]
    },
    availableLogs: {
        "log":[
            {
                "@complete":"false",
                "modified":"Fri, 02 Dec 2016 09:28:26 GMT",
                "month":"2016-12",
                "name":"helprequests-2016-12-000.gz"
            },
            {
                "@complete":"true",
                "modified":"Thu, 01 Dec 2016 09:09:58 GMT",
                "month":"2016-11",
                "name":"helprequests-2016-11-000.gz"
            },
            {
                "@complete":"true",
                "modified":"Thu, 24 Nov 2016 09:55:11 GMT",
                "month":"2016-10",
                "name":"helprequests-2016-10-000.gz"
            }
        ]}
};

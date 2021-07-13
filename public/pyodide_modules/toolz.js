var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="toolz.data";var REMOTE_PACKAGE_BASE="toolz.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","toolz",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/toolz","sandbox",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/toolz","curried",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/toolz","tests",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","tlz",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","toolz-0.11.1-py3.8.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:96320,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1410,2404,3491,4674,5626,6707,8109,9242,10498,11823,13185,14190,15196,16105,17036,18343,19207,20394,21719,22989,24275,25279,26385,27386,28622,29886,31141,32316,33731,34932,35862,37191,38443,39665,40456,41273,42282,42919,43379,43942,45141,46118,46815,48246,49574,50914,52363,53663,54614,55704,56452,57213,58104,58610,59207,59951,60738,61377,62570,63578,64360,65101,66240,67246,68381,69494,70257,71192,72156,73301,74269,75176,76014,77055,78086,79241,80318,81398,82379,83330,84198,85098,86119,87063,88075,88803,89746,90758,91786,93102,94319,95520],sizes:[1410,994,1087,1183,952,1081,1402,1133,1256,1325,1362,1005,1006,909,931,1307,864,1187,1325,1270,1286,1004,1106,1001,1236,1264,1255,1175,1415,1201,930,1329,1252,1222,791,817,1009,637,460,563,1199,977,697,1431,1328,1340,1449,1300,951,1090,748,761,891,506,597,744,787,639,1193,1008,782,741,1139,1006,1135,1113,763,935,964,1145,968,907,838,1041,1031,1155,1077,1080,981,951,868,900,1021,944,1012,728,943,1012,1028,1316,1217,1201,800],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_toolz.data")}Module["addRunDependency"]("datafile_toolz.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/toolz/recipes.py",start:0,end:1256,audio:0},{filename:"/lib/python3.8/site-packages/toolz/functoolz.py",start:1256,end:30997,audio:0},{filename:"/lib/python3.8/site-packages/toolz/dicttoolz.py",start:30997,end:39923,audio:0},{filename:"/lib/python3.8/site-packages/toolz/itertoolz.py",start:39923,end:67531,audio:0},{filename:"/lib/python3.8/site-packages/toolz/_signatures.py",start:67531,end:87987,audio:0},{filename:"/lib/python3.8/site-packages/toolz/utils.py",start:87987,end:88126,audio:0},{filename:"/lib/python3.8/site-packages/toolz/compatibility.py",start:88126,end:89109,audio:0},{filename:"/lib/python3.8/site-packages/toolz/__init__.py",start:89109,end:89490,audio:0},{filename:"/lib/python3.8/site-packages/toolz/_version.py",start:89490,end:89988,audio:0},{filename:"/lib/python3.8/site-packages/toolz/sandbox/core.py",start:89988,end:94324,audio:0},{filename:"/lib/python3.8/site-packages/toolz/sandbox/parallel.py",start:94324,end:97111,audio:0},{filename:"/lib/python3.8/site-packages/toolz/sandbox/__init__.py",start:97111,end:97179,audio:0},{filename:"/lib/python3.8/site-packages/toolz/curried/exceptions.py",start:97179,end:97516,audio:0},{filename:"/lib/python3.8/site-packages/toolz/curried/__init__.py",start:97516,end:100216,audio:0},{filename:"/lib/python3.8/site-packages/toolz/curried/operator.py",start:100216,end:100706,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_serialization.py",start:100706,end:106497,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_inspect_args.py",start:106497,end:122465,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_dicttoolz.py",start:122465,end:131535,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_curried_doctests.py",start:131535,end:131809,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_curried.py",start:131809,end:135456,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_signatures.py",start:135456,end:138329,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_compatibility.py",start:138329,end:138355,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_functoolz.py",start:138355,end:158560,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_recipes.py",start:158560,end:159380,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_tlz.py",start:159380,end:160973,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_itertoolz.py",start:160973,end:179130,audio:0},{filename:"/lib/python3.8/site-packages/toolz/tests/test_utils.py",start:179130,end:179286,audio:0},{filename:"/lib/python3.8/site-packages/tlz/_build_tlz.py",start:179286,end:182698,audio:0},{filename:"/lib/python3.8/site-packages/tlz/__init__.py",start:182698,end:183036,audio:0},{filename:"/lib/python3.8/site-packages/toolz-0.11.1-py3.8.egg-info/PKG-INFO",start:183036,end:189100,audio:0},{filename:"/lib/python3.8/site-packages/toolz-0.11.1-py3.8.egg-info/dependency_links.txt",start:189100,end:189101,audio:0},{filename:"/lib/python3.8/site-packages/toolz-0.11.1-py3.8.egg-info/top_level.txt",start:189101,end:189111,audio:0},{filename:"/lib/python3.8/site-packages/toolz-0.11.1-py3.8.egg-info/not-zip-safe",start:189111,end:189112,audio:0},{filename:"/lib/python3.8/site-packages/toolz-0.11.1-py3.8.egg-info/SOURCES.txt",start:189112,end:190045,audio:0}],remote_package_size:100416,package_uuid:"4634cd6b-46b9-4f1e-88fe-7f524227ade6"})})();
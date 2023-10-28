// import {
// 	AnimationClip,
// 	Bone,
// 	Box3,
// 	BufferAttribute,
// 	BufferGeometry,
// 	ClampToEdgeWrapping,
// 	Color,
// 	ColorManagement,
// 	DirectionalLight,
// 	DoubleSide,
// 	FileLoader,
// 	FrontSide,
// 	Group,
// 	ImageBitmapLoader,
// 	InstancedMesh,
// 	InterleavedBuffer,
// 	InterleavedBufferAttribute,
// 	Interpolant,
// 	InterpolateDiscrete,
// 	InterpolateLinear,
// 	Line,
// 	LineBasicMaterial,
// 	LineLoop,
// 	LineSegments,
// 	LinearFilter,
// 	LinearMipmapLinearFilter,
// 	LinearMipmapNearestFilter,
// 	LinearSRGBColorSpace,
// 	Loader,
// 	LoaderUtils,
// 	Material,
// 	MathUtils,
// 	Matrix4,
// 	Mesh,
// 	MeshBasicMaterial,
// 	MeshPhysicalMaterial,
// 	MeshStandardMaterial,
// 	MirroredRepeatWrapping,
// 	NearestFilter,
// 	NearestMipmapLinearFilter,
// 	NearestMipmapNearestFilter,
// 	NumberKeyframeTrack,
// 	Object3D,
// 	OrthographicCamera,
// 	PerspectiveCamera,
// 	PointLight,
// 	Points,
// 	PointsMaterial,
// 	PropertyBinding,
// 	Quaternion,
// 	QuaternionKeyframeTrack,
// 	RepeatWrapping,
// 	Skeleton,
// 	SkinnedMesh,
// 	Sphere,
// 	SpotLight,
// 	Texture,
// 	TextureLoader,
// 	TriangleFanDrawMode,
// 	TriangleStripDrawMode,
// 	Vector2,
// 	Vector3,
// 	VectorKeyframeTrack,
// 	SRGBColorSpace,
// 	InstancedBufferAttribute
// } from 'three';

// import { toTrianglesDrawMode } from '../utils/BufferGeometryUtils.js';

// class GLTFLoader extends Loader {

// 	constructor( manager ) {

// 		super( manager );

// 		this.dracoLoader = null;
// 		this.ktx2Loader = null;
// 		this.meshoptDecoder = null;

// 		this.pluginCallbacks = [];

// 		this.register( function ( parser ) {

// 			return new GLTFMaterialsClearcoatExtension( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFTextureBasisUExtension( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFTextureWebPExtension( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFTextureAVIFExtension( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFMaterialsSheenExtension( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFMaterialsTransmissionExtension( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFMaterialsVolumeExtension( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFMaterialsIorExtension( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFMaterialsEmissiveStrengthExtension( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFMaterialsSpecularExtension( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFMaterialsIridescenceExtension( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFMaterialsAnisotropyExtension( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFLightsExtension( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFMeshoptCompression( parser );

// 		} );

// 		this.register( function ( parser ) {

// 			return new GLTFMeshGpuInstancing( parser );

// 		} );

// 	}

// 	load( url, onLoad, onProgress, onError ) {

// 		const scope = this;

// 		let resourcePath;

// 		if ( this.resourcePath !== '' ) {

// 			resourcePath = this.resourcePath;

// 		} else if ( this.path !== '' ) {

// 			resourcePath = this.path;

// 		} else {

// 			resourcePath = LoaderUtils.extractUrlBase( url );

// 		}

// 		// Tells the LoadingManager to track an extra item, which resolves after
// 		// the model is fully loaded. This means the count of items loaded will
// 		// be incorrect, but ensures manager.onLoad() does not fire early.
// 		this.manager.itemStart( url );

// 		const _onError = function ( e ) {

// 			if ( onError ) {

// 				onError( e );

// 			} else {

// 				console.error( e );

// 			}

// 			scope.manager.itemError( url );
// 			scope.manager.itemEnd( url );

// 		};

// 		const loader = new FileLoader( this.manager );

// 		loader.setPath( this.path );
// 		loader.setResponseType( 'arraybuffer' );
// 		loader.setRequestHeader( this.requestHeader );
// 		loader.setWithCredentials( this.withCredentials );

// 		loader.load( url, function ( data ) {

// 			try {

// 				scope.parse( data, resourcePath, function ( gltf ) {

// 					onLoad( gltf );

// 					scope.manager.itemEnd( url );

// 				}, _onError );

// 			} catch ( e ) {

// 				_onError( e );

// 			}

// 		}, onProgress, _onError );

// 	}

// 	setDRACOLoader( dracoLoader ) {

// 		this.dracoLoader = dracoLoader;
// 		return this;

// 	}

// 	setDDSLoader() {

// 		throw new Error(

// 			'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'

// 		);

// 	}

// 	setKTX2Loader( ktx2Loader ) {

// 		this.ktx2Loader = ktx2Loader;
// 		return this;

// 	}

// 	setMeshoptDecoder( meshoptDecoder ) {

// 		this.meshoptDecoder = meshoptDecoder;
// 		return this;

// 	}

// 	register( callback ) {

// 		if ( this.pluginCallbacks.indexOf( callback ) === - 1 ) {

// 			this.pluginCallbacks.push( callback );

// 		}

// 		return this;

// 	}

// 	unregister( callback ) {

// 		if ( this.pluginCallbacks.indexOf( callback ) !== - 1 ) {

// 			this.pluginCallbacks.splice( this.pluginCallbacks.indexOf( callback ), 1 );

// 		}

// 		return this;

// 	}

// 	parse( data, path, onLoad, onError ) {

// 		let json;
// 		const extensions = {};
// 		const plugins = {};
// 		const textDecoder = new TextDecoder();

// 		if ( typeof data === 'string' ) {

// 			json = JSON.parse( data );

// 		} else if ( data instanceof ArrayBuffer ) {

// 			const magic = textDecoder.decode( new Uint8Array( data, 0, 4 ) );

// 			if ( magic === BINARY_EXTENSION_HEADER_MAGIC ) {

// 				try {

// 					extensions[ EXTENSIONS.KHR_BINARY_GLTF ] = new GLTFBinaryExtension( data );

// 				} catch ( error ) {

// 					if ( onError ) onError( error );
// 					return;

// 				}

// 				json = JSON.parse( extensions[ EXTENSIONS.KHR_BINARY_GLTF ].content );

// 			} else {

// 				json = JSON.parse( textDecoder.decode( data ) );

// 			}

// 		} else {

// 			json = data;

// 		}

// 		if ( json.asset === undefined || json.asset.version[ 0 ] < 2 ) {

// 			if ( onError ) onError( new Error( 'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.' ) );
// 			return;

// 		}

// 		const parser = new GLTFParser( json, {

// 			path: path || this.resourcePath || '',
// 			crossOrigin: this.crossOrigin,
// 			requestHeader: this.requestHeader,
// 			manager: this.manager,
// 			ktx2Loader: this.ktx2Loader,
// 			meshoptDecoder: this.meshoptDecoder

// 		} );

// 		parser.fileLoader.setRequestHeader( this.requestHeader );

// 		for ( let i = 0; i < this.pluginCallbacks.length; i ++ ) {

// 			const plugin = this.pluginCallbacks[ i ]( parser );

// 			if ( ! plugin.name ) console.error( 'THREE.GLTFLoader: Invalid plugin found: missing name' );

// 			plugins[ plugin.name ] = plugin;

// 			// Workaround to avoid determining as unknown extension
// 			// in addUnknownExtensionsToUserData().
// 			// Remove this workaround if we move all the existing
// 			// extension handlers to plugin system
// 			extensions[ plugin.name ] = true;

// 		}

// 		if ( json.extensionsUsed ) {

// 			for ( let i = 0; i < json.extensionsUsed.length; ++ i ) {

// 				const extensionName = json.extensionsUsed[ i ];
// 				const extensionsRequired = json.extensionsRequired || [];

// 				switch ( extensionName ) {

// 					case EXTENSIONS.KHR_MATERIALS_UNLIT:
// 						extensions[ extensionName ] = new GLTFMaterialsUnlitExtension();
// 						break;

// 					case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
// 						extensions[ extensionName ] = new GLTFDracoMeshCompressionExtension( json, this.dracoLoader );
// 						break;

// 					case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
// 						extensions[ extensionName ] = new GLTFTextureTransformExtension();
// 						break;

// 					case EXTENSIONS.KHR_MESH_QUANTIZATION:
// 						extensions[ extensionName ] = new GLTFMeshQuantizationExtension();
// 						break;

// 					default:

// 						if ( extensionsRequired.indexOf( extensionName ) >= 0 && plugins[ extensionName ] === undefined ) {

// 							console.warn( 'THREE.GLTFLoader: Unknown extension "' + extensionName + '".' );

// 						}

// 				}

// 			}

// 		}

// 		parser.setExtensions( extensions );
// 		parser.setPlugins( plugins );
// 		parser.parse( onLoad, onError );

// 	}

// 	parseAsync( data, path ) {

// 		const scope = this;

// 		return new Promise( function ( resolve, reject ) {

// 			scope.parse( data, path, resolve, reject );

// 		} );

// 	}

// }

// /* GLTFREGISTRY */

// function GLTFRegistry() {

// 	let objects = {};

// 	return	{

// 		get: function ( key ) {

// 			return objects[ key ];

// 		},

// 		add: function ( key, object ) {

// 			objects[ key ] = object;

// 		},

// 		remove: function ( key ) {

// 			delete objects[ key ];

// 		},

// 		removeAll: function () {

// 			objects = {};

// 		}

// 	};

// }

// /*********************************/
// /********** EXTENSIONS ***********/
// /*********************************/

// const EXTENSIONS = {
// 	KHR_BINARY_GLTF: 'KHR_binary_glTF',
// 	KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
// 	KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
// 	KHR_MATERIALS_CLEARCOAT: 'KHR_materials_clearcoat',
// 	KHR_MATERIALS_IOR: 'KHR_materials_ior',
// 	KHR_MATERIALS_SHEEN: 'KHR_materials_sheen',
// 	KHR_MATERIALS_SPECULAR: 'KHR_materials_specular',
// 	KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
// 	KHR_MATERIALS_IRIDESCENCE: 'KHR_materials_iridescence',
// 	KHR_MATERIALS_ANISOTROPY: 'KHR_materials_anisotropy',
// 	KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
// 	KHR_MATERIALS_VOLUME: 'KHR_materials_volume',
// 	KHR_TEXTURE_BASISU: 'KHR_texture_basisu',
// 	KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
// 	KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
// 	KHR_MATERIALS_EMISSIVE_STRENGTH: 'KHR_materials_emissive_strength',
// 	EXT_TEXTURE_WEBP: 'EXT_texture_webp',
// 	EXT_TEXTURE_AVIF: 'EXT_texture_avif',
// 	EXT_MESHOPT_COMPRESSION: 'EXT_meshopt_compression',
// 	EXT_MESH_GPU_INSTANCING: 'EXT_mesh_gpu_instancing'
// };

// /**
//  * Punctual Lights Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
//  */
// class GLTFLightsExtension {

// 	constructor( parser ) {

// 		this.parser = parser;
// 		this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;

// 		// Object3D instance caches
// 		this.cache = { refs: {}, uses: {} };

// 	}

// 	_markDefs() {

// 		const parser = this.parser;
// 		const nodeDefs = this.parser.json.nodes || [];

// 		for ( let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

// 			const nodeDef = nodeDefs[ nodeIndex ];

// 			if ( nodeDef.extensions
// 					&& nodeDef.extensions[ this.name ]
// 					&& nodeDef.extensions[ this.name ].light !== undefined ) {

// 				parser._addNodeRef( this.cache, nodeDef.extensions[ this.name ].light );

// 			}

// 		}

// 	}

// 	_loadLight( lightIndex ) {

// 		const parser = this.parser;
// 		const cacheKey = 'light:' + lightIndex;
// 		let dependency = parser.cache.get( cacheKey );

// 		if ( dependency ) return dependency;

// 		const json = parser.json;
// 		const extensions = ( json.extensions && json.extensions[ this.name ] ) || {};
// 		const lightDefs = extensions.lights || [];
// 		const lightDef = lightDefs[ lightIndex ];
// 		let lightNode;

// 		const color = new Color( 0xffffff );

// 		if ( lightDef.color !== undefined ) color.setRGB( lightDef.color[ 0 ], lightDef.color[ 1 ], lightDef.color[ 2 ], LinearSRGBColorSpace );

// 		const range = lightDef.range !== undefined ? lightDef.range : 0;

// 		switch ( lightDef.type ) {

// 			case 'directional':
// 				lightNode = new DirectionalLight( color );
// 				lightNode.target.position.set( 0, 0, - 1 );
// 				lightNode.add( lightNode.target );
// 				break;

// 			case 'point':
// 				lightNode = new PointLight( color );
// 				lightNode.distance = range;
// 				break;

// 			case 'spot':
// 				lightNode = new SpotLight( color );
// 				lightNode.distance = range;
// 				// Handle spotlight properties.
// 				lightDef.spot = lightDef.spot || {};
// 				lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
// 				lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
// 				lightNode.angle = lightDef.spot.outerConeAngle;
// 				lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
// 				lightNode.target.position.set( 0, 0, - 1 );
// 				lightNode.add( lightNode.target );
// 				break;

// 			default:
// 				throw new Error( 'THREE.GLTFLoader: Unexpected light type: ' + lightDef.type );

// 		}

// 		// Some lights (e.g. spot) default to a position other than the origin. Reset the position
// 		// here, because node-level parsing will only override position if explicitly specified.
// 		lightNode.position.set( 0, 0, 0 );

// 		lightNode.decay = 2;

// 		assignExtrasToUserData( lightNode, lightDef );

// 		if ( lightDef.intensity !== undefined ) lightNode.intensity = lightDef.intensity;

// 		lightNode.name = parser.createUniqueName( lightDef.name || ( 'light_' + lightIndex ) );

// 		dependency = Promise.resolve( lightNode );

// 		parser.cache.add( cacheKey, dependency );

// 		return dependency;

// 	}

// 	getDependency( type, index ) {

// 		if ( type !== 'light' ) return;

// 		return this._loadLight( index );

// 	}

// 	createNodeAttachment( nodeIndex ) {

// 		const self = this;
// 		const parser = this.parser;
// 		const json = parser.json;
// 		const nodeDef = json.nodes[ nodeIndex ];
// 		const lightDef = ( nodeDef.extensions && nodeDef.extensions[ this.name ] ) || {};
// 		const lightIndex = lightDef.light;

// 		if ( lightIndex === undefined ) return null;

// 		return this._loadLight( lightIndex ).then( function ( light ) {

// 			return parser._getNodeRef( self.cache, lightIndex, light );

// 		} );

// 	}

// }

// /**
//  * Unlit Materials Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
//  */
// class GLTFMaterialsUnlitExtension {

// 	constructor() {

// 		this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;

// 	}

// 	getMaterialType() {

// 		return MeshBasicMaterial;

// 	}

// 	extendParams( materialParams, materialDef, parser ) {

// 		const pending = [];

// 		materialParams.color = new Color( 1.0, 1.0, 1.0 );
// 		materialParams.opacity = 1.0;

// 		const metallicRoughness = materialDef.pbrMetallicRoughness;

// 		if ( metallicRoughness ) {

// 			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

// 				const array = metallicRoughness.baseColorFactor;

// 				materialParams.color.setRGB( array[ 0 ], array[ 1 ], array[ 2 ], LinearSRGBColorSpace );
// 				materialParams.opacity = array[ 3 ];

// 			}

// 			if ( metallicRoughness.baseColorTexture !== undefined ) {

// 				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture, SRGBColorSpace ) );

// 			}

// 		}

// 		return Promise.all( pending );

// 	}

// }

// /**
//  * Materials Emissive Strength Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/blob/5768b3ce0ef32bc39cdf1bef10b948586635ead3/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md
//  */
// class GLTFMaterialsEmissiveStrengthExtension {

// 	constructor( parser ) {

// 		this.parser = parser;
// 		this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;

// 	}

// 	extendMaterialParams( materialIndex, materialParams ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

// 			return Promise.resolve();

// 		}

// 		const emissiveStrength = materialDef.extensions[ this.name ].emissiveStrength;

// 		if ( emissiveStrength !== undefined ) {

// 			materialParams.emissiveIntensity = emissiveStrength;

// 		}

// 		return Promise.resolve();

// 	}

// }

// /**
//  * Clearcoat Materials Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
//  */
// class GLTFMaterialsClearcoatExtension {

// 	constructor( parser ) {

// 		this.parser = parser;
// 		this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;

// 	}

// 	getMaterialType( materialIndex ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

// 		return MeshPhysicalMaterial;

// 	}

// 	extendMaterialParams( materialIndex, materialParams ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

// 			return Promise.resolve();

// 		}

// 		const pending = [];

// 		const extension = materialDef.extensions[ this.name ];

// 		if ( extension.clearcoatFactor !== undefined ) {

// 			materialParams.clearcoat = extension.clearcoatFactor;

// 		}

// 		if ( extension.clearcoatTexture !== undefined ) {

// 			pending.push( parser.assignTexture( materialParams, 'clearcoatMap', extension.clearcoatTexture ) );

// 		}

// 		if ( extension.clearcoatRoughnessFactor !== undefined ) {

// 			materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;

// 		}

// 		if ( extension.clearcoatRoughnessTexture !== undefined ) {

// 			pending.push( parser.assignTexture( materialParams, 'clearcoatRoughnessMap', extension.clearcoatRoughnessTexture ) );

// 		}

// 		if ( extension.clearcoatNormalTexture !== undefined ) {

// 			pending.push( parser.assignTexture( materialParams, 'clearcoatNormalMap', extension.clearcoatNormalTexture ) );

// 			if ( extension.clearcoatNormalTexture.scale !== undefined ) {

// 				const scale = extension.clearcoatNormalTexture.scale;

// 				materialParams.clearcoatNormalScale = new Vector2( scale, scale );

// 			}

// 		}

// 		return Promise.all( pending );

// 	}

// }

// /**
//  * Iridescence Materials Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_iridescence
//  */
// class GLTFMaterialsIridescenceExtension {

// 	constructor( parser ) {

// 		this.parser = parser;
// 		this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;

// 	}

// 	getMaterialType( materialIndex ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

// 		return MeshPhysicalMaterial;

// 	}

// 	extendMaterialParams( materialIndex, materialParams ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

// 			return Promise.resolve();

// 		}

// 		const pending = [];

// 		const extension = materialDef.extensions[ this.name ];

// 		if ( extension.iridescenceFactor !== undefined ) {

// 			materialParams.iridescence = extension.iridescenceFactor;

// 		}

// 		if ( extension.iridescenceTexture !== undefined ) {

// 			pending.push( parser.assignTexture( materialParams, 'iridescenceMap', extension.iridescenceTexture ) );

// 		}

// 		if ( extension.iridescenceIor !== undefined ) {

// 			materialParams.iridescenceIOR = extension.iridescenceIor;

// 		}

// 		if ( materialParams.iridescenceThicknessRange === undefined ) {

// 			materialParams.iridescenceThicknessRange = [ 100, 400 ];

// 		}

// 		if ( extension.iridescenceThicknessMinimum !== undefined ) {

// 			materialParams.iridescenceThicknessRange[ 0 ] = extension.iridescenceThicknessMinimum;

// 		}

// 		if ( extension.iridescenceThicknessMaximum !== undefined ) {

// 			materialParams.iridescenceThicknessRange[ 1 ] = extension.iridescenceThicknessMaximum;

// 		}

// 		if ( extension.iridescenceThicknessTexture !== undefined ) {

// 			pending.push( parser.assignTexture( materialParams, 'iridescenceThicknessMap', extension.iridescenceThicknessTexture ) );

// 		}

// 		return Promise.all( pending );

// 	}

// }

// /**
//  * Sheen Materials Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_sheen
//  */
// class GLTFMaterialsSheenExtension {

// 	constructor( parser ) {

// 		this.parser = parser;
// 		this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;

// 	}

// 	getMaterialType( materialIndex ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

// 		return MeshPhysicalMaterial;

// 	}

// 	extendMaterialParams( materialIndex, materialParams ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

// 			return Promise.resolve();

// 		}

// 		const pending = [];

// 		materialParams.sheenColor = new Color( 0, 0, 0 );
// 		materialParams.sheenRoughness = 0;
// 		materialParams.sheen = 1;

// 		const extension = materialDef.extensions[ this.name ];

// 		if ( extension.sheenColorFactor !== undefined ) {

// 			const colorFactor = extension.sheenColorFactor;
// 			materialParams.sheenColor.setRGB( colorFactor[ 0 ], colorFactor[ 1 ], colorFactor[ 2 ], LinearSRGBColorSpace );

// 		}

// 		if ( extension.sheenRoughnessFactor !== undefined ) {

// 			materialParams.sheenRoughness = extension.sheenRoughnessFactor;

// 		}

// 		if ( extension.sheenColorTexture !== undefined ) {

// 			pending.push( parser.assignTexture( materialParams, 'sheenColorMap', extension.sheenColorTexture, SRGBColorSpace ) );

// 		}

// 		if ( extension.sheenRoughnessTexture !== undefined ) {

// 			pending.push( parser.assignTexture( materialParams, 'sheenRoughnessMap', extension.sheenRoughnessTexture ) );

// 		}

// 		return Promise.all( pending );

// 	}

// }

// /**
//  * Transmission Materials Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_transmission
//  * Draft: https://github.com/KhronosGroup/glTF/pull/1698
//  */
// class GLTFMaterialsTransmissionExtension {

// 	constructor( parser ) {

// 		this.parser = parser;
// 		this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;

// 	}

// 	getMaterialType( materialIndex ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

// 		return MeshPhysicalMaterial;

// 	}

// 	extendMaterialParams( materialIndex, materialParams ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

// 			return Promise.resolve();

// 		}

// 		const pending = [];

// 		const extension = materialDef.extensions[ this.name ];

// 		if ( extension.transmissionFactor !== undefined ) {

// 			materialParams.transmission = extension.transmissionFactor;

// 		}

// 		if ( extension.transmissionTexture !== undefined ) {

// 			pending.push( parser.assignTexture( materialParams, 'transmissionMap', extension.transmissionTexture ) );

// 		}

// 		return Promise.all( pending );

// 	}

// }

// /**
//  * Materials Volume Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_volume
//  */
// class GLTFMaterialsVolumeExtension {

// 	constructor( parser ) {

// 		this.parser = parser;
// 		this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;

// 	}

// 	getMaterialType( materialIndex ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

// 		return MeshPhysicalMaterial;

// 	}

// 	extendMaterialParams( materialIndex, materialParams ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

// 			return Promise.resolve();

// 		}

// 		const pending = [];

// 		const extension = materialDef.extensions[ this.name ];

// 		materialParams.thickness = extension.thicknessFactor !== undefined ? extension.thicknessFactor : 0;

// 		if ( extension.thicknessTexture !== undefined ) {

// 			pending.push( parser.assignTexture( materialParams, 'thicknessMap', extension.thicknessTexture ) );

// 		}

// 		materialParams.attenuationDistance = extension.attenuationDistance || Infinity;

// 		const colorArray = extension.attenuationColor || [ 1, 1, 1 ];
// 		materialParams.attenuationColor = new Color().setRGB( colorArray[ 0 ], colorArray[ 1 ], colorArray[ 2 ], LinearSRGBColorSpace );

// 		return Promise.all( pending );

// 	}

// }

// /**
//  * Materials ior Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_ior
//  */
// class GLTFMaterialsIorExtension {

// 	constructor( parser ) {

// 		this.parser = parser;
// 		this.name = EXTENSIONS.KHR_MATERIALS_IOR;

// 	}

// 	getMaterialType( materialIndex ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

// 		return MeshPhysicalMaterial;

// 	}

// 	extendMaterialParams( materialIndex, materialParams ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

// 			return Promise.resolve();

// 		}

// 		const extension = materialDef.extensions[ this.name ];

// 		materialParams.ior = extension.ior !== undefined ? extension.ior : 1.5;

// 		return Promise.resolve();

// 	}

// }

// /**
//  * Materials specular Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_specular
//  */
// class GLTFMaterialsSpecularExtension {

// 	constructor( parser ) {

// 		this.parser = parser;
// 		this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;

// 	}

// 	getMaterialType( materialIndex ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

// 		return MeshPhysicalMaterial;

// 	}

// 	extendMaterialParams( materialIndex, materialParams ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

// 			return Promise.resolve();

// 		}

// 		const pending = [];

// 		const extension = materialDef.extensions[ this.name ];

// 		materialParams.specularIntensity = extension.specularFactor !== undefined ? extension.specularFactor : 1.0;

// 		if ( extension.specularTexture !== undefined ) {

// 			pending.push( parser.assignTexture( materialParams, 'specularIntensityMap', extension.specularTexture ) );

// 		}

// 		const colorArray = extension.specularColorFactor || [ 1, 1, 1 ];
// 		materialParams.specularColor = new Color().setRGB( colorArray[ 0 ], colorArray[ 1 ], colorArray[ 2 ], LinearSRGBColorSpace );

// 		if ( extension.specularColorTexture !== undefined ) {

// 			pending.push( parser.assignTexture( materialParams, 'specularColorMap', extension.specularColorTexture, SRGBColorSpace ) );

// 		}

// 		return Promise.all( pending );

// 	}

// }

// /**
//  * Materials anisotropy Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_anisotropy
//  */
// class GLTFMaterialsAnisotropyExtension {

// 	constructor( parser ) {

// 		this.parser = parser;
// 		this.name = EXTENSIONS.KHR_MATERIALS_ANISOTROPY;

// 	}

// 	getMaterialType( materialIndex ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

// 		return MeshPhysicalMaterial;

// 	}

// 	extendMaterialParams( materialIndex, materialParams ) {

// 		const parser = this.parser;
// 		const materialDef = parser.json.materials[ materialIndex ];

// 		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

// 			return Promise.resolve();

// 		}

// 		const pending = [];

// 		const extension = materialDef.extensions[ this.name ];

// 		if ( extension.anisotropyStrength !== undefined ) {

// 			materialParams.anisotropy = extension.anisotropyStrength;

// 		}

// 		if ( extension.anisotropyRotation !== undefined ) {

// 			materialParams.anisotropyRotation = extension.anisotropyRotation;

// 		}

// 		if ( extension.anisotropyTexture !== undefined ) {

// 			pending.push( parser.assignTexture( materialParams, 'anisotropyMap', extension.anisotropyTexture ) );

// 		}

// 		return Promise.all( pending );

// 	}

// }

// /**
//  * BasisU Texture Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_basisu
//  */
// class GLTFTextureBasisUExtension {

// 	constructor( parser ) {

// 		this.parser = parser;
// 		this.name = EXTENSIONS.KHR_TEXTURE_BASISU;

// 	}

// 	loadTexture( textureIndex ) {

// 		const parser = this.parser;
// 		const json = parser.json;

// 		const textureDef = json.textures[ textureIndex ];

// 		if ( ! textureDef.extensions || ! textureDef.extensions[ this.name ] ) {

// 			return null;

// 		}

// 		const extension = textureDef.extensions[ this.name ];
// 		const loader = parser.options.ktx2Loader;

// 		if ( ! loader ) {

// 			if ( json.extensionsRequired && json.extensionsRequired.indexOf( this.name ) >= 0 ) {

// 				throw new Error( 'THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures' );

// 			} else {

// 				// Assumes that the extension is optional and that a fallback texture is present
// 				return null;

// 			}

// 		}

// 		return parser.loadTextureImage( textureIndex, extension.source, loader );

// 	}

// }

// /**
//  * WebP Texture Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_webp
//  */
// class GLTFTextureWebPExtension {

// 	constructor( parser ) {

// 		this.parser = parser;
// 		this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
// 		this.isSupported = null;

// 	}

// 	loadTexture( textureIndex ) {

// 		const name = this.name;
// 		const parser = this.parser;
// 		const json = parser.json;

// 		const textureDef = json.textures[ textureIndex ];

// 		if ( ! textureDef.extensions || ! textureDef.extensions[ name ] ) {

// 			return null;

// 		}

// 		const extension = textureDef.extensions[ name ];
// 		const source = json.images[ extension.source ];

// 		let loader = parser.textureLoader;
// 		if ( source.uri ) {

// 			const handler = parser.options.manager.getHandler( source.uri );
// 			if ( handler !== null ) loader = handler;

// 		}

// 		return this.detectSupport().then( function ( isSupported ) {

// 			if ( isSupported ) return parser.loadTextureImage( textureIndex, extension.source, loader );

// 			if ( json.extensionsRequired && json.extensionsRequired.indexOf( name ) >= 0 ) {

// 				throw new Error( 'THREE.GLTFLoader: WebP required by asset but unsupported.' );

// 			}

// 			// Fall back to PNG or JPEG.
// 			return parser.loadTexture( textureIndex );

// 		} );

// 	}

// 	detectSupport() {

// 		if ( ! this.isSupported ) {

// 			this.isSupported = new Promise( function ( resolve ) {

// 				const image = new Image();

// 				// Lossy test image. Support for lossy images doesn't guarantee support for all
// 				// WebP images, unfortunately.
// 				image.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';

// 				image.onload = image.onerror = function () {

// 					resolve( image.height === 1 );

// 				};

// 			} );

// 		}

// 		return this.isSupported;

// 	}

// }

// /**
//  * AVIF Texture Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_avif
//  */
// class GLTFTextureAVIFExtension {

// 	constructor( parser ) {

// 		this.parser = parser;
// 		this.name = EXTENSIONS.EXT_TEXTURE_AVIF;
// 		this.isSupported = null;

// 	}

// 	loadTexture( textureIndex ) {

// 		const name = this.name;
// 		const parser = this.parser;
// 		const json = parser.json;

// 		const textureDef = json.textures[ textureIndex ];

// 		if ( ! textureDef.extensions || ! textureDef.extensions[ name ] ) {

// 			return null;

// 		}

// 		const extension = textureDef.extensions[ name ];
// 		const source = json.images[ extension.source ];

// 		let loader = parser.textureLoader;
// 		if ( source.uri ) {

// 			const handler = parser.options.manager.getHandler( source.uri );
// 			if ( handler !== null ) loader = handler;

// 		}

// 		return this.detectSupport().then( function ( isSupported ) {

// 			if ( isSupported ) return parser.loadTextureImage( textureIndex, extension.source, loader );

// 			if ( json.extensionsRequired && json.extensionsRequired.indexOf( name ) >= 0 ) {

// 				throw new Error( 'THREE.GLTFLoader: AVIF required by asset but unsupported.' );

// 			}

// 			// Fall back to PNG or JPEG.
// 			return parser.loadTexture( textureIndex );

// 		} );

// 	}

// 	detectSupport() {

// 		if ( ! this.isSupported ) {

// 			this.isSupported = new Promise( function ( resolve ) {

// 				const image = new Image();

// 				// Lossy test image.
// 				image.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=';
// 				image.onload = image.onerror = function () {

// 					resolve( image.height === 1 );

// 				};

// 			} );

// 		}

// 		return this.isSupported;

// 	}

// }

// /**
//  * meshopt BufferView Compression Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_meshopt_compression
//  */
// class GLTFMeshoptCompression {

// 	constructor( parser ) {

// 		this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
// 		this.parser = parser;

// 	}

// 	loadBufferView( index ) {

// 		const json = this.parser.json;
// 		const bufferView = json.bufferViews[ index ];

// 		if ( bufferView.extensions && bufferView.extensions[ this.name ] ) {

// 			const extensionDef = bufferView.extensions[ this.name ];

// 			const buffer = this.parser.getDependency( 'buffer', extensionDef.buffer );
// 			const decoder = this.parser.options.meshoptDecoder;

// 			if ( ! decoder || ! decoder.supported ) {

// 				if ( json.extensionsRequired && json.extensionsRequired.indexOf( this.name ) >= 0 ) {

// 					throw new Error( 'THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files' );

// 				} else {

// 					// Assumes that the extension is optional and that fallback buffer data is present
// 					return null;

// 				}

// 			}

// 			return buffer.then( function ( res ) {

// 				const byteOffset = extensionDef.byteOffset || 0;
// 				const byteLength = extensionDef.byteLength || 0;

// 				const count = extensionDef.count;
// 				const stride = extensionDef.byteStride;

// 				const source = new Uint8Array( res, byteOffset, byteLength );

// 				if ( decoder.decodeGltfBufferAsync ) {

// 					return decoder.decodeGltfBufferAsync( count, stride, source, extensionDef.mode, extensionDef.filter ).then( function ( res ) {

// 						return res.buffer;

// 					} );

// 				} else {

// 					// Support for MeshoptDecoder 0.18 or earlier, without decodeGltfBufferAsync
// 					return decoder.ready.then( function () {

// 						const result = new ArrayBuffer( count * stride );
// 						decoder.decodeGltfBuffer( new Uint8Array( result ), count, stride, source, extensionDef.mode, extensionDef.filter );
// 						return result;

// 					} );

// 				}

// 			} );

// 		} else {

// 			return null;

// 		}

// 	}

// }

// /**
//  * GPU Instancing Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_mesh_gpu_instancing
//  *
//  */
// class GLTFMeshGpuInstancing {

// 	constructor( parser ) {

// 		this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING;
// 		this.parser = parser;

// 	}

// 	createNodeMesh( nodeIndex ) {

// 		const json = this.parser.json;
// 		const nodeDef = json.nodes[ nodeIndex ];

// 		if ( ! nodeDef.extensions || ! nodeDef.extensions[ this.name ] ||
// 			nodeDef.mesh === undefined ) {

// 			return null;

// 		}

// 		const meshDef = json.meshes[ nodeDef.mesh ];

// 		// No Points or Lines + Instancing support yet

// 		for ( const primitive of meshDef.primitives ) {

// 			if ( primitive.mode !== WEBGL_CONSTANTS.TRIANGLES &&
// 				 primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_STRIP &&
// 				 primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_FAN &&
// 				 primitive.mode !== undefined ) {

// 				return null;

// 			}

// 		}

// 		const extensionDef = nodeDef.extensions[ this.name ];
// 		const attributesDef = extensionDef.attributes;

// 		// @TODO: Can we support InstancedMesh + SkinnedMesh?

// 		const pending = [];
// 		const attributes = {};

// 		for ( const key in attributesDef ) {

// 			pending.push( this.parser.getDependency( 'accessor', attributesDef[ key ] ).then( accessor => {

// 				attributes[ key ] = accessor;
// 				return attributes[ key ];

// 			} ) );

// 		}

// 		if ( pending.length < 1 ) {

// 			return null;

// 		}

// 		pending.push( this.parser.createNodeMesh( nodeIndex ) );

// 		return Promise.all( pending ).then( results => {

// 			const nodeObject = results.pop();
// 			const meshes = nodeObject.isGroup ? nodeObject.children : [ nodeObject ];
// 			const count = results[ 0 ].count; // All attribute counts should be same
// 			const instancedMeshes = [];

// 			for ( const mesh of meshes ) {

// 				// Temporal variables
// 				const m = new Matrix4();
// 				const p = new Vector3();
// 				const q = new Quaternion();
// 				const s = new Vector3( 1, 1, 1 );

// 				const instancedMesh = new InstancedMesh( mesh.geometry, mesh.material, count );

// 				for ( let i = 0; i < count; i ++ ) {

// 					if ( attributes.TRANSLATION ) {

// 						p.fromBufferAttribute( attributes.TRANSLATION, i );

// 					}

// 					if ( attributes.ROTATION ) {

// 						q.fromBufferAttribute( attributes.ROTATION, i );

// 					}

// 					if ( attributes.SCALE ) {

// 						s.fromBufferAttribute( attributes.SCALE, i );

// 					}

// 					instancedMesh.setMatrixAt( i, m.compose( p, q, s ) );

// 				}

// 				// Add instance attributes to the geometry, excluding TRS.
// 				for ( const attributeName in attributes ) {

// 					if ( attributeName === '_COLOR_0' ) {

// 						const attr = attributes[ attributeName ];
// 						instancedMesh.instanceColor = new InstancedBufferAttribute( attr.array, attr.itemSize, attr.normalized );

// 					} else if ( attributeName !== 'TRANSLATION' &&
// 						 attributeName !== 'ROTATION' &&
// 						 attributeName !== 'SCALE' ) {

// 						mesh.geometry.setAttribute( attributeName, attributes[ attributeName ] );

// 					}

// 				}

// 				// Just in case
// 				Object3D.prototype.copy.call( instancedMesh, mesh );

// 				this.parser.assignFinalMaterial( instancedMesh );

// 				instancedMeshes.push( instancedMesh );

// 			}

// 			if ( nodeObject.isGroup ) {

// 				nodeObject.clear();

// 				nodeObject.add( ... instancedMeshes );

// 				return nodeObject;

// 			}

// 			return instancedMeshes[ 0 ];

// 		} );

// 	}

// }

// /* BINARY EXTENSION */
// const BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
// const BINARY_EXTENSION_HEADER_LENGTH = 12;
// const BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

// class GLTFBinaryExtension {

// 	constructor( data ) {

// 		this.name = EXTENSIONS.KHR_BINARY_GLTF;
// 		this.content = null;
// 		this.body = null;

// 		const headerView = new DataView( data, 0, BINARY_EXTENSION_HEADER_LENGTH );
// 		const textDecoder = new TextDecoder();

// 		this.header = {
// 			magic: textDecoder.decode( new Uint8Array( data.slice( 0, 4 ) ) ),
// 			version: headerView.getUint32( 4, true ),
// 			length: headerView.getUint32( 8, true )
// 		};

// 		if ( this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC ) {

// 			throw new Error( 'THREE.GLTFLoader: Unsupported glTF-Binary header.' );

// 		} else if ( this.header.version < 2.0 ) {

// 			throw new Error( 'THREE.GLTFLoader: Legacy binary file detected.' );

// 		}

// 		const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
// 		const chunkView = new DataView( data, BINARY_EXTENSION_HEADER_LENGTH );
// 		let chunkIndex = 0;

// 		while ( chunkIndex < chunkContentsLength ) {

// 			const chunkLength = chunkView.getUint32( chunkIndex, true );
// 			chunkIndex += 4;

// 			const chunkType = chunkView.getUint32( chunkIndex, true );
// 			chunkIndex += 4;

// 			if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON ) {

// 				const contentArray = new Uint8Array( data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength );
// 				this.content = textDecoder.decode( contentArray );

// 			} else if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN ) {

// 				const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
// 				this.body = data.slice( byteOffset, byteOffset + chunkLength );

// 			}

// 			// Clients must ignore chunks with unknown types.

// 			chunkIndex += chunkLength;

// 		}

// 		if ( this.content === null ) {

// 			throw new Error( 'THREE.GLTFLoader: JSON content not found.' );

// 		}

// 	}

// }

// /**
//  * DRACO Mesh Compression Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
//  */
// class GLTFDracoMeshCompressionExtension {

// 	constructor( json, dracoLoader ) {

// 		if ( ! dracoLoader ) {

// 			throw new Error( 'THREE.GLTFLoader: No DRACOLoader instance provided.' );

// 		}

// 		this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
// 		this.json = json;
// 		this.dracoLoader = dracoLoader;
// 		this.dracoLoader.preload();

// 	}

// 	decodePrimitive( primitive, parser ) {

// 		const json = this.json;
// 		const dracoLoader = this.dracoLoader;
// 		const bufferViewIndex = primitive.extensions[ this.name ].bufferView;
// 		const gltfAttributeMap = primitive.extensions[ this.name ].attributes;
// 		const threeAttributeMap = {};
// 		const attributeNormalizedMap = {};
// 		const attributeTypeMap = {};

// 		for ( const attributeName in gltfAttributeMap ) {

// 			const threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

// 			threeAttributeMap[ threeAttributeName ] = gltfAttributeMap[ attributeName ];

// 		}

// 		for ( const attributeName in primitive.attributes ) {

// 			const threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

// 			if ( gltfAttributeMap[ attributeName ] !== undefined ) {

// 				const accessorDef = json.accessors[ primitive.attributes[ attributeName ] ];
// 				const componentType = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

// 				attributeTypeMap[ threeAttributeName ] = componentType.name;
// 				attributeNormalizedMap[ threeAttributeName ] = accessorDef.normalized === true;

// 			}

// 		}

// 		return parser.getDependency( 'bufferView', bufferViewIndex ).then( function ( bufferView ) {

// 			return new Promise( function ( resolve ) {

// 				dracoLoader.decodeDracoFile( bufferView, function ( geometry ) {

// 					for ( const attributeName in geometry.attributes ) {

// 						const attribute = geometry.attributes[ attributeName ];
// 						const normalized = attributeNormalizedMap[ attributeName ];

// 						if ( normalized !== undefined ) attribute.normalized = normalized;

// 					}

// 					resolve( geometry );

// 				}, threeAttributeMap, attributeTypeMap );

// 			} );

// 		} );

// 	}

// }

// /**
//  * Texture Transform Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
//  */
// class GLTFTextureTransformExtension {

// 	constructor() {

// 		this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;

// 	}

// 	extendTexture( texture, transform ) {

// 		if ( ( transform.texCoord === undefined || transform.texCoord === texture.channel )
// 			&& transform.offset === undefined
// 			&& transform.rotation === undefined
// 			&& transform.scale === undefined ) {

// 			// See https://github.com/mrdoob/three.js/issues/21819.
// 			return texture;

// 		}

// 		texture = texture.clone();

// 		if ( transform.texCoord !== undefined ) {

// 			texture.channel = transform.texCoord;

// 		}

// 		if ( transform.offset !== undefined ) {

// 			texture.offset.fromArray( transform.offset );

// 		}

// 		if ( transform.rotation !== undefined ) {

// 			texture.rotation = transform.rotation;

// 		}

// 		if ( transform.scale !== undefined ) {

// 			texture.repeat.fromArray( transform.scale );

// 		}

// 		texture.needsUpdate = true;

// 		return texture;

// 	}

// }

// /**
//  * Mesh Quantization Extension
//  *
//  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
//  */
// class GLTFMeshQuantizationExtension {

// 	constructor() {

// 		this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;

// 	}

// }

// /*********************************/
// /********** INTERPOLATION ********/
// /*********************************/

// // Spline Interpolation
// // Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
// class GLTFCubicSplineInterpolant extends Interpolant {

// 	constructor( parameterPositions, sampleValues, sampleSize, resultBuffer ) {

// 		super( parameterPositions, sampleValues, sampleSize, resultBuffer );

// 	}

// 	copySampleValue_( index ) {

// 		// Copies a sample value to the result buffer. See description of glTF
// 		// CUBICSPLINE values layout in interpolate_() function below.

// 		const result = this.resultBuffer,
// 			values = this.sampleValues,
// 			valueSize = this.valueSize,
// 			offset = index * valueSize * 3 + valueSize;

// 		for ( let i = 0; i !== valueSize; i ++ ) {

// 			result[ i ] = values[ offset + i ];

// 		}

// 		return result;

// 	}

// 	interpolate_( i1, t0, t, t1 ) {

// 		const result = this.resultBuffer;
// 		const values = this.sampleValues;
// 		const stride = this.valueSize;

// 		const stride2 = stride * 2;
// 		const stride3 = stride * 3;

// 		const td = t1 - t0;

// 		const p = ( t - t0 ) / td;
// 		const pp = p * p;
// 		const ppp = pp * p;

// 		const offset1 = i1 * stride3;
// 		const offset0 = offset1 - stride3;

// 		const s2 = - 2 * ppp + 3 * pp;
// 		const s3 = ppp - pp;
// 		const s0 = 1 - s2;
// 		const s1 = s3 - pp + p;

// 		// Layout of keyframe output values for CUBICSPLINE animations:
// 		//   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
// 		for ( let i = 0; i !== stride; i ++ ) {

// 			const p0 = values[ offset0 + i + stride ]; // splineVertex_k
// 			const m0 = values[ offset0 + i + stride2 ] * td; // outTangent_k * (t_k+1 - t_k)
// 			const p1 = values[ offset1 + i + stride ]; // splineVertex_k+1
// 			const m1 = values[ offset1 + i ] * td; // inTangent_k+1 * (t_k+1 - t_k)

// 			result[ i ] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;

// 		}

// 		return result;

// 	}

// }

// const _q = new Quaternion();

// class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {

// 	interpolate_( i1, t0, t, t1 ) {

// 		const result = super.interpolate_( i1, t0, t, t1 );

// 		_q.fromArray( result ).normalize().toArray( result );

// 		return result;

// 	}

// }


// /*********************************/
// /********** INTERNALS ************/
// /*********************************/

// /* CONSTANTS */

// const WEBGL_CONSTANTS = {
// 	FLOAT: 5126,
// 	//FLOAT_MAT2: 35674,
// 	FLOAT_MAT3: 35675,
// 	FLOAT_MAT4: 35676,
// 	FLOAT_VEC2: 35664,
// 	FLOAT_VEC3: 35665,
// 	FLOAT_VEC4: 35666,
// 	LINEAR: 9729,
// 	REPEAT: 10497,
// 	SAMPLER_2D: 35678,
// 	POINTS: 0,
// 	LINES: 1,
// 	LINE_LOOP: 2,
// 	LINE_STRIP: 3,
// 	TRIANGLES: 4,
// 	TRIANGLE_STRIP: 5,
// 	TRIANGLE_FAN: 6,
// 	UNSIGNED_BYTE: 5121,
// 	UNSIGNED_SHORT: 5123
// };

// const WEBGL_COMPONENT_TYPES = {
// 	5120: Int8Array,
// 	5121: Uint8Array,
// 	5122: Int16Array,
// 	5123: Uint16Array,
// 	5125: Uint32Array,
// 	5126: Float32Array
// };

// const WEBGL_FILTERS = {
// 	9728: NearestFilter,
// 	9729: LinearFilter,
// 	9984: NearestMipmapNearestFilter,
// 	9985: LinearMipmapNearestFilter,
// 	9986: NearestMipmapLinearFilter,
// 	9987: LinearMipmapLinearFilter
// };

// const WEBGL_WRAPPINGS = {
// 	33071: ClampToEdgeWrapping,
// 	33648: MirroredRepeatWrapping,
// 	10497: RepeatWrapping
// };

// const WEBGL_TYPE_SIZES = {
// 	'SCALAR': 1,
// 	'VEC2': 2,
// 	'VEC3': 3,
// 	'VEC4': 4,
// 	'MAT2': 4,
// 	'MAT3': 9,
// 	'MAT4': 16
// };

// const ATTRIBUTES = {
// 	POSITION: 'position',
// 	NORMAL: 'normal',
// 	TANGENT: 'tangent',
// 	TEXCOORD_0: 'uv',
// 	TEXCOORD_1: 'uv1',
// 	TEXCOORD_2: 'uv2',
// 	TEXCOORD_3: 'uv3',
// 	COLOR_0: 'color',
// 	WEIGHTS_0: 'skinWeight',
// 	JOINTS_0: 'skinIndex',
// };

// const PATH_PROPERTIES = {
// 	scale: 'scale',
// 	translation: 'position',
// 	rotation: 'quaternion',
// 	weights: 'morphTargetInfluences'
// };

// const INTERPOLATION = {
// 	CUBICSPLINE: undefined, // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
// 		                        // keyframe track will be initialized with a default interpolation type, then modified.
// 	LINEAR: InterpolateLinear,
// 	STEP: InterpolateDiscrete
// };

// const ALPHA_MODES = {
// 	OPAQUE: 'OPAQUE',
// 	MASK: 'MASK',
// 	BLEND: 'BLEND'
// };

// /**
//  * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
//  */
// function createDefaultMaterial( cache ) {

// 	if ( cache[ 'DefaultMaterial' ] === undefined ) {

// 		cache[ 'DefaultMaterial' ] = new MeshStandardMaterial( {
// 			color: 0xFFFFFF,
// 			emissive: 0x000000,
// 			metalness: 1,
// 			roughness: 1,
// 			transparent: false,
// 			depthTest: true,
// 			side: FrontSide
// 		} );

// 	}

// 	return cache[ 'DefaultMaterial' ];

// }

// function addUnknownExtensionsToUserData( knownExtensions, object, objectDef ) {

// 	// Add unknown glTF extensions to an object's userData.

// 	for ( const name in objectDef.extensions ) {

// 		if ( knownExtensions[ name ] === undefined ) {

// 			object.userData.gltfExtensions = object.userData.gltfExtensions || {};
// 			object.userData.gltfExtensions[ name ] = objectDef.extensions[ name ];

// 		}

// 	}

// }

// /**
//  * @param {Object3D|Material|BufferGeometry} object
//  * @param {GLTF.definition} gltfDef
//  */
// function assignExtrasToUserData( object, gltfDef ) {

// 	if ( gltfDef.extras !== undefined ) {

// 		if ( typeof gltfDef.extras === 'object' ) {

// 			Object.assign( object.userData, gltfDef.extras );

// 		} else {

// 			console.warn( 'THREE.GLTFLoader: Ignoring primitive type .extras, ' + gltfDef.extras );

// 		}

// 	}

// }

// /**
//  * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
//  *
//  * @param {BufferGeometry} geometry
//  * @param {Array<GLTF.Target>} targets
//  * @param {GLTFParser} parser
//  * @return {Promise<BufferGeometry>}
//  */
// function addMorphTargets( geometry, targets, parser ) {

// 	let hasMorphPosition = false;
// 	let hasMorphNormal = false;
// 	let hasMorphColor = false;

// 	for ( let i = 0, il = targets.length; i < il; i ++ ) {

// 		const target = targets[ i ];

// 		if ( target.POSITION !== undefined ) hasMorphPosition = true;
// 		if ( target.NORMAL !== undefined ) hasMorphNormal = true;
// 		if ( target.COLOR_0 !== undefined ) hasMorphColor = true;

// 		if ( hasMorphPosition && hasMorphNormal && hasMorphColor ) break;

// 	}

// 	if ( ! hasMorphPosition && ! hasMorphNormal && ! hasMorphColor ) return Promise.resolve( geometry );

// 	const pendingPositionAccessors = [];
// 	const pendingNormalAccessors = [];
// 	const pendingColorAccessors = [];

// 	for ( let i = 0, il = targets.length; i < il; i ++ ) {

// 		const target = targets[ i ];

// 		if ( hasMorphPosition ) {

// 			const pendingAccessor = target.POSITION !== undefined
// 				? parser.getDependency( 'accessor', target.POSITION )
// 				: geometry.attributes.position;

// 			pendingPositionAccessors.push( pendingAccessor );

// 		}

// 		if ( hasMorphNormal ) {

// 			const pendingAccessor = target.NORMAL !== undefined
// 				? parser.getDependency( 'accessor', target.NORMAL )
// 				: geometry.attributes.normal;

// 			pendingNormalAccessors.push( pendingAccessor );

// 		}

// 		if ( hasMorphColor ) {

// 			const pendingAccessor = target.COLOR_0 !== undefined
// 				? parser.getDependency( 'accessor', target.COLOR_0 )
// 				: geometry.attributes.color;

// 			pendingColorAccessors.push( pendingAccessor );

// 		}

// 	}

// 	return Promise.all( [
// 		Promise.all( pendingPositionAccessors ),
// 		Promise.all( pendingNormalAccessors ),
// 		Promise.all( pendingColorAccessors )
// 	] ).then( function ( accessors ) {

// 		const morphPositions = accessors[ 0 ];
// 		const morphNormals = accessors[ 1 ];
// 		const morphColors = accessors[ 2 ];

// 		if ( hasMorphPosition ) geometry.morphAttributes.position = morphPositions;
// 		if ( hasMorphNormal ) geometry.morphAttributes.normal = morphNormals;
// 		if ( hasMorphColor ) geometry.morphAttributes.color = morphColors;
// 		geometry.morphTargetsRelative = true;

// 		return geometry;

// 	} );

// }

// /**
//  * @param {Mesh} mesh
//  * @param {GLTF.Mesh} meshDef
//  */
// function updateMorphTargets( mesh, meshDef ) {

// 	mesh.updateMorphTargets();

// 	if ( meshDef.weights !== undefined ) {

// 		for ( let i = 0, il = meshDef.weights.length; i < il; i ++ ) {

// 			mesh.morphTargetInfluences[ i ] = meshDef.weights[ i ];

// 		}

// 	}

// 	// .extras has user-defined data, so check that .extras.targetNames is an array.
// 	if ( meshDef.extras && Array.isArray( meshDef.extras.targetNames ) ) {

// 		const targetNames = meshDef.extras.targetNames;

// 		if ( mesh.morphTargetInfluences.length === targetNames.length ) {

// 			mesh.morphTargetDictionary = {};

// 			for ( let i = 0, il = targetNames.length; i < il; i ++ ) {

// 				mesh.morphTargetDictionary[ targetNames[ i ] ] = i;

// 			}

// 		} else {

// 			console.warn( 'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.' );

// 		}

// 	}

// }

// function createPrimitiveKey( primitiveDef ) {

// 	let geometryKey;

// 	const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ];

// 	if ( dracoExtension ) {

// 		geometryKey = 'draco:' + dracoExtension.bufferView
// 				+ ':' + dracoExtension.indices
// 				+ ':' + createAttributesKey( dracoExtension.attributes );

// 	} else {

// 		geometryKey = primitiveDef.indices + ':' + createAttributesKey( primitiveDef.attributes ) + ':' + primitiveDef.mode;

// 	}

// 	if ( primitiveDef.targets !== undefined ) {

// 		for ( let i = 0, il = primitiveDef.targets.length; i < il; i ++ ) {

// 			geometryKey += ':' + createAttributesKey( primitiveDef.targets[ i ] );

// 		}

// 	}

// 	return geometryKey;

// }

// function createAttributesKey( attributes ) {

// 	let attributesKey = '';

// 	const keys = Object.keys( attributes ).sort();

// 	for ( let i = 0, il = keys.length; i < il; i ++ ) {

// 		attributesKey += keys[ i ] + ':' + attributes[ keys[ i ] ] + ';';

// 	}

// 	return attributesKey;

// }

// function getNormalizedComponentScale( constructor ) {

// 	// Reference:
// 	// https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization#encoding-quantized-data

// 	switch ( constructor ) {

// 		case Int8Array:
// 			return 1 / 127;

// 		case Uint8Array:
// 			return 1 / 255;

// 		case Int16Array:
// 			return 1 / 32767;

// 		case Uint16Array:
// 			return 1 / 65535;

// 		default:
// 			throw new Error( 'THREE.GLTFLoader: Unsupported normalized accessor component type.' );

// 	}

// }

// function getImageURIMimeType( uri ) {

// 	if ( uri.search( /\.jpe?g($|\?)/i ) > 0 || uri.search( /^data\:image\/jpeg/ ) === 0 ) return 'image/jpeg';
// 	if ( uri.search( /\.webp($|\?)/i ) > 0 || uri.search( /^data\:image\/webp/ ) === 0 ) return 'image/webp';

// 	return 'image/png';

// }

// const _identityMatrix = new Matrix4();

// /* GLTF PARSER */

// class GLTFParser {

// 	constructor( json = {}, options = {} ) {

// 		this.json = json;
// 		this.extensions = {};
// 		this.plugins = {};
// 		this.options = options;

// 		// loader object cache
// 		this.cache = new GLTFRegistry();

// 		// associations between Three.js objects and glTF elements
// 		this.associations = new Map();

// 		// BufferGeometry caching
// 		this.primitiveCache = {};

// 		// Node cache
// 		this.nodeCache = {};

// 		// Object3D instance caches
// 		this.meshCache = { refs: {}, uses: {} };
// 		this.cameraCache = { refs: {}, uses: {} };
// 		this.lightCache = { refs: {}, uses: {} };

// 		this.sourceCache = {};
// 		this.textureCache = {};

// 		// Track node names, to ensure no duplicates
// 		this.nodeNamesUsed = {};

// 		// Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
// 		// expensive work of uploading a texture to the GPU off the main thread.

// 		let isSafari = false;
// 		let isFirefox = false;
// 		let firefoxVersion = - 1;

// 		if ( typeof navigator !== 'undefined' ) {

// 			isSafari = /^((?!chrome|android).)*safari/i.test( navigator.userAgent ) === true;
// 			isFirefox = navigator.userAgent.indexOf( 'Firefox' ) > - 1;
// 			firefoxVersion = isFirefox ? navigator.userAgent.match( /Firefox\/([0-9]+)\./ )[ 1 ] : - 1;

// 		}

// 		if ( typeof createImageBitmap === 'undefined' || isSafari || ( isFirefox && firefoxVersion < 98 ) ) {

// 			this.textureLoader = new TextureLoader( this.options.manager );

// 		} else {

// 			this.textureLoader = new ImageBitmapLoader( this.options.manager );

// 		}

// 		this.textureLoader.setCrossOrigin( this.options.crossOrigin );
// 		this.textureLoader.setRequestHeader( this.options.requestHeader );

// 		this.fileLoader = new FileLoader( this.options.manager );
// 		this.fileLoader.setResponseType( 'arraybuffer' );

// 		if ( this.options.crossOrigin === 'use-credentials' ) {

// 			this.fileLoader.setWithCredentials( true );

// 		}

// 	}

// 	setExtensions( extensions ) {

// 		this.extensions = extensions;

// 	}

// 	setPlugins( plugins ) {

// 		this.plugins = plugins;

// 	}

// 	parse( onLoad, onError ) {

// 		const parser = this;
// 		const json = this.json;
// 		const extensions = this.extensions;

// 		// Clear the loader cache
// 		this.cache.removeAll();
// 		this.nodeCache = {};

// 		// Mark the special nodes/meshes in json for efficient parse
// 		this._invokeAll( function ( ext ) {

// 			return ext._markDefs && ext._markDefs();

// 		} );

// 		Promise.all( this._invokeAll( function ( ext ) {

// 			return ext.beforeRoot && ext.beforeRoot();

// 		} ) ).then( function () {

// 			return Promise.all( [

// 				parser.getDependencies( 'scene' ),
// 				parser.getDependencies( 'animation' ),
// 				parser.getDependencies( 'camera' ),

// 			] );

// 		} ).then( function ( dependencies ) {

// 			const result = {
// 				scene: dependencies[ 0 ][ json.scene || 0 ],
// 				scenes: dependencies[ 0 ],
// 				animations: dependencies[ 1 ],
// 				cameras: dependencies[ 2 ],
// 				asset: json.asset,
// 				parser: parser,
// 				userData: {}
// 			};

// 			addUnknownExtensionsToUserData( extensions, result, json );

// 			assignExtrasToUserData( result, json );

// 			return Promise.all( parser._invokeAll( function ( ext ) {

// 				return ext.afterRoot && ext.afterRoot( result );

// 			} ) ).then( function () {

// 				onLoad( result );

// 			} );

// 		} ).catch( onError );

// 	}

// 	/**
// 	 * Marks the special nodes/meshes in json for efficient parse.
// 	 */
// 	_markDefs() {

// 		const nodeDefs = this.json.nodes || [];
// 		const skinDefs = this.json.skins || [];
// 		const meshDefs = this.json.meshes || [];

// 		// Nothing in the node definition indicates whether it is a Bone or an
// 		// Object3D. Use the skins' joint references to mark bones.
// 		for ( let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex ++ ) {

// 			const joints = skinDefs[ skinIndex ].joints;

// 			for ( let i = 0, il = joints.length; i < il; i ++ ) {

// 				nodeDefs[ joints[ i ] ].isBone = true;

// 			}

// 		}

// 		// Iterate over all nodes, marking references to shared resources,
// 		// as well as skeleton joints.
// 		for ( let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

// 			const nodeDef = nodeDefs[ nodeIndex ];

// 			if ( nodeDef.mesh !== undefined ) {

// 				this._addNodeRef( this.meshCache, nodeDef.mesh );

// 				// Nothing in the mesh definition indicates whether it is
// 				// a SkinnedMesh or Mesh. Use the node's mesh reference
// 				// to mark SkinnedMesh if node has skin.
// 				if ( nodeDef.skin !== undefined ) {

// 					meshDefs[ nodeDef.mesh ].isSkinnedMesh = true;

// 				}

// 			}

// 			if ( nodeDef.camera !== undefined ) {

// 				this._addNodeRef( this.cameraCache, nodeDef.camera );

// 			}

// 		}

// 	}

// 	/**
// 	 * Counts references to shared node / Object3D resources. These resources
// 	 * can be reused, or "instantiated", at multiple nodes in the scene
// 	 * hierarchy. Mesh, Camera, and Light instances are instantiated and must
// 	 * be marked. Non-scenegraph resources (like Materials, Geometries, and
// 	 * Textures) can be reused directly and are not marked here.
// 	 *
// 	 * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
// 	 */
// 	_addNodeRef( cache, index ) {

// 		if ( index === undefined ) return;

// 		if ( cache.refs[ index ] === undefined ) {

// 			cache.refs[ index ] = cache.uses[ index ] = 0;

// 		}

// 		cache.refs[ index ] ++;

// 	}

// 	/** Returns a reference to a shared resource, cloning it if necessary. */
// 	_getNodeRef( cache, index, object ) {

// 		if ( cache.refs[ index ] <= 1 ) return object;

// 		const ref = object.clone();

// 		// Propagates mappings to the cloned object, prevents mappings on the
// 		// original object from being lost.
// 		const updateMappings = ( original, clone ) => {

// 			const mappings = this.associations.get( original );
// 			if ( mappings != null ) {

// 				this.associations.set( clone, mappings );

// 			}

// 			for ( const [ i, child ] of original.children.entries() ) {

// 				updateMappings( child, clone.children[ i ] );

// 			}

// 		};

// 		updateMappings( object, ref );

// 		ref.name += '_instance_' + ( cache.uses[ index ] ++ );

// 		return ref;

// 	}

// 	_invokeOne( func ) {

// 		const extensions = Object.values( this.plugins );
// 		extensions.push( this );

// 		for ( let i = 0; i < extensions.length; i ++ ) {

// 			const result = func( extensions[ i ] );

// 			if ( result ) return result;

// 		}

// 		return null;

// 	}

// 	_invokeAll( func ) {

// 		const extensions = Object.values( this.plugins );
// 		extensions.unshift( this );

// 		const pending = [];

// 		for ( let i = 0; i < extensions.length; i ++ ) {

// 			const result = func( extensions[ i ] );

// 			if ( result ) pending.push( result );

// 		}

// 		return pending;

// 	}

// 	/**
// 	 * Requests the specified dependency asynchronously, with caching.
// 	 * @param {string} type
// 	 * @param {number} index
// 	 * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
// 	 */
// 	getDependency( type, index ) {

// 		const cacheKey = type + ':' + index;
// 		let dependency = this.cache.get( cacheKey );

// 		if ( ! dependency ) {

// 			switch ( type ) {

// 				case 'scene':
// 					dependency = this.loadScene( index );
// 					break;

// 				case 'node':
// 					dependency = this._invokeOne( function ( ext ) {

// 						return ext.loadNode && ext.loadNode( index );

// 					} );
// 					break;

// 				case 'mesh':
// 					dependency = this._invokeOne( function ( ext ) {

// 						return ext.loadMesh && ext.loadMesh( index );

// 					} );
// 					break;

// 				case 'accessor':
// 					dependency = this.loadAccessor( index );
// 					break;

// 				case 'bufferView':
// 					dependency = this._invokeOne( function ( ext ) {

// 						return ext.loadBufferView && ext.loadBufferView( index );

// 					} );
// 					break;

// 				case 'buffer':
// 					dependency = this.loadBuffer( index );
// 					break;

// 				case 'material':
// 					dependency = this._invokeOne( function ( ext ) {

// 						return ext.loadMaterial && ext.loadMaterial( index );

// 					} );
// 					break;

// 				case 'texture':
// 					dependency = this._invokeOne( function ( ext ) {

// 						return ext.loadTexture && ext.loadTexture( index );

// 					} );
// 					break;

// 				case 'skin':
// 					dependency = this.loadSkin( index );
// 					break;

// 				case 'animation':
// 					dependency = this._invokeOne( function ( ext ) {

// 						return ext.loadAnimation && ext.loadAnimation( index );

// 					} );
// 					break;

// 				case 'camera':
// 					dependency = this.loadCamera( index );
// 					break;

// 				default:
// 					dependency = this._invokeOne( function ( ext ) {

// 						return ext != this && ext.getDependency && ext.getDependency( type, index );

// 					} );

// 					if ( ! dependency ) {

// 						throw new Error( 'Unknown type: ' + type );

// 					}

// 					break;

// 			}

// 			this.cache.add( cacheKey, dependency );

// 		}

// 		return dependency;

// 	}

// 	/**
// 	 * Requests all dependencies of the specified type asynchronously, with caching.
// 	 * @param {string} type
// 	 * @return {Promise<Array<Object>>}
// 	 */
// 	getDependencies( type ) {

// 		let dependencies = this.cache.get( type );

// 		if ( ! dependencies ) {

// 			const parser = this;
// 			const defs = this.json[ type + ( type === 'mesh' ? 'es' : 's' ) ] || [];

// 			dependencies = Promise.all( defs.map( function ( def, index ) {

// 				return parser.getDependency( type, index );

// 			} ) );

// 			this.cache.add( type, dependencies );

// 		}

// 		return dependencies;

// 	}

// 	/**
// 	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
// 	 * @param {number} bufferIndex
// 	 * @return {Promise<ArrayBuffer>}
// 	 */
// 	loadBuffer( bufferIndex ) {

// 		const bufferDef = this.json.buffers[ bufferIndex ];
// 		const loader = this.fileLoader;

// 		if ( bufferDef.type && bufferDef.type !== 'arraybuffer' ) {

// 			throw new Error( 'THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.' );

// 		}

// 		// If present, GLB container is required to be the first buffer.
// 		if ( bufferDef.uri === undefined && bufferIndex === 0 ) {

// 			return Promise.resolve( this.extensions[ EXTENSIONS.KHR_BINARY_GLTF ].body );

// 		}

// 		const options = this.options;

// 		return new Promise( function ( resolve, reject ) {

// 			loader.load( LoaderUtils.resolveURL( bufferDef.uri, options.path ), resolve, undefined, function () {

// 				reject( new Error( 'THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".' ) );

// 			} );

// 		} );

// 	}

// 	/**
// 	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
// 	 * @param {number} bufferViewIndex
// 	 * @return {Promise<ArrayBuffer>}
// 	 */
// 	loadBufferView( bufferViewIndex ) {

// 		const bufferViewDef = this.json.bufferViews[ bufferViewIndex ];

// 		return this.getDependency( 'buffer', bufferViewDef.buffer ).then( function ( buffer ) {

// 			const byteLength = bufferViewDef.byteLength || 0;
// 			const byteOffset = bufferViewDef.byteOffset || 0;
// 			return buffer.slice( byteOffset, byteOffset + byteLength );

// 		} );

// 	}

// 	/**
// 	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
// 	 * @param {number} accessorIndex
// 	 * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
// 	 */
// 	loadAccessor( accessorIndex ) {

// 		const parser = this;
// 		const json = this.json;

// 		const accessorDef = this.json.accessors[ accessorIndex ];

// 		if ( accessorDef.bufferView === undefined && accessorDef.sparse === undefined ) {

// 			const itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
// 			const TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];
// 			const normalized = accessorDef.normalized === true;

// 			const array = new TypedArray( accessorDef.count * itemSize );
// 			return Promise.resolve( new BufferAttribute( array, itemSize, normalized ) );

// 		}

// 		const pendingBufferViews = [];

// 		if ( accessorDef.bufferView !== undefined ) {

// 			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.bufferView ) );

// 		} else {

// 			pendingBufferViews.push( null );

// 		}

// 		if ( accessorDef.sparse !== undefined ) {

// 			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.indices.bufferView ) );
// 			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.values.bufferView ) );

// 		}

// 		return Promise.all( pendingBufferViews ).then( function ( bufferViews ) {

// 			const bufferView = bufferViews[ 0 ];

// 			const itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
// 			const TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

// 			// For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
// 			const elementBytes = TypedArray.BYTES_PER_ELEMENT;
// 			const itemBytes = elementBytes * itemSize;
// 			const byteOffset = accessorDef.byteOffset || 0;
// 			const byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[ accessorDef.bufferView ].byteStride : undefined;
// 			const normalized = accessorDef.normalized === true;
// 			let array, bufferAttribute;

// 			// The buffer is not interleaved if the stride is the item size in bytes.
// 			if ( byteStride && byteStride !== itemBytes ) {

// 				// Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
// 				// This makes sure that IBA.count reflects accessor.count properly
// 				const ibSlice = Math.floor( byteOffset / byteStride );
// 				const ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType + ':' + ibSlice + ':' + accessorDef.count;
// 				let ib = parser.cache.get( ibCacheKey );

// 				if ( ! ib ) {

// 					array = new TypedArray( bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes );

// 					// Integer parameters to IB/IBA are in array elements, not bytes.
// 					ib = new InterleavedBuffer( array, byteStride / elementBytes );

// 					parser.cache.add( ibCacheKey, ib );

// 				}

// 				bufferAttribute = new InterleavedBufferAttribute( ib, itemSize, ( byteOffset % byteStride ) / elementBytes, normalized );

// 			} else {

// 				if ( bufferView === null ) {

// 					array = new TypedArray( accessorDef.count * itemSize );

// 				} else {

// 					array = new TypedArray( bufferView, byteOffset, accessorDef.count * itemSize );

// 				}

// 				bufferAttribute = new BufferAttribute( array, itemSize, normalized );

// 			}

// 			// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
// 			if ( accessorDef.sparse !== undefined ) {

// 				const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
// 				const TypedArrayIndices = WEBGL_COMPONENT_TYPES[ accessorDef.sparse.indices.componentType ];

// 				const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
// 				const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;

// 				const sparseIndices = new TypedArrayIndices( bufferViews[ 1 ], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices );
// 				const sparseValues = new TypedArray( bufferViews[ 2 ], byteOffsetValues, accessorDef.sparse.count * itemSize );

// 				if ( bufferView !== null ) {

// 					// Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
// 					bufferAttribute = new BufferAttribute( bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized );

// 				}

// 				for ( let i = 0, il = sparseIndices.length; i < il; i ++ ) {

// 					const index = sparseIndices[ i ];

// 					bufferAttribute.setX( index, sparseValues[ i * itemSize ] );
// 					if ( itemSize >= 2 ) bufferAttribute.setY( index, sparseValues[ i * itemSize + 1 ] );
// 					if ( itemSize >= 3 ) bufferAttribute.setZ( index, sparseValues[ i * itemSize + 2 ] );
// 					if ( itemSize >= 4 ) bufferAttribute.setW( index, sparseValues[ i * itemSize + 3 ] );
// 					if ( itemSize >= 5 ) throw new Error( 'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.' );

// 				}

// 			}

// 			return bufferAttribute;

// 		} );

// 	}

// 	/**
// 	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
// 	 * @param {number} textureIndex
// 	 * @return {Promise<THREE.Texture|null>}
// 	 */
// 	loadTexture( textureIndex ) {

// 		const json = this.json;
// 		const options = this.options;
// 		const textureDef = json.textures[ textureIndex ];
// 		const sourceIndex = textureDef.source;
// 		const sourceDef = json.images[ sourceIndex ];

// 		let loader = this.textureLoader;

// 		if ( sourceDef.uri ) {

// 			const handler = options.manager.getHandler( sourceDef.uri );
// 			if ( handler !== null ) loader = handler;

// 		}

// 		return this.loadTextureImage( textureIndex, sourceIndex, loader );

// 	}

// 	loadTextureImage( textureIndex, sourceIndex, loader ) {

// 		const parser = this;
// 		const json = this.json;

// 		const textureDef = json.textures[ textureIndex ];
// 		const sourceDef = json.images[ sourceIndex ];

// 		const cacheKey = ( sourceDef.uri || sourceDef.bufferView ) + ':' + textureDef.sampler;

// 		if ( this.textureCache[ cacheKey ] ) {

// 			// See https://github.com/mrdoob/three.js/issues/21559.
// 			return this.textureCache[ cacheKey ];

// 		}

// 		const promise = this.loadImageSource( sourceIndex, loader ).then( function ( texture ) {

// 			texture.flipY = false;

// 			texture.name = textureDef.name || sourceDef.name || '';

// 			if ( texture.name === '' && typeof sourceDef.uri === 'string' && sourceDef.uri.startsWith( 'data:image/' ) === false ) {

// 				texture.name = sourceDef.uri;

// 			}

// 			const samplers = json.samplers || {};
// 			const sampler = samplers[ textureDef.sampler ] || {};

// 			texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ] || LinearFilter;
// 			texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ] || LinearMipmapLinearFilter;
// 			texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ] || RepeatWrapping;
// 			texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ] || RepeatWrapping;

// 			parser.associations.set( texture, { textures: textureIndex } );

// 			return texture;

// 		} ).catch( function () {

// 			return null;

// 		} );

// 		this.textureCache[ cacheKey ] = promise;

// 		return promise;

// 	}

// 	loadImageSource( sourceIndex, loader ) {

// 		const parser = this;
// 		const json = this.json;
// 		const options = this.options;

// 		if ( this.sourceCache[ sourceIndex ] !== undefined ) {

// 			return this.sourceCache[ sourceIndex ].then( ( texture ) => texture.clone() );

// 		}

// 		const sourceDef = json.images[ sourceIndex ];

// 		const URL = self.URL || self.webkitURL;

// 		let sourceURI = sourceDef.uri || '';
// 		let isObjectURL = false;

// 		if ( sourceDef.bufferView !== undefined ) {

// 			// Load binary image data from bufferView, if provided.

// 			sourceURI = parser.getDependency( 'bufferView', sourceDef.bufferView ).then( function ( bufferView ) {

// 				isObjectURL = true;
// 				const blob = new Blob( [ bufferView ], { type: sourceDef.mimeType } );
// 				sourceURI = URL.createObjectURL( blob );
// 				return sourceURI;

// 			} );

// 		} else if ( sourceDef.uri === undefined ) {

// 			throw new Error( 'THREE.GLTFLoader: Image ' + sourceIndex + ' is missing URI and bufferView' );

// 		}

// 		const promise = Promise.resolve( sourceURI ).then( function ( sourceURI ) {

// 			return new Promise( function ( resolve, reject ) {

// 				let onLoad = resolve;

// 				if ( loader.isImageBitmapLoader === true ) {

// 					onLoad = function ( imageBitmap ) {

// 						const texture = new Texture( imageBitmap );
// 						texture.needsUpdate = true;

// 						resolve( texture );

// 					};

// 				}

// 				loader.load( LoaderUtils.resolveURL( sourceURI, options.path ), onLoad, undefined, reject );

// 			} );

// 		} ).then( function ( texture ) {

// 			// Clean up resources and configure Texture.

// 			if ( isObjectURL === true ) {

// 				URL.revokeObjectURL( sourceURI );

// 			}

// 			texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType( sourceDef.uri );

// 			return texture;

// 		} ).catch( function ( error ) {

// 			console.error( 'THREE.GLTFLoader: Couldn\'t load texture', sourceURI );
// 			throw error;

// 		} );

// 		this.sourceCache[ sourceIndex ] = promise;
// 		return promise;

// 	}

// 	/**
// 	 * Asynchronously assigns a texture to the given material parameters.
// 	 * @param {Object} materialParams
// 	 * @param {string} mapName
// 	 * @param {Object} mapDef
// 	 * @return {Promise<Texture>}
// 	 */
// 	assignTexture( materialParams, mapName, mapDef, colorSpace ) {

// 		const parser = this;

// 		return this.getDependency( 'texture', mapDef.index ).then( function ( texture ) {

// 			if ( ! texture ) return null;

// 			if ( mapDef.texCoord !== undefined && mapDef.texCoord > 0 ) {

// 				texture = texture.clone();
// 				texture.channel = mapDef.texCoord;

// 			}

// 			if ( parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] ) {

// 				const transform = mapDef.extensions !== undefined ? mapDef.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] : undefined;

// 				if ( transform ) {

// 					const gltfReference = parser.associations.get( texture );
// 					texture = parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ].extendTexture( texture, transform );
// 					parser.associations.set( texture, gltfReference );

// 				}

// 			}

// 			if ( colorSpace !== undefined ) {

// 				texture.colorSpace = colorSpace;

// 			}

// 			materialParams[ mapName ] = texture;

// 			return texture;

// 		} );

// 	}

// 	/**
// 	 * Assigns final material to a Mesh, Line, or Points instance. The instance
// 	 * already has a material (generated from the glTF material options alone)
// 	 * but reuse of the same glTF material may require multiple threejs materials
// 	 * to accommodate different primitive types, defines, etc. New materials will
// 	 * be created if necessary, and reused from a cache.
// 	 * @param  {Object3D} mesh Mesh, Line, or Points instance.
// 	 */
// 	assignFinalMaterial( mesh ) {

// 		const geometry = mesh.geometry;
// 		let material = mesh.material;

// 		const useDerivativeTangents = geometry.attributes.tangent === undefined;
// 		const useVertexColors = geometry.attributes.color !== undefined;
// 		const useFlatShading = geometry.attributes.normal === undefined;

// 		if ( mesh.isPoints ) {

// 			const cacheKey = 'PointsMaterial:' + material.uuid;

// 			let pointsMaterial = this.cache.get( cacheKey );

// 			if ( ! pointsMaterial ) {

// 				pointsMaterial = new PointsMaterial();
// 				Material.prototype.copy.call( pointsMaterial, material );
// 				pointsMaterial.color.copy( material.color );
// 				pointsMaterial.map = material.map;
// 				pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px

// 				this.cache.add( cacheKey, pointsMaterial );

// 			}

// 			material = pointsMaterial;

// 		} else if ( mesh.isLine ) {

// 			const cacheKey = 'LineBasicMaterial:' + material.uuid;

// 			let lineMaterial = this.cache.get( cacheKey );

// 			if ( ! lineMaterial ) {

// 				lineMaterial = new LineBasicMaterial();
// 				Material.prototype.copy.call( lineMaterial, material );
// 				lineMaterial.color.copy( material.color );
// 				lineMaterial.map = material.map;

// 				this.cache.add( cacheKey, lineMaterial );

// 			}

// 			material = lineMaterial;

// 		}

// 		// Clone the material if it will be modified
// 		if ( useDerivativeTangents || useVertexColors || useFlatShading ) {

// 			let cacheKey = 'ClonedMaterial:' + material.uuid + ':';

// 			if ( useDerivativeTangents ) cacheKey += 'derivative-tangents:';
// 			if ( useVertexColors ) cacheKey += 'vertex-colors:';
// 			if ( useFlatShading ) cacheKey += 'flat-shading:';

// 			let cachedMaterial = this.cache.get( cacheKey );

// 			if ( ! cachedMaterial ) {

// 				cachedMaterial = material.clone();

// 				if ( useVertexColors ) cachedMaterial.vertexColors = true;
// 				if ( useFlatShading ) cachedMaterial.flatShading = true;

// 				if ( useDerivativeTangents ) {

// 					// https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
// 					if ( cachedMaterial.normalScale ) cachedMaterial.normalScale.y *= - 1;
// 					if ( cachedMaterial.clearcoatNormalScale ) cachedMaterial.clearcoatNormalScale.y *= - 1;

// 				}

// 				this.cache.add( cacheKey, cachedMaterial );

// 				this.associations.set( cachedMaterial, this.associations.get( material ) );

// 			}

// 			material = cachedMaterial;

// 		}

// 		mesh.material = material;

// 	}

// 	getMaterialType( /* materialIndex */ ) {

// 		return MeshStandardMaterial;

// 	}

// 	/**
// 	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
// 	 * @param {number} materialIndex
// 	 * @return {Promise<Material>}
// 	 */
// 	loadMaterial( materialIndex ) {

// 		const parser = this;
// 		const json = this.json;
// 		const extensions = this.extensions;
// 		const materialDef = json.materials[ materialIndex ];

// 		let materialType;
// 		const materialParams = {};
// 		const materialExtensions = materialDef.extensions || {};

// 		const pending = [];

// 		if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ] ) {

// 			const kmuExtension = extensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ];
// 			materialType = kmuExtension.getMaterialType();
// 			pending.push( kmuExtension.extendParams( materialParams, materialDef, parser ) );

// 		} else {

// 			// Specification:
// 			// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

// 			const metallicRoughness = materialDef.pbrMetallicRoughness || {};

// 			materialParams.color = new Color( 1.0, 1.0, 1.0 );
// 			materialParams.opacity = 1.0;

// 			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

// 				const array = metallicRoughness.baseColorFactor;

// 				materialParams.color.setRGB( array[ 0 ], array[ 1 ], array[ 2 ], LinearSRGBColorSpace );
// 				materialParams.opacity = array[ 3 ];

// 			}

// 			if ( metallicRoughness.baseColorTexture !== undefined ) {

// 				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture, SRGBColorSpace ) );

// 			}

// 			materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
// 			materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

// 			if ( metallicRoughness.metallicRoughnessTexture !== undefined ) {

// 				pending.push( parser.assignTexture( materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture ) );
// 				pending.push( parser.assignTexture( materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture ) );

// 			}

// 			materialType = this._invokeOne( function ( ext ) {

// 				return ext.getMaterialType && ext.getMaterialType( materialIndex );

// 			} );

// 			pending.push( Promise.all( this._invokeAll( function ( ext ) {

// 				return ext.extendMaterialParams && ext.extendMaterialParams( materialIndex, materialParams );

// 			} ) ) );

// 		}

// 		if ( materialDef.doubleSided === true ) {

// 			materialParams.side = DoubleSide;

// 		}

// 		const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;

// 		if ( alphaMode === ALPHA_MODES.BLEND ) {

// 			materialParams.transparent = true;

// 			// See: https://github.com/mrdoob/three.js/issues/17706
// 			materialParams.depthWrite = false;

// 		} else {

// 			materialParams.transparent = false;

// 			if ( alphaMode === ALPHA_MODES.MASK ) {

// 				materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;

// 			}

// 		}

// 		if ( materialDef.normalTexture !== undefined && materialType !== MeshBasicMaterial ) {

// 			pending.push( parser.assignTexture( materialParams, 'normalMap', materialDef.normalTexture ) );

// 			materialParams.normalScale = new Vector2( 1, 1 );

// 			if ( materialDef.normalTexture.scale !== undefined ) {

// 				const scale = materialDef.normalTexture.scale;

// 				materialParams.normalScale.set( scale, scale );

// 			}

// 		}

// 		if ( materialDef.occlusionTexture !== undefined && materialType !== MeshBasicMaterial ) {

// 			pending.push( parser.assignTexture( materialParams, 'aoMap', materialDef.occlusionTexture ) );

// 			if ( materialDef.occlusionTexture.strength !== undefined ) {

// 				materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;

// 			}

// 		}

// 		if ( materialDef.emissiveFactor !== undefined && materialType !== MeshBasicMaterial ) {

// 			const emissiveFactor = materialDef.emissiveFactor;
// 			materialParams.emissive = new Color().setRGB( emissiveFactor[ 0 ], emissiveFactor[ 1 ], emissiveFactor[ 2 ], LinearSRGBColorSpace );

// 		}

// 		if ( materialDef.emissiveTexture !== undefined && materialType !== MeshBasicMaterial ) {

// 			pending.push( parser.assignTexture( materialParams, 'emissiveMap', materialDef.emissiveTexture, SRGBColorSpace ) );

// 		}

// 		return Promise.all( pending ).then( function () {

// 			const material = new materialType( materialParams );

// 			if ( materialDef.name ) material.name = materialDef.name;

// 			assignExtrasToUserData( material, materialDef );

// 			parser.associations.set( material, { materials: materialIndex } );

// 			if ( materialDef.extensions ) addUnknownExtensionsToUserData( extensions, material, materialDef );

// 			return material;

// 		} );

// 	}

// 	/** When Object3D instances are targeted by animation, they need unique names. */
// 	createUniqueName( originalName ) {

// 		const sanitizedName = PropertyBinding.sanitizeNodeName( originalName || '' );

// 		if ( sanitizedName in this.nodeNamesUsed ) {

// 			return sanitizedName + '_' + ( ++ this.nodeNamesUsed[ sanitizedName ] );

// 		} else {

// 			this.nodeNamesUsed[ sanitizedName ] = 0;

// 			return sanitizedName;

// 		}

// 	}

// 	/**
// 	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
// 	 *
// 	 * Creates BufferGeometries from primitives.
// 	 *
// 	 * @param {Array<GLTF.Primitive>} primitives
// 	 * @return {Promise<Array<BufferGeometry>>}
// 	 */
// 	loadGeometries( primitives ) {

// 		const parser = this;
// 		const extensions = this.extensions;
// 		const cache = this.primitiveCache;

// 		function createDracoPrimitive( primitive ) {

// 			return extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ]
// 				.decodePrimitive( primitive, parser )
// 				.then( function ( geometry ) {

// 					return addPrimitiveAttributes( geometry, primitive, parser );

// 				} );

// 		}

// 		const pending = [];

// 		for ( let i = 0, il = primitives.length; i < il; i ++ ) {

// 			const primitive = primitives[ i ];
// 			const cacheKey = createPrimitiveKey( primitive );

// 			// See if we've already created this geometry
// 			const cached = cache[ cacheKey ];

// 			if ( cached ) {

// 				// Use the cached geometry if it exists
// 				pending.push( cached.promise );

// 			} else {

// 				let geometryPromise;

// 				if ( primitive.extensions && primitive.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ] ) {

// 					// Use DRACO geometry if available
// 					geometryPromise = createDracoPrimitive( primitive );

// 				} else {

// 					// Otherwise create a new geometry
// 					geometryPromise = addPrimitiveAttributes( new BufferGeometry(), primitive, parser );

// 				}

// 				// Cache this geometry
// 				cache[ cacheKey ] = { primitive: primitive, promise: geometryPromise };

// 				pending.push( geometryPromise );

// 			}

// 		}

// 		return Promise.all( pending );

// 	}

// 	/**
// 	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
// 	 * @param {number} meshIndex
// 	 * @return {Promise<Group|Mesh|SkinnedMesh>}
// 	 */
// 	loadMesh( meshIndex ) {

// 		const parser = this;
// 		const json = this.json;
// 		const extensions = this.extensions;

// 		const meshDef = json.meshes[ meshIndex ];
// 		const primitives = meshDef.primitives;

// 		const pending = [];

// 		for ( let i = 0, il = primitives.length; i < il; i ++ ) {

// 			const material = primitives[ i ].material === undefined
// 				? createDefaultMaterial( this.cache )
// 				: this.getDependency( 'material', primitives[ i ].material );

// 			pending.push( material );

// 		}

// 		pending.push( parser.loadGeometries( primitives ) );

// 		return Promise.all( pending ).then( function ( results ) {

// 			const materials = results.slice( 0, results.length - 1 );
// 			const geometries = results[ results.length - 1 ];

// 			const meshes = [];

// 			for ( let i = 0, il = geometries.length; i < il; i ++ ) {

// 				const geometry = geometries[ i ];
// 				const primitive = primitives[ i ];

// 				// 1. create Mesh

// 				let mesh;

// 				const material = materials[ i ];

// 				if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLES ||
// 						primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ||
// 						primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ||
// 						primitive.mode === undefined ) {

// 					// .isSkinnedMesh isn't in glTF spec. See ._markDefs()
// 					mesh = meshDef.isSkinnedMesh === true
// 						? new SkinnedMesh( geometry, material )
// 						: new Mesh( geometry, material );

// 					if ( mesh.isSkinnedMesh === true ) {

// 						// normalize skin weights to fix malformed assets (see #15319)
// 						mesh.normalizeSkinWeights();

// 					}

// 					if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ) {

// 						mesh.geometry = toTrianglesDrawMode( mesh.geometry, TriangleStripDrawMode );

// 					} else if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ) {

// 						mesh.geometry = toTrianglesDrawMode( mesh.geometry, TriangleFanDrawMode );

// 					}

// 				} else if ( primitive.mode === WEBGL_CONSTANTS.LINES ) {

// 					mesh = new LineSegments( geometry, material );

// 				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_STRIP ) {

// 					mesh = new Line( geometry, material );

// 				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_LOOP ) {

// 					mesh = new LineLoop( geometry, material );

// 				} else if ( primitive.mode === WEBGL_CONSTANTS.POINTS ) {

// 					mesh = new Points( geometry, material );

// 				} else {

// 					throw new Error( 'THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode );

// 				}

// 				if ( Object.keys( mesh.geometry.morphAttributes ).length > 0 ) {

// 					updateMorphTargets( mesh, meshDef );

// 				}

// 				mesh.name = parser.createUniqueName( meshDef.name || ( 'mesh_' + meshIndex ) );

// 				assignExtrasToUserData( mesh, meshDef );

// 				if ( primitive.extensions ) addUnknownExtensionsToUserData( extensions, mesh, primitive );

// 				parser.assignFinalMaterial( mesh );

// 				meshes.push( mesh );

// 			}

// 			for ( let i = 0, il = meshes.length; i < il; i ++ ) {

// 				parser.associations.set( meshes[ i ], {
// 					meshes: meshIndex,
// 					primitives: i
// 				} );

// 			}

// 			if ( meshes.length === 1 ) {

// 				if ( meshDef.extensions ) addUnknownExtensionsToUserData( extensions, meshes[ 0 ], meshDef );

// 				return meshes[ 0 ];

// 			}

// 			const group = new Group();

// 			if ( meshDef.extensions ) addUnknownExtensionsToUserData( extensions, group, meshDef );

// 			parser.associations.set( group, { meshes: meshIndex } );

// 			for ( let i = 0, il = meshes.length; i < il; i ++ ) {

// 				group.add( meshes[ i ] );

// 			}

// 			return group;

// 		} );

// 	}

// 	/**
// 	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
// 	 * @param {number} cameraIndex
// 	 * @return {Promise<THREE.Camera>}
// 	 */
// 	loadCamera( cameraIndex ) {

// 		let camera;
// 		const cameraDef = this.json.cameras[ cameraIndex ];
// 		const params = cameraDef[ cameraDef.type ];

// 		if ( ! params ) {

// 			console.warn( 'THREE.GLTFLoader: Missing camera parameters.' );
// 			return;

// 		}

// 		if ( cameraDef.type === 'perspective' ) {

// 			camera = new PerspectiveCamera( MathUtils.radToDeg( params.yfov ), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6 );

// 		} else if ( cameraDef.type === 'orthographic' ) {

// 			camera = new OrthographicCamera( - params.xmag, params.xmag, params.ymag, - params.ymag, params.znear, params.zfar );

// 		}

// 		if ( cameraDef.name ) camera.name = this.createUniqueName( cameraDef.name );

// 		assignExtrasToUserData( camera, cameraDef );

// 		return Promise.resolve( camera );

// 	}

// 	/**
// 	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
// 	 * @param {number} skinIndex
// 	 * @return {Promise<Skeleton>}
// 	 */
// 	loadSkin( skinIndex ) {

// 		const skinDef = this.json.skins[ skinIndex ];

// 		const pending = [];

// 		for ( let i = 0, il = skinDef.joints.length; i < il; i ++ ) {

// 			pending.push( this._loadNodeShallow( skinDef.joints[ i ] ) );

// 		}

// 		if ( skinDef.inverseBindMatrices !== undefined ) {

// 			pending.push( this.getDependency( 'accessor', skinDef.inverseBindMatrices ) );

// 		} else {

// 			pending.push( null );

// 		}

// 		return Promise.all( pending ).then( function ( results ) {

// 			const inverseBindMatrices = results.pop();
// 			const jointNodes = results;

// 			// Note that bones (joint nodes) may or may not be in the
// 			// scene graph at this time.

// 			const bones = [];
// 			const boneInverses = [];

// 			for ( let i = 0, il = jointNodes.length; i < il; i ++ ) {

// 				const jointNode = jointNodes[ i ];

// 				if ( jointNode ) {

// 					bones.push( jointNode );

// 					const mat = new Matrix4();

// 					if ( inverseBindMatrices !== null ) {

// 						mat.fromArray( inverseBindMatrices.array, i * 16 );

// 					}

// 					boneInverses.push( mat );

// 				} else {

// 					console.warn( 'THREE.GLTFLoader: Joint "%s" could not be found.', skinDef.joints[ i ] );

// 				}

// 			}

// 			return new Skeleton( bones, boneInverses );

// 		} );

// 	}

// 	/**
// 	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
// 	 * @param {number} animationIndex
// 	 * @return {Promise<AnimationClip>}
// 	 */
// 	loadAnimation( animationIndex ) {

// 		const json = this.json;
// 		const parser = this;

// 		const animationDef = json.animations[ animationIndex ];
// 		const animationName = animationDef.name ? animationDef.name : 'animation_' + animationIndex;

// 		const pendingNodes = [];
// 		const pendingInputAccessors = [];
// 		const pendingOutputAccessors = [];
// 		const pendingSamplers = [];
// 		const pendingTargets = [];

// 		for ( let i = 0, il = animationDef.channels.length; i < il; i ++ ) {

// 			const channel = animationDef.channels[ i ];
// 			const sampler = animationDef.samplers[ channel.sampler ];
// 			const target = channel.target;
// 			const name = target.node;
// 			const input = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.input ] : sampler.input;
// 			const output = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.output ] : sampler.output;

// 			if ( target.node === undefined ) continue;

// 			pendingNodes.push( this.getDependency( 'node', name ) );
// 			pendingInputAccessors.push( this.getDependency( 'accessor', input ) );
// 			pendingOutputAccessors.push( this.getDependency( 'accessor', output ) );
// 			pendingSamplers.push( sampler );
// 			pendingTargets.push( target );

// 		}

// 		return Promise.all( [

// 			Promise.all( pendingNodes ),
// 			Promise.all( pendingInputAccessors ),
// 			Promise.all( pendingOutputAccessors ),
// 			Promise.all( pendingSamplers ),
// 			Promise.all( pendingTargets )

// 		] ).then( function ( dependencies ) {

// 			const nodes = dependencies[ 0 ];
// 			const inputAccessors = dependencies[ 1 ];
// 			const outputAccessors = dependencies[ 2 ];
// 			const samplers = dependencies[ 3 ];
// 			const targets = dependencies[ 4 ];

// 			const tracks = [];

// 			for ( let i = 0, il = nodes.length; i < il; i ++ ) {

// 				const node = nodes[ i ];
// 				const inputAccessor = inputAccessors[ i ];
// 				const outputAccessor = outputAccessors[ i ];
// 				const sampler = samplers[ i ];
// 				const target = targets[ i ];

// 				if ( node === undefined ) continue;

// 				if ( node.updateMatrix ) {

// 					node.updateMatrix();

// 				}

// 				const createdTracks = parser._createAnimationTracks( node, inputAccessor, outputAccessor, sampler, target );

// 				if ( createdTracks ) {

// 					for ( let k = 0; k < createdTracks.length; k ++ ) {

// 						tracks.push( createdTracks[ k ] );

// 					}

// 				}

// 			}

// 			return new AnimationClip( animationName, undefined, tracks );

// 		} );

// 	}

// 	createNodeMesh( nodeIndex ) {

// 		const json = this.json;
// 		const parser = this;
// 		const nodeDef = json.nodes[ nodeIndex ];

// 		if ( nodeDef.mesh === undefined ) return null;

// 		return parser.getDependency( 'mesh', nodeDef.mesh ).then( function ( mesh ) {

// 			const node = parser._getNodeRef( parser.meshCache, nodeDef.mesh, mesh );

// 			// if weights are provided on the node, override weights on the mesh.
// 			if ( nodeDef.weights !== undefined ) {

// 				node.traverse( function ( o ) {

// 					if ( ! o.isMesh ) return;

// 					for ( let i = 0, il = nodeDef.weights.length; i < il; i ++ ) {

// 						o.morphTargetInfluences[ i ] = nodeDef.weights[ i ];

// 					}

// 				} );

// 			}

// 			return node;

// 		} );

// 	}

// 	/**
// 	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
// 	 * @param {number} nodeIndex
// 	 * @return {Promise<Object3D>}
// 	 */
// 	loadNode( nodeIndex ) {

// 		const json = this.json;
// 		const parser = this;

// 		const nodeDef = json.nodes[ nodeIndex ];

// 		const nodePending = parser._loadNodeShallow( nodeIndex );

// 		const childPending = [];
// 		const childrenDef = nodeDef.children || [];

// 		for ( let i = 0, il = childrenDef.length; i < il; i ++ ) {

// 			childPending.push( parser.getDependency( 'node', childrenDef[ i ] ) );

// 		}

// 		const skeletonPending = nodeDef.skin === undefined
// 			? Promise.resolve( null )
// 			: parser.getDependency( 'skin', nodeDef.skin );

// 		return Promise.all( [
// 			nodePending,
// 			Promise.all( childPending ),
// 			skeletonPending
// 		] ).then( function ( results ) {

// 			const node = results[ 0 ];
// 			const children = results[ 1 ];
// 			const skeleton = results[ 2 ];

// 			if ( skeleton !== null ) {

// 				// This full traverse should be fine because
// 				// child glTF nodes have not been added to this node yet.
// 				node.traverse( function ( mesh ) {

// 					if ( ! mesh.isSkinnedMesh ) return;

// 					mesh.bind( skeleton, _identityMatrix );

// 				} );

// 			}

// 			for ( let i = 0, il = children.length; i < il; i ++ ) {

// 				node.add( children[ i ] );

// 			}

// 			return node;

// 		} );

// 	}

// 	// ._loadNodeShallow() parses a single node.
// 	// skin and child nodes are created and added in .loadNode() (no '_' prefix).
// 	_loadNodeShallow( nodeIndex ) {

// 		const json = this.json;
// 		const extensions = this.extensions;
// 		const parser = this;

// 		// This method is called from .loadNode() and .loadSkin().
// 		// Cache a node to avoid duplication.

// 		if ( this.nodeCache[ nodeIndex ] !== undefined ) {

// 			return this.nodeCache[ nodeIndex ];

// 		}

// 		const nodeDef = json.nodes[ nodeIndex ];

// 		// reserve node's name before its dependencies, so the root has the intended name.
// 		const nodeName = nodeDef.name ? parser.createUniqueName( nodeDef.name ) : '';

// 		const pending = [];

// 		const meshPromise = parser._invokeOne( function ( ext ) {

// 			return ext.createNodeMesh && ext.createNodeMesh( nodeIndex );

// 		} );

// 		if ( meshPromise ) {

// 			pending.push( meshPromise );

// 		}

// 		if ( nodeDef.camera !== undefined ) {

// 			pending.push( parser.getDependency( 'camera', nodeDef.camera ).then( function ( camera ) {

// 				return parser._getNodeRef( parser.cameraCache, nodeDef.camera, camera );

// 			} ) );

// 		}

// 		parser._invokeAll( function ( ext ) {

// 			return ext.createNodeAttachment && ext.createNodeAttachment( nodeIndex );

// 		} ).forEach( function ( promise ) {

// 			pending.push( promise );

// 		} );

// 		this.nodeCache[ nodeIndex ] = Promise.all( pending ).then( function ( objects ) {

// 			let node;

// 			// .isBone isn't in glTF spec. See ._markDefs
// 			if ( nodeDef.isBone === true ) {

// 				node = new Bone();

// 			} else if ( objects.length > 1 ) {

// 				node = new Group();

// 			} else if ( objects.length === 1 ) {

// 				node = objects[ 0 ];

// 			} else {

// 				node = new Object3D();

// 			}

// 			if ( node !== objects[ 0 ] ) {

// 				for ( let i = 0, il = objects.length; i < il; i ++ ) {

// 					node.add( objects[ i ] );

// 				}

// 			}

// 			if ( nodeDef.name ) {

// 				node.userData.name = nodeDef.name;
// 				node.name = nodeName;

// 			}

// 			assignExtrasToUserData( node, nodeDef );

// 			if ( nodeDef.extensions ) addUnknownExtensionsToUserData( extensions, node, nodeDef );

// 			if ( nodeDef.matrix !== undefined ) {

// 				const matrix = new Matrix4();
// 				matrix.fromArray( nodeDef.matrix );
// 				node.applyMatrix4( matrix );

// 			} else {

// 				if ( nodeDef.translation !== undefined ) {

// 					node.position.fromArray( nodeDef.translation );

// 				}

// 				if ( nodeDef.rotation !== undefined ) {

// 					node.quaternion.fromArray( nodeDef.rotation );

// 				}

// 				if ( nodeDef.scale !== undefined ) {

// 					node.scale.fromArray( nodeDef.scale );

// 				}

// 			}

// 			if ( ! parser.associations.has( node ) ) {

// 				parser.associations.set( node, {} );

// 			}

// 			parser.associations.get( node ).nodes = nodeIndex;

// 			return node;

// 		} );

// 		return this.nodeCache[ nodeIndex ];

// 	}

// 	/**
// 	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
// 	 * @param {number} sceneIndex
// 	 * @return {Promise<Group>}
// 	 */
// 	loadScene( sceneIndex ) {

// 		const extensions = this.extensions;
// 		const sceneDef = this.json.scenes[ sceneIndex ];
// 		const parser = this;

// 		// Loader returns Group, not Scene.
// 		// See: https://github.com/mrdoob/three.js/issues/18342#issuecomment-578981172
// 		const scene = new Group();
// 		if ( sceneDef.name ) scene.name = parser.createUniqueName( sceneDef.name );

// 		assignExtrasToUserData( scene, sceneDef );

// 		if ( sceneDef.extensions ) addUnknownExtensionsToUserData( extensions, scene, sceneDef );

// 		const nodeIds = sceneDef.nodes || [];

// 		const pending = [];

// 		for ( let i = 0, il = nodeIds.length; i < il; i ++ ) {

// 			pending.push( parser.getDependency( 'node', nodeIds[ i ] ) );

// 		}

// 		return Promise.all( pending ).then( function ( nodes ) {

// 			for ( let i = 0, il = nodes.length; i < il; i ++ ) {

// 				scene.add( nodes[ i ] );

// 			}

// 			// Removes dangling associations, associations that reference a node that
// 			// didn't make it into the scene.
// 			const reduceAssociations = ( node ) => {

// 				const reducedAssociations = new Map();

// 				for ( const [ key, value ] of parser.associations ) {

// 					if ( key instanceof Material || key instanceof Texture ) {

// 						reducedAssociations.set( key, value );

// 					}

// 				}

// 				node.traverse( ( node ) => {

// 					const mappings = parser.associations.get( node );

// 					if ( mappings != null ) {

// 						reducedAssociations.set( node, mappings );

// 					}

// 				} );

// 				return reducedAssociations;

// 			};

// 			parser.associations = reduceAssociations( scene );

// 			return scene;

// 		} );

// 	}

// 	_createAnimationTracks( node, inputAccessor, outputAccessor, sampler, target ) {

// 		const tracks = [];

// 		const targetName = node.name ? node.name : node.uuid;
// 		const targetNames = [];

// 		if ( PATH_PROPERTIES[ target.path ] === PATH_PROPERTIES.weights ) {

// 			node.traverse( function ( object ) {

// 				if ( object.morphTargetInfluences ) {

// 					targetNames.push( object.name ? object.name : object.uuid );

// 				}

// 			} );

// 		} else {

// 			targetNames.push( targetName );

// 		}

// 		let TypedKeyframeTrack;

// 		switch ( PATH_PROPERTIES[ target.path ] ) {

// 			case PATH_PROPERTIES.weights:

// 				TypedKeyframeTrack = NumberKeyframeTrack;
// 				break;

// 			case PATH_PROPERTIES.rotation:

// 				TypedKeyframeTrack = QuaternionKeyframeTrack;
// 				break;

// 			case PATH_PROPERTIES.position:
// 			case PATH_PROPERTIES.scale:

// 				TypedKeyframeTrack = VectorKeyframeTrack;
// 				break;

// 			default:

// 				switch ( outputAccessor.itemSize ) {

// 					case 1:
// 						TypedKeyframeTrack = NumberKeyframeTrack;
// 						break;
// 					case 2:
// 					case 3:
// 					default:
// 						TypedKeyframeTrack = VectorKeyframeTrack;
// 						break;

// 				}

// 				break;

// 		}

// 		const interpolation = sampler.interpolation !== undefined ? INTERPOLATION[ sampler.interpolation ] : InterpolateLinear;


// 		const outputArray = this._getArrayFromAccessor( outputAccessor );

// 		for ( let j = 0, jl = targetNames.length; j < jl; j ++ ) {

// 			const track = new TypedKeyframeTrack(
// 				targetNames[ j ] + '.' + PATH_PROPERTIES[ target.path ],
// 				inputAccessor.array,
// 				outputArray,
// 				interpolation
// 			);

// 			// Override interpolation with custom factory method.
// 			if ( sampler.interpolation === 'CUBICSPLINE' ) {

// 				this._createCubicSplineTrackInterpolant( track );

// 			}

// 			tracks.push( track );

// 		}

// 		return tracks;

// 	}

// 	_getArrayFromAccessor( accessor ) {

// 		let outputArray = accessor.array;

// 		if ( accessor.normalized ) {

// 			const scale = getNormalizedComponentScale( outputArray.constructor );
// 			const scaled = new Float32Array( outputArray.length );

// 			for ( let j = 0, jl = outputArray.length; j < jl; j ++ ) {

// 				scaled[ j ] = outputArray[ j ] * scale;

// 			}

// 			outputArray = scaled;

// 		}

// 		return outputArray;

// 	}

// 	_createCubicSplineTrackInterpolant( track ) {

// 		track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline( result ) {

// 			// A CUBICSPLINE keyframe in glTF has three output values for each input value,
// 			// representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
// 			// must be divided by three to get the interpolant's sampleSize argument.

// 			const interpolantType = ( this instanceof QuaternionKeyframeTrack ) ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;

// 			return new interpolantType( this.times, this.values, this.getValueSize() / 3, result );

// 		};

// 		// Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
// 		track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;

// 	}

// }

// /**
//  * @param {BufferGeometry} geometry
//  * @param {GLTF.Primitive} primitiveDef
//  * @param {GLTFParser} parser
//  */
// function computeBounds( geometry, primitiveDef, parser ) {

// 	const attributes = primitiveDef.attributes;

// 	const box = new Box3();

// 	if ( attributes.POSITION !== undefined ) {

// 		const accessor = parser.json.accessors[ attributes.POSITION ];

// 		const min = accessor.min;
// 		const max = accessor.max;

// 		// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

// 		if ( min !== undefined && max !== undefined ) {

// 			box.set(
// 				new Vector3( min[ 0 ], min[ 1 ], min[ 2 ] ),
// 				new Vector3( max[ 0 ], max[ 1 ], max[ 2 ] )
// 			);

// 			if ( accessor.normalized ) {

// 				const boxScale = getNormalizedComponentScale( WEBGL_COMPONENT_TYPES[ accessor.componentType ] );
// 				box.min.multiplyScalar( boxScale );
// 				box.max.multiplyScalar( boxScale );

// 			}

// 		} else {

// 			console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

// 			return;

// 		}

// 	} else {

// 		return;

// 	}

// 	const targets = primitiveDef.targets;

// 	if ( targets !== undefined ) {

// 		const maxDisplacement = new Vector3();
// 		const vector = new Vector3();

// 		for ( let i = 0, il = targets.length; i < il; i ++ ) {

// 			const target = targets[ i ];

// 			if ( target.POSITION !== undefined ) {

// 				const accessor = parser.json.accessors[ target.POSITION ];
// 				const min = accessor.min;
// 				const max = accessor.max;

// 				// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

// 				if ( min !== undefined && max !== undefined ) {

// 					// we need to get max of absolute components because target weight is [-1,1]
// 					vector.setX( Math.max( Math.abs( min[ 0 ] ), Math.abs( max[ 0 ] ) ) );
// 					vector.setY( Math.max( Math.abs( min[ 1 ] ), Math.abs( max[ 1 ] ) ) );
// 					vector.setZ( Math.max( Math.abs( min[ 2 ] ), Math.abs( max[ 2 ] ) ) );


// 					if ( accessor.normalized ) {

// 						const boxScale = getNormalizedComponentScale( WEBGL_COMPONENT_TYPES[ accessor.componentType ] );
// 						vector.multiplyScalar( boxScale );

// 					}

// 					// Note: this assumes that the sum of all weights is at most 1. This isn't quite correct - it's more conservative
// 					// to assume that each target can have a max weight of 1. However, for some use cases - notably, when morph targets
// 					// are used to implement key-frame animations and as such only two are active at a time - this results in very large
// 					// boxes. So for now we make a box that's sometimes a touch too small but is hopefully mostly of reasonable size.
// 					maxDisplacement.max( vector );

// 				} else {

// 					console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

// 				}

// 			}

// 		}

// 		// As per comment above this box isn't conservative, but has a reasonable size for a very large number of morph targets.
// 		box.expandByVector( maxDisplacement );

// 	}

// 	geometry.boundingBox = box;

// 	const sphere = new Sphere();

// 	box.getCenter( sphere.center );
// 	sphere.radius = box.min.distanceTo( box.max ) / 2;

// 	geometry.boundingSphere = sphere;

// }

// /**
//  * @param {BufferGeometry} geometry
//  * @param {GLTF.Primitive} primitiveDef
//  * @param {GLTFParser} parser
//  * @return {Promise<BufferGeometry>}
//  */
// function addPrimitiveAttributes( geometry, primitiveDef, parser ) {

// 	const attributes = primitiveDef.attributes;

// 	const pending = [];

// 	function assignAttributeAccessor( accessorIndex, attributeName ) {

// 		return parser.getDependency( 'accessor', accessorIndex )
// 			.then( function ( accessor ) {

// 				geometry.setAttribute( attributeName, accessor );

// 			} );

// 	}

// 	for ( const gltfAttributeName in attributes ) {

// 		const threeAttributeName = ATTRIBUTES[ gltfAttributeName ] || gltfAttributeName.toLowerCase();

// 		// Skip attributes already provided by e.g. Draco extension.
// 		if ( threeAttributeName in geometry.attributes ) continue;

// 		pending.push( assignAttributeAccessor( attributes[ gltfAttributeName ], threeAttributeName ) );

// 	}

// 	if ( primitiveDef.indices !== undefined && ! geometry.index ) {

// 		const accessor = parser.getDependency( 'accessor', primitiveDef.indices ).then( function ( accessor ) {

// 			geometry.setIndex( accessor );

// 		} );

// 		pending.push( accessor );

// 	}

// 	if ( ColorManagement.workingColorSpace !== LinearSRGBColorSpace && 'COLOR_0' in attributes ) {

// 		console.warn( `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ColorManagement.workingColorSpace}" not supported.` );

// 	}

// 	assignExtrasToUserData( geometry, primitiveDef );

// 	computeBounds( geometry, primitiveDef, parser );

// 	return Promise.all( pending ).then( function () {

// 		return primitiveDef.targets !== undefined
// 			? addMorphTargets( geometry, primitiveDef.targets, parser )
// 			: geometry;

// 	} );

// }

// export { GLTFLoader };


/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/three-gltf-loader@1.111.0/index.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var THREE=require("three"),_GLTFLoader=function(){function e(e){THREE.Loader.call(this,e),this.dracoLoader=null,this.ddsLoader=null}function t(){var e={};return{get:function(t){return e[t]},add:function(t,r){e[t]=r},remove:function(t){delete e[t]},removeAll:function(){e={}}}}e.prototype=Object.assign(Object.create(THREE.Loader.prototype),{constructor:e,load:function(e,t,r,a){var s,n=this;s=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:THREE.LoaderUtils.extractUrlBase(e),n.manager.itemStart(e);var i=function(t){a?a(t):console.error(t),n.manager.itemError(e),n.manager.itemEnd(e)},o=new THREE.FileLoader(n.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),"use-credentials"===n.crossOrigin&&o.setWithCredentials(!0),o.load(e,function(r){try{n.parse(r,s,function(r){t(r),n.manager.itemEnd(e)},i)}catch(e){i(e)}},r,i)},setDRACOLoader:function(e){return this.dracoLoader=e,this},setDDSLoader:function(e){return this.ddsLoader=e,this},parse:function(e,t,o,l){var m,f={};if("string"==typeof e)m=e;else if(THREE.LoaderUtils.decodeText(new Uint8Array(e,0,4))===i){try{f[r.KHR_BINARY_GLTF]=new p(e)}catch(e){return void(l&&l(e))}m=f[r.KHR_BINARY_GLTF].content}else m=THREE.LoaderUtils.decodeText(new Uint8Array(e));var v=JSON.parse(m);if(void 0===v.asset||v.asset.version[0]<2)l&&l(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));else{if(v.extensionsUsed)for(var E=0;E<v.extensionsUsed.length;++E){var T=v.extensionsUsed[E],g=v.extensionsRequired||[];switch(T){case r.KHR_LIGHTS_PUNCTUAL:f[T]=new s(v);break;case r.KHR_MATERIALS_UNLIT:f[T]=new n;break;case r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:f[T]=new d;break;case r.KHR_DRACO_MESH_COMPRESSION:f[T]=new u(v,this.dracoLoader);break;case r.MSFT_TEXTURE_DDS:f[T]=new a(this.ddsLoader);break;case r.KHR_TEXTURE_TRANSFORM:f[T]=new c;break;case r.KHR_MESH_QUANTIZATION:f[T]=new h;break;default:g.indexOf(T)>=0&&console.warn('THREE.GLTFLoader: Unknown extension "'+T+'".')}}new D(v,f,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,manager:this.manager}).parse(o,l)}}});var r={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",MSFT_TEXTURE_DDS:"MSFT_texture_dds"};function a(e){if(!e)throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing THREE.DDSLoader");this.name=r.MSFT_TEXTURE_DDS,this.ddsLoader=e}function s(e){this.name=r.KHR_LIGHTS_PUNCTUAL;var t=e.extensions&&e.extensions[r.KHR_LIGHTS_PUNCTUAL]||{};this.lightDefs=t.lights||[]}function n(){this.name=r.KHR_MATERIALS_UNLIT}s.prototype.loadLight=function(e){var t,r=this.lightDefs[e],a=new THREE.Color(16777215);void 0!==r.color&&a.fromArray(r.color);var s=void 0!==r.range?r.range:0;switch(r.type){case"directional":(t=new THREE.DirectionalLight(a)).target.position.set(0,0,-1),t.add(t.target);break;case"point":(t=new THREE.PointLight(a)).distance=s;break;case"spot":(t=new THREE.SpotLight(a)).distance=s,r.spot=r.spot||{},r.spot.innerConeAngle=void 0!==r.spot.innerConeAngle?r.spot.innerConeAngle:0,r.spot.outerConeAngle=void 0!==r.spot.outerConeAngle?r.spot.outerConeAngle:Math.PI/4,t.angle=r.spot.outerConeAngle,t.penumbra=1-r.spot.innerConeAngle/r.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw new Error('THREE.GLTFLoader: Unexpected light type, "'+r.type+'".')}return t.position.set(0,0,0),t.decay=2,void 0!==r.intensity&&(t.intensity=r.intensity),t.name=r.name||"light_"+e,Promise.resolve(t)},n.prototype.getMaterialType=function(){return THREE.MeshBasicMaterial},n.prototype.extendParams=function(e,t,r){var a=[];e.color=new THREE.Color(1,1,1),e.opacity=1;var s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){var n=s.baseColorFactor;e.color.fromArray(n),e.opacity=n[3]}void 0!==s.baseColorTexture&&a.push(r.assignTexture(e,"map",s.baseColorTexture))}return Promise.all(a)};var i="glTF",o=12,l={JSON:1313821514,BIN:5130562};function p(e){this.name=r.KHR_BINARY_GLTF,this.content=null,this.body=null;var t=new DataView(e,0,o);if(this.header={magic:THREE.LoaderUtils.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==i)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");for(var a=new DataView(e,o),s=0;s<a.byteLength;){var n=a.getUint32(s,!0);s+=4;var p=a.getUint32(s,!0);if(s+=4,p===l.JSON){var u=new Uint8Array(e,o+s,n);this.content=THREE.LoaderUtils.decodeText(u)}else if(p===l.BIN){var c=o+s;this.body=e.slice(c,c+n)}s+=n}if(null===this.content)throw new Error("THREE.GLTFLoader: JSON content not found.")}function u(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=r.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t}function c(){this.name=r.KHR_TEXTURE_TRANSFORM}function d(){return{name:r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,specularGlossinessParams:["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"],getMaterialType:function(){return THREE.ShaderMaterial},extendParams:function(e,t,r){var a=t.extensions[this.name],s=THREE.ShaderLib.standard,n=THREE.UniformsUtils.clone(s.uniforms),i=["#ifdef USE_SPECULARMAP","\tuniform sampler2D specularMap;","#endif"].join("\n"),o=["#ifdef USE_GLOSSINESSMAP","\tuniform sampler2D glossinessMap;","#endif"].join("\n"),l=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","\tvec4 texelSpecular = texture2D( specularMap, vUv );","\ttexelSpecular = sRGBToLinear( texelSpecular );","\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","\tspecularFactor *= texelSpecular.rgb;","#endif"].join("\n"),p=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );","\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","\tglossinessFactor *= texelGlossiness.a;","#endif"].join("\n"),u=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb;","material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );","material.specularColor = specularFactor.rgb;"].join("\n"),c=s.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",i).replace("#include <metalnessmap_pars_fragment>",o).replace("#include <roughnessmap_fragment>",l).replace("#include <metalnessmap_fragment>",p).replace("#include <lights_physical_fragment>",u);delete n.roughness,delete n.metalness,delete n.roughnessMap,delete n.metalnessMap,n.specular={value:(new THREE.Color).setHex(1118481)},n.glossiness={value:.5},n.specularMap={value:null},n.glossinessMap={value:null},e.vertexShader=s.vertexShader,e.fragmentShader=c,e.uniforms=n,e.defines={STANDARD:""},e.color=new THREE.Color(1,1,1),e.opacity=1;var d=[];if(Array.isArray(a.diffuseFactor)){var h=a.diffuseFactor;e.color.fromArray(h),e.opacity=h[3]}if(void 0!==a.diffuseTexture&&d.push(r.assignTexture(e,"map",a.diffuseTexture)),e.emissive=new THREE.Color(0,0,0),e.glossiness=void 0!==a.glossinessFactor?a.glossinessFactor:1,e.specular=new THREE.Color(1,1,1),Array.isArray(a.specularFactor)&&e.specular.fromArray(a.specularFactor),void 0!==a.specularGlossinessTexture){var m=a.specularGlossinessTexture;d.push(r.assignTexture(e,"glossinessMap",m)),d.push(r.assignTexture(e,"specularMap",m))}return Promise.all(d)},createMaterial:function(e){var t=new THREE.ShaderMaterial({defines:e.defines,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,uniforms:e.uniforms,fog:!0,lights:!0,opacity:e.opacity,transparent:e.transparent});return t.isGLTFSpecularGlossinessMaterial=!0,t.color=e.color,t.map=void 0===e.map?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=void 0===e.aoMap?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=void 0===e.emissiveMap?null:e.emissiveMap,t.bumpMap=void 0===e.bumpMap?null:e.bumpMap,t.bumpScale=1,t.normalMap=void 0===e.normalMap?null:e.normalMap,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=void 0===e.specularMap?null:e.specularMap,t.specular=e.specular,t.glossinessMap=void 0===e.glossinessMap?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=void 0===e.envMap?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t.extensions.derivatives=!0,t},cloneMaterial:function(e){var t=e.clone();t.isGLTFSpecularGlossinessMaterial=!0;for(var r=this.specularGlossinessParams,a=0,s=r.length;a<s;a++){var n=e[r[a]];t[r[a]]=n&&n.isColor?n.clone():n}return t},refreshUniforms:function(e,t,r,a,s){if(!0===s.isGLTFSpecularGlossinessMaterial){var n,i=s.uniforms,o=s.defines;i.opacity.value=s.opacity,i.diffuse.value.copy(s.color),i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),i.map.value=s.map,i.specularMap.value=s.specularMap,i.alphaMap.value=s.alphaMap,i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,s.map?n=s.map:s.specularMap?n=s.specularMap:s.displacementMap?n=s.displacementMap:s.normalMap?n=s.normalMap:s.bumpMap?n=s.bumpMap:s.glossinessMap?n=s.glossinessMap:s.alphaMap?n=s.alphaMap:s.emissiveMap&&(n=s.emissiveMap),void 0!==n&&(n.isWebGLRenderTarget&&(n=n.texture),!0===n.matrixAutoUpdate&&n.updateMatrix(),i.uvTransform.value.copy(n.matrix)),s.envMap&&(i.envMap.value=s.envMap,i.envMapIntensity.value=s.envMapIntensity,i.flipEnvMap.value=s.envMap.isCubeTexture?-1:1,i.reflectivity.value=s.reflectivity,i.refractionRatio.value=s.refractionRatio,i.maxMipLevel.value=e.properties.get(s.envMap).__maxMipLevel),i.specular.value.copy(s.specular),i.glossiness.value=s.glossiness,i.glossinessMap.value=s.glossinessMap,i.emissiveMap.value=s.emissiveMap,i.bumpMap.value=s.bumpMap,i.normalMap.value=s.normalMap,i.displacementMap.value=s.displacementMap,i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias,null!==i.glossinessMap.value&&void 0===o.USE_GLOSSINESSMAP&&(o.USE_GLOSSINESSMAP="",o.USE_ROUGHNESSMAP=""),null===i.glossinessMap.value&&void 0!==o.USE_GLOSSINESSMAP&&(delete o.USE_GLOSSINESSMAP,delete o.USE_ROUGHNESSMAP)}}}}function h(){this.name=r.KHR_MESH_QUANTIZATION}function m(e,t,r,a){THREE.Interpolant.call(this,e,t,r,a)}u.prototype.decodePrimitive=function(e,t){var r=this.json,a=this.dracoLoader,s=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,i={},o={},l={};for(var p in n){var u=A[p]||p.toLowerCase();i[u]=n[p]}for(p in e.attributes){u=A[p]||p.toLowerCase();if(void 0!==n[p]){var c=r.accessors[e.attributes[p]],d=y[c.componentType];l[u]=d,o[u]=!0===c.normalized}}return t.getDependency("bufferView",s).then(function(e){return new Promise(function(t){a.decodeDracoFile(e,function(e){for(var r in e.attributes){var a=e.attributes[r],s=o[r];void 0!==s&&(a.normalized=s)}t(e)},i,l)})})},c.prototype.extendTexture=function(e,t){return e=e.clone(),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),void 0!==t.texCoord&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),e.needsUpdate=!0,e},m.prototype=Object.create(THREE.Interpolant.prototype),m.prototype.constructor=m,m.prototype.copySampleValue_=function(e){for(var t=this.resultBuffer,r=this.sampleValues,a=this.valueSize,s=e*a*3+a,n=0;n!==a;n++)t[n]=r[s+n];return t},m.prototype.beforeStart_=m.prototype.copySampleValue_,m.prototype.afterEnd_=m.prototype.copySampleValue_,m.prototype.interpolate_=function(e,t,r,a){for(var s=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=2*i,l=3*i,p=a-t,u=(r-t)/p,c=u*u,d=c*u,h=e*l,m=h-l,f=-2*d+3*c,v=d-c,E=1-f,T=v-c+u,g=0;g!==i;g++){var R=n[m+g+i],M=n[m+g+o]*p,S=n[h+g+i],y=n[h+g]*p;s[g]=E*R+T*M+f*S+v*y}return s};var f,v=0,E=1,T=2,g=3,R=4,M=5,S=6,y={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},L={9728:THREE.NearestFilter,9729:THREE.LinearFilter,9984:THREE.NearestMipmapNearestFilter,9985:THREE.LinearMipmapNearestFilter,9986:THREE.NearestMipmapLinearFilter,9987:THREE.LinearMipmapLinearFilter},H={33071:THREE.ClampToEdgeWrapping,33648:THREE.MirroredRepeatWrapping,10497:THREE.RepeatWrapping},_={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},A={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},x={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w={CUBICSPLINE:void 0,LINEAR:THREE.InterpolateLinear,STEP:THREE.InterpolateDiscrete},b="OPAQUE",I="MASK",P="BLEND",U={"image/png":THREE.RGBAFormat,"image/jpeg":THREE.RGBFormat};function F(e,t){return"string"!=typeof e||""===e?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)?e:/^data:.*,.*$/i.test(e)?e:/^blob:.*$/i.test(e)?e:t+e)}function O(e,t,r){for(var a in r.extensions)void 0===e[a]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[a]=r.extensions[a])}function C(e,t){void 0!==t.extras&&("object"==typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function N(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(var r=0,a=t.weights.length;r<a;r++)e.morphTargetInfluences[r]=t.weights[r];if(t.extras&&Array.isArray(t.extras.targetNames)){var s=t.extras.targetNames;if(e.morphTargetInfluences.length===s.length){e.morphTargetDictionary={};for(r=0,a=s.length;r<a;r++)e.morphTargetDictionary[s[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function G(e){for(var t="",r=Object.keys(e).sort(),a=0,s=r.length;a<s;a++)t+=r[a]+":"+e[r[a]]+";";return t}function D(e,r,a){this.json=e||{},this.extensions=r||{},this.options=a||{},this.cache=new t,this.primitiveCache={},this.textureLoader=new THREE.TextureLoader(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.fileLoader=new THREE.FileLoader(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}function B(e,t,r){var a=t.attributes,s=[];function n(t,a){return r.getDependency("accessor",t).then(function(t){e.setAttribute(a,t)})}for(var i in a){var o=A[i]||i.toLowerCase();o in e.attributes||s.push(n(a[i],o))}if(void 0!==t.indices&&!e.index){var l=r.getDependency("accessor",t.indices).then(function(t){e.setIndex(t)});s.push(l)}return C(e,t),function(e,t,r){var a=t.attributes,s=new THREE.Box3;if(void 0!==a.POSITION){var n=(c=r.json.accessors[a.POSITION]).min,i=c.max;s.set(new THREE.Vector3(n[0],n[1],n[2]),new THREE.Vector3(i[0],i[1],i[2]));var o=t.targets;if(void 0!==o)for(var l=new THREE.Vector3,p=0,u=o.length;p<u;p++){var c,d=o[p];if(void 0!==d.POSITION)n=(c=r.json.accessors[d.POSITION]).min,i=c.max,l.setX(Math.max(Math.abs(n[0]),Math.abs(i[0]))),l.setY(Math.max(Math.abs(n[1]),Math.abs(i[1]))),l.setZ(Math.max(Math.abs(n[2]),Math.abs(i[2]))),s.expandByVector(l)}e.boundingBox=s;var h=new THREE.Sphere;s.getCenter(h.center),h.radius=s.min.distanceTo(s.max)/2,e.boundingSphere=h}}(e,t,r),Promise.all(s).then(function(){return void 0!==t.targets?function(e,t,r){for(var a=!1,s=!1,n=0,i=t.length;n<i&&(void 0!==(p=t[n]).POSITION&&(a=!0),void 0!==p.NORMAL&&(s=!0),!a||!s);n++);if(!a&&!s)return Promise.resolve(e);var o=[],l=[];for(n=0,i=t.length;n<i;n++){var p=t[n];if(a){var u=void 0!==p.POSITION?r.getDependency("accessor",p.POSITION):e.attributes.position;o.push(u)}s&&(u=void 0!==p.NORMAL?r.getDependency("accessor",p.NORMAL):e.attributes.normal,l.push(u))}return Promise.all([Promise.all(o),Promise.all(l)]).then(function(t){var r=t[0],n=t[1];return a&&(e.morphAttributes.position=r),s&&(e.morphAttributes.normal=n),e.morphTargetsRelative=!0,e})}(e,t.targets,r):e})}return D.prototype.parse=function(e,t){var r=this,a=this.json,s=this.extensions;this.cache.removeAll(),this.markDefs(),Promise.all([this.getDependencies("scene"),this.getDependencies("animation"),this.getDependencies("camera")]).then(function(t){var n={scene:t[0][a.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:a.asset,parser:r,userData:{}};O(s,n,a),C(n,a),e(n)}).catch(t)},D.prototype.markDefs=function(){for(var e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[],a={},s={},n=0,i=t.length;n<i;n++)for(var o=t[n].joints,l=0,p=o.length;l<p;l++)e[o[l]].isBone=!0;for(var u=0,c=e.length;u<c;u++){var d=e[u];void 0!==d.mesh&&(void 0===a[d.mesh]&&(a[d.mesh]=s[d.mesh]=0),a[d.mesh]++,void 0!==d.skin&&(r[d.mesh].isSkinnedMesh=!0))}this.json.meshReferences=a,this.json.meshUses=s},D.prototype.getDependency=function(e,t){var a=e+":"+t,s=this.cache.get(a);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this.loadMesh(t);break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this.loadBufferView(t);break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this.loadMaterial(t);break;case"texture":s=this.loadTexture(t);break;case"skin":s=this.loadSkin(t);break;case"animation":s=this.loadAnimation(t);break;case"camera":s=this.loadCamera(t);break;case"light":s=this.extensions[r.KHR_LIGHTS_PUNCTUAL].loadLight(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(a,s)}return s},D.prototype.getDependencies=function(e){var t=this.cache.get(e);if(!t){var r=this,a=this.json[e+("mesh"===e?"es":"s")]||[];t=Promise.all(a.map(function(t,a){return r.getDependency(e,a)})),this.cache.add(e,t)}return t},D.prototype.loadBuffer=function(e){var t=this.json.buffers[e],a=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[r.KHR_BINARY_GLTF].body);var s=this.options;return new Promise(function(e,r){a.load(F(t.uri,s.path),e,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})},D.prototype.loadBufferView=function(e){var t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(e){var r=t.byteLength||0,a=t.byteOffset||0;return e.slice(a,a+r)})},D.prototype.loadAccessor=function(e){var t=this,r=this.json,a=this.json.accessors[e];if(void 0===a.bufferView&&void 0===a.sparse)return Promise.resolve(null);var s=[];return void 0!==a.bufferView?s.push(this.getDependency("bufferView",a.bufferView)):s.push(null),void 0!==a.sparse&&(s.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(s).then(function(e){var s,n,i=e[0],o=_[a.type],l=y[a.componentType],p=l.BYTES_PER_ELEMENT,u=p*o,c=a.byteOffset||0,d=void 0!==a.bufferView?r.bufferViews[a.bufferView].byteStride:void 0,h=!0===a.normalized;if(d&&d!==u){var m=Math.floor(c/d),f="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+m+":"+a.count,v=t.cache.get(f);v||(s=new l(i,m*d,a.count*d/p),v=new THREE.InterleavedBuffer(s,d/p),t.cache.add(f,v)),n=new THREE.InterleavedBufferAttribute(v,o,c%d/p,h)}else s=null===i?new l(a.count*o):new l(i,c,a.count*o),n=new THREE.BufferAttribute(s,o,h);if(void 0!==a.sparse){var E=_.SCALAR,T=y[a.sparse.indices.componentType],g=a.sparse.indices.byteOffset||0,R=a.sparse.values.byteOffset||0,M=new T(e[1],g,a.sparse.count*E),S=new l(e[2],R,a.sparse.count*o);null!==i&&(n=new THREE.BufferAttribute(n.array.slice(),n.itemSize,n.normalized));for(var L=0,H=M.length;L<H;L++){var A=M[L];if(n.setX(A,S[L*o]),o>=2&&n.setY(A,S[L*o+1]),o>=3&&n.setZ(A,S[L*o+2]),o>=4&&n.setW(A,S[L*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return n})},D.prototype.loadTexture=function(e){var t,a=this,s=this.json,n=this.options,i=this.textureLoader,o=window.URL||window.webkitURL,l=s.textures[e],p=l.extensions||{},u=(t=p[r.MSFT_TEXTURE_DDS]?s.images[p[r.MSFT_TEXTURE_DDS].source]:s.images[l.source]).uri,c=!1;return void 0!==t.bufferView&&(u=a.getDependency("bufferView",t.bufferView).then(function(e){c=!0;var r=new Blob([e],{type:t.mimeType});return u=o.createObjectURL(r)})),Promise.resolve(u).then(function(e){var t=n.manager.getHandler(e);return t||(t=p[r.MSFT_TEXTURE_DDS]?a.extensions[r.MSFT_TEXTURE_DDS].ddsLoader:i),new Promise(function(r,a){t.load(F(e,n.path),r,void 0,a)})}).then(function(e){!0===c&&o.revokeObjectURL(u),e.flipY=!1,void 0!==l.name&&(e.name=l.name),t.mimeType in U&&(e.format=U[t.mimeType]);var r=(s.samplers||{})[l.sampler]||{};return e.magFilter=L[r.magFilter]||THREE.LinearFilter,e.minFilter=L[r.minFilter]||THREE.LinearMipmapLinearFilter,e.wrapS=H[r.wrapS]||THREE.RepeatWrapping,e.wrapT=H[r.wrapT]||THREE.RepeatWrapping,e})},D.prototype.assignTexture=function(e,t,a){var s=this;return this.getDependency("texture",a.index).then(function(n){if(!n.isCompressedTexture)switch(t){case"aoMap":case"emissiveMap":case"metalnessMap":case"normalMap":case"roughnessMap":n.format=THREE.RGBFormat}if(s.extensions[r.KHR_TEXTURE_TRANSFORM]){var i=void 0!==a.extensions?a.extensions[r.KHR_TEXTURE_TRANSFORM]:void 0;i&&(n=s.extensions[r.KHR_TEXTURE_TRANSFORM].extendTexture(n,i))}e[t]=n})},D.prototype.assignFinalMaterial=function(e){var t=e.geometry,a=e.material,s=this.extensions,n=void 0!==t.attributes.tangent,i=void 0!==t.attributes.color,o=void 0===t.attributes.normal,l=!0===e.isSkinnedMesh,p=Object.keys(t.morphAttributes).length>0,u=p&&void 0!==t.morphAttributes.normal;if(e.isPoints){var c="PointsMaterial:"+a.uuid,d=this.cache.get(c);d||(d=new THREE.PointsMaterial,THREE.Material.prototype.copy.call(d,a),d.color.copy(a.color),d.map=a.map,d.sizeAttenuation=!1,this.cache.add(c,d)),a=d}else if(e.isLine){c="LineBasicMaterial:"+a.uuid;var h=this.cache.get(c);h||(h=new THREE.LineBasicMaterial,THREE.Material.prototype.copy.call(h,a),h.color.copy(a.color),this.cache.add(c,h)),a=h}if(n||i||o||l||p){c="ClonedMaterial:"+a.uuid+":";a.isGLTFSpecularGlossinessMaterial&&(c+="specular-glossiness:"),l&&(c+="skinning:"),n&&(c+="vertex-tangents:"),i&&(c+="vertex-colors:"),o&&(c+="flat-shading:"),p&&(c+="morph-targets:"),u&&(c+="morph-normals:");var m=this.cache.get(c);m||(m=a.isGLTFSpecularGlossinessMaterial?s[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial(a):a.clone(),l&&(m.skinning=!0),n&&(m.vertexTangents=!0),i&&(m.vertexColors=THREE.VertexColors),o&&(m.flatShading=!0),p&&(m.morphTargets=!0),u&&(m.morphNormals=!0),this.cache.add(c,m)),a=m}a.aoMap&&void 0===t.attributes.uv2&&void 0!==t.attributes.uv&&(console.log("THREE.GLTFLoader: Duplicating UVs to support aoMap."),t.setAttribute("uv2",new THREE.BufferAttribute(t.attributes.uv.array,2))),a.isGLTFSpecularGlossinessMaterial&&(e.onBeforeRender=s[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms),e.material=a},D.prototype.loadMaterial=function(e){var t,a=this.json,s=this.extensions,n=a.materials[e],i={},o=n.extensions||{},l=[];if(o[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){var p=s[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];t=p.getMaterialType(),l.push(p.extendParams(i,n,this))}else if(o[r.KHR_MATERIALS_UNLIT]){var u=s[r.KHR_MATERIALS_UNLIT];t=u.getMaterialType(),l.push(u.extendParams(i,n,this))}else{t=THREE.MeshStandardMaterial;var c=n.pbrMetallicRoughness||{};if(i.color=new THREE.Color(1,1,1),i.opacity=1,Array.isArray(c.baseColorFactor)){var d=c.baseColorFactor;i.color.fromArray(d),i.opacity=d[3]}void 0!==c.baseColorTexture&&l.push(this.assignTexture(i,"map",c.baseColorTexture)),i.metalness=void 0!==c.metallicFactor?c.metallicFactor:1,i.roughness=void 0!==c.roughnessFactor?c.roughnessFactor:1,void 0!==c.metallicRoughnessTexture&&(l.push(this.assignTexture(i,"metalnessMap",c.metallicRoughnessTexture)),l.push(this.assignTexture(i,"roughnessMap",c.metallicRoughnessTexture)))}!0===n.doubleSided&&(i.side=THREE.DoubleSide);var h=n.alphaMode||b;return h===P?i.transparent=!0:(i.transparent=!1,h===I&&(i.alphaTest=void 0!==n.alphaCutoff?n.alphaCutoff:.5)),void 0!==n.normalTexture&&t!==THREE.MeshBasicMaterial&&(l.push(this.assignTexture(i,"normalMap",n.normalTexture)),i.normalScale=new THREE.Vector2(1,1),void 0!==n.normalTexture.scale&&i.normalScale.set(n.normalTexture.scale,n.normalTexture.scale)),void 0!==n.occlusionTexture&&t!==THREE.MeshBasicMaterial&&(l.push(this.assignTexture(i,"aoMap",n.occlusionTexture)),void 0!==n.occlusionTexture.strength&&(i.aoMapIntensity=n.occlusionTexture.strength)),void 0!==n.emissiveFactor&&t!==THREE.MeshBasicMaterial&&(i.emissive=(new THREE.Color).fromArray(n.emissiveFactor)),void 0!==n.emissiveTexture&&t!==THREE.MeshBasicMaterial&&l.push(this.assignTexture(i,"emissiveMap",n.emissiveTexture)),Promise.all(l).then(function(){var e;return e=t===THREE.ShaderMaterial?s[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(i):new t(i),void 0!==n.name&&(e.name=n.name),e.map&&(e.map.encoding=THREE.sRGBEncoding),e.emissiveMap&&(e.emissiveMap.encoding=THREE.sRGBEncoding),e.specularMap&&(e.specularMap.encoding=THREE.sRGBEncoding),C(e,n),n.extensions&&O(s,e,n),e})},D.prototype.loadGeometries=function(e){var t=this,a=this.extensions,s=this.primitiveCache;function n(e){return a[r.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(r){return B(r,e,t)})}for(var i,o,l=[],p=0,u=e.length;p<u;p++){var c,d=e[p],h=(o=void 0,(o=(i=d).extensions&&i.extensions[r.KHR_DRACO_MESH_COMPRESSION])?"draco:"+o.bufferView+":"+o.indices+":"+G(o.attributes):i.indices+":"+G(i.attributes)+":"+i.mode),m=s[h];if(m)l.push(m.promise);else c=d.extensions&&d.extensions[r.KHR_DRACO_MESH_COMPRESSION]?n(d):B(new THREE.BufferGeometry,d,t),s[h]={primitive:d,promise:c},l.push(c)}return Promise.all(l)},D.prototype.loadMesh=function(e){for(var t=this,r=this.json.meshes[e],a=r.primitives,s=[],n=0,i=a.length;n<i;n++){var o=void 0===a[n].material?f=f||new THREE.MeshStandardMaterial({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:THREE.FrontSide}):this.getDependency("material",a[n].material);s.push(o)}return Promise.all(s).then(function(s){return t.loadGeometries(a).then(function(n){for(var i=[],o=0,l=n.length;o<l;o++){var p,u=n[o],c=a[o],d=s[o];if(c.mode===R||c.mode===M||c.mode===S||void 0===c.mode)!0!==(p=!0===r.isSkinnedMesh?new THREE.SkinnedMesh(u,d):new THREE.Mesh(u,d)).isSkinnedMesh||p.geometry.attributes.skinWeight.normalized||p.normalizeSkinWeights(),c.mode===M?p.drawMode=THREE.TriangleStripDrawMode:c.mode===S&&(p.drawMode=THREE.TriangleFanDrawMode);else if(c.mode===E)p=new THREE.LineSegments(u,d);else if(c.mode===g)p=new THREE.Line(u,d);else if(c.mode===T)p=new THREE.LineLoop(u,d);else{if(c.mode!==v)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+c.mode);p=new THREE.Points(u,d)}Object.keys(p.geometry.morphAttributes).length>0&&N(p,r),p.name=r.name||"mesh_"+e,n.length>1&&(p.name+="_"+o),C(p,r),t.assignFinalMaterial(p),i.push(p)}if(1===i.length)return i[0];var h=new THREE.Group;for(o=0,l=i.length;o<l;o++)h.add(i[o]);return h})})},D.prototype.loadCamera=function(e){var t,r=this.json.cameras[e],a=r[r.type];if(a)return"perspective"===r.type?t=new THREE.PerspectiveCamera(THREE.Math.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):"orthographic"===r.type&&(t=new THREE.OrthographicCamera(a.xmag/-2,a.xmag/2,a.ymag/2,a.ymag/-2,a.znear,a.zfar)),void 0!==r.name&&(t.name=r.name),C(t,r),Promise.resolve(t);console.warn("THREE.GLTFLoader: Missing camera parameters.")},D.prototype.loadSkin=function(e){var t=this.json.skins[e],r={joints:t.joints};return void 0===t.inverseBindMatrices?Promise.resolve(r):this.getDependency("accessor",t.inverseBindMatrices).then(function(e){return r.inverseBindMatrices=e,r})},D.prototype.loadAnimation=function(e){for(var t=this.json.animations[e],r=[],a=[],s=[],n=[],i=[],o=0,l=t.channels.length;o<l;o++){var p=t.channels[o],u=t.samplers[p.sampler],c=p.target,d=void 0!==c.node?c.node:c.id,h=void 0!==t.parameters?t.parameters[u.input]:u.input,f=void 0!==t.parameters?t.parameters[u.output]:u.output;r.push(this.getDependency("node",d)),a.push(this.getDependency("accessor",h)),s.push(this.getDependency("accessor",f)),n.push(u),i.push(c)}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(s),Promise.all(n),Promise.all(i)]).then(function(r){for(var a=r[0],s=r[1],n=r[2],i=r[3],o=r[4],l=[],p=0,u=a.length;p<u;p++){var c=a[p],d=s[p],h=n[p],f=i[p],v=o[p];if(void 0!==c){var E;switch(c.updateMatrix(),c.matrixAutoUpdate=!0,x[v.path]){case x.weights:E=THREE.NumberKeyframeTrack;break;case x.rotation:E=THREE.QuaternionKeyframeTrack;break;case x.position:case x.scale:default:E=THREE.VectorKeyframeTrack}var T=c.name?c.name:c.uuid,g=void 0!==f.interpolation?w[f.interpolation]:THREE.InterpolateLinear,R=[];x[v.path]===x.weights?c.traverse(function(e){!0===e.isMesh&&e.morphTargetInfluences&&R.push(e.name?e.name:e.uuid)}):R.push(T);var M=h.array;if(h.normalized){var S;if(M.constructor===Int8Array)S=1/127;else if(M.constructor===Uint8Array)S=1/255;else if(M.constructor==Int16Array)S=1/32767;else{if(M.constructor!==Uint16Array)throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");S=1/65535}for(var y=new Float32Array(M.length),L=0,H=M.length;L<H;L++)y[L]=M[L]*S;M=y}for(L=0,H=R.length;L<H;L++){var _=new E(R[L]+"."+x[v.path],d.array,M,g);"CUBICSPLINE"===f.interpolation&&(_.createInterpolant=function(e){return new m(this.times,this.values,this.getValueSize()/3,e)},_.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),l.push(_)}}}var A=void 0!==t.name?t.name:"animation_"+e;return new THREE.AnimationClip(A,void 0,l)})},D.prototype.loadNode=function(e){var t,a=this.json,s=this.extensions,n=this,i=a.meshReferences,o=a.meshUses,l=a.nodes[e];return(t=[],void 0!==l.mesh&&t.push(n.getDependency("mesh",l.mesh).then(function(e){var t;if(i[l.mesh]>1){var r=o[l.mesh]++;(t=e.clone()).name+="_instance_"+r,t.onBeforeRender=e.onBeforeRender;for(var a=0,s=t.children.length;a<s;a++)t.children[a].name+="_instance_"+r,t.children[a].onBeforeRender=e.children[a].onBeforeRender}else t=e;return void 0!==l.weights&&t.traverse(function(e){if(e.isMesh)for(var t=0,r=l.weights.length;t<r;t++)e.morphTargetInfluences[t]=l.weights[t]}),t})),void 0!==l.camera&&t.push(n.getDependency("camera",l.camera)),l.extensions&&l.extensions[r.KHR_LIGHTS_PUNCTUAL]&&void 0!==l.extensions[r.KHR_LIGHTS_PUNCTUAL].light&&t.push(n.getDependency("light",l.extensions[r.KHR_LIGHTS_PUNCTUAL].light)),Promise.all(t)).then(function(e){var t;if((t=!0===l.isBone?new THREE.Bone:e.length>1?new THREE.Group:1===e.length?e[0]:new THREE.Object3D)!==e[0])for(var r=0,a=e.length;r<a;r++)t.add(e[r]);if(void 0!==l.name&&(t.userData.name=l.name,t.name=THREE.PropertyBinding.sanitizeNodeName(l.name)),C(t,l),l.extensions&&O(s,t,l),void 0!==l.matrix){var n=new THREE.Matrix4;n.fromArray(l.matrix),t.applyMatrix(n)}else void 0!==l.translation&&t.position.fromArray(l.translation),void 0!==l.rotation&&t.quaternion.fromArray(l.rotation),void 0!==l.scale&&t.scale.fromArray(l.scale);return t})},D.prototype.loadScene=function(){function e(t,r,a,s){var n=a.nodes[t];return s.getDependency("node",t).then(function(e){return void 0===n.skin?e:s.getDependency("skin",n.skin).then(function(e){for(var r=[],a=0,n=(t=e).joints.length;a<n;a++)r.push(s.getDependency("node",t.joints[a]));return Promise.all(r)}).then(function(r){return e.traverse(function(e){if(e.isMesh){for(var a=[],s=[],n=0,i=r.length;n<i;n++){var o=r[n];if(o){a.push(o);var l=new THREE.Matrix4;void 0!==t.inverseBindMatrices&&l.fromArray(t.inverseBindMatrices.array,16*n),s.push(l)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[n])}e.bind(new THREE.Skeleton(a,s),e.matrixWorld)}}),e});var t}).then(function(t){r.add(t);var i=[];if(n.children)for(var o=n.children,l=0,p=o.length;l<p;l++){var u=o[l];i.push(e(u,t,a,s))}return Promise.all(i)})}return function(t){var r=this.json,a=this.extensions,s=this.json.scenes[t],n=new THREE.Scene;void 0!==s.name&&(n.name=s.name),C(n,s),s.extensions&&O(a,n,s);for(var i=s.nodes||[],o=[],l=0,p=i.length;l<p;l++)o.push(e(i[l],n,r,this));return Promise.all(o).then(function(){return n})}}(),e}();module.exports=_GLTFLoader;
//# sourceMappingURL=/sm/535dc36e1fecdab25c4c930fed985088fa5c573601be62d2c399e8794a3191f6.map
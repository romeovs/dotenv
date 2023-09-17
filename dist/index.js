var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = (id) => {
  return import.meta.require(id);
};

// node_modules/@actions/core/lib/utils.js
var require_utils = __commonJS((exports) => {
  var toCommandValue = function(input) {
    if (input === null || input === undefined) {
      return "";
    } else if (typeof input === "string" || input instanceof String) {
      return input;
    }
    return JSON.stringify(input);
  };
  var toCommandProperties = function(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
      return {};
    }
    return {
      title: annotationProperties.title,
      file: annotationProperties.file,
      line: annotationProperties.startLine,
      endLine: annotationProperties.endLine,
      col: annotationProperties.startColumn,
      endColumn: annotationProperties.endColumn
    };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toCommandProperties = exports.toCommandValue = undefined;
  exports.toCommandValue = toCommandValue;
  exports.toCommandProperties = toCommandProperties;
});

// node_modules/@actions/core/lib/command.js
var require_command = __commonJS((exports) => {
  var issueCommand = function(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
  };
  var issue = function(name, message = "") {
    issueCommand(name, {}, message);
  };
  var escapeData = function(s) {
    return utils_1.toCommandValue(s).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
  };
  var escapeProperty = function(s) {
    return utils_1.toCommandValue(s).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
  };
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.issue = exports.issueCommand = undefined;
  var os = __importStar(__require("os"));
  var utils_1 = require_utils();
  exports.issueCommand = issueCommand;
  exports.issue = issue;
  var CMD_STRING = "::";

  class Command {
    constructor(command, properties, message) {
      if (!command) {
        command = "missing.command";
      }
      this.command = command;
      this.properties = properties;
      this.message = message;
    }
    toString() {
      let cmdStr = CMD_STRING + this.command;
      if (this.properties && Object.keys(this.properties).length > 0) {
        cmdStr += " ";
        let first = true;
        for (const key in this.properties) {
          if (this.properties.hasOwnProperty(key)) {
            const val = this.properties[key];
            if (val) {
              if (first) {
                first = false;
              } else {
                cmdStr += ",";
              }
              cmdStr += `${key}=${escapeProperty(val)}`;
            }
          }
        }
      }
      cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
      return cmdStr;
    }
  }
});

// node_modules/uuid/dist/rng.js
var require_rng = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var rng = function() {
    if (poolPtr > rnds8Pool.length - 16) {
      _crypto.default.randomFillSync(rnds8Pool);
      poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = rng;
  var _crypto = _interopRequireDefault(__require("crypto"));
  var rnds8Pool = new Uint8Array(256);
  var poolPtr = rnds8Pool.length;
});

// node_modules/uuid/dist/regex.js
var require_regex = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  exports.default = _default;
});

// node_modules/uuid/dist/validate.js
var require_validate = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var validate = function(uuid) {
    return typeof uuid === "string" && _regex.default.test(uuid);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _regex = _interopRequireDefault(require_regex());
  var _default = validate;
  exports.default = _default;
});

// node_modules/uuid/dist/stringify.js
var require_stringify = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var stringify = function(arr, offset = 0) {
    const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    if (!(0, _validate.default)(uuid)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _validate = _interopRequireDefault(require_validate());
  var byteToHex = [];
  for (let i = 0;i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).substr(1));
  }
  var _default = stringify;
  exports.default = _default;
});

// node_modules/uuid/dist/v1.js
var require_v1 = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var v1 = function(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
    if (node == null || clockseq == null) {
      const seedBytes = options.random || (options.rng || _rng.default)();
      if (node == null) {
        node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
      }
      if (clockseq == null) {
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
      }
    }
    let msecs = options.msecs !== undefined ? options.msecs : Date.now();
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
    if (dt < 0 && options.clockseq === undefined) {
      clockseq = clockseq + 1 & 16383;
    }
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
      nsecs = 0;
    }
    if (nsecs >= 1e4) {
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    msecs += 12219292800000;
    const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
    b[i++] = tl >>> 24 & 255;
    b[i++] = tl >>> 16 & 255;
    b[i++] = tl >>> 8 & 255;
    b[i++] = tl & 255;
    const tmh = msecs / 4294967296 * 1e4 & 268435455;
    b[i++] = tmh >>> 8 & 255;
    b[i++] = tmh & 255;
    b[i++] = tmh >>> 24 & 15 | 16;
    b[i++] = tmh >>> 16 & 255;
    b[i++] = clockseq >>> 8 | 128;
    b[i++] = clockseq & 255;
    for (let n = 0;n < 6; ++n) {
      b[i + n] = node[n];
    }
    return buf || (0, _stringify.default)(b);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _rng = _interopRequireDefault(require_rng());
  var _stringify = _interopRequireDefault(require_stringify());
  var _nodeId;
  var _clockseq;
  var _lastMSecs = 0;
  var _lastNSecs = 0;
  var _default = v1;
  exports.default = _default;
});

// node_modules/uuid/dist/parse.js
var require_parse = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var parse = function(uuid) {
    if (!(0, _validate.default)(uuid)) {
      throw TypeError("Invalid UUID");
    }
    let v;
    const arr = new Uint8Array(16);
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 255;
    arr[2] = v >>> 8 & 255;
    arr[3] = v & 255;
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 255;
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 255;
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 255;
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
    arr[11] = v / 4294967296 & 255;
    arr[12] = v >>> 24 & 255;
    arr[13] = v >>> 16 & 255;
    arr[14] = v >>> 8 & 255;
    arr[15] = v & 255;
    return arr;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _validate = _interopRequireDefault(require_validate());
  var _default = parse;
  exports.default = _default;
});

// node_modules/uuid/dist/v35.js
var require_v35 = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var stringToBytes = function(str) {
    str = unescape(encodeURIComponent(str));
    const bytes = [];
    for (let i = 0;i < str.length; ++i) {
      bytes.push(str.charCodeAt(i));
    }
    return bytes;
  };
  var _default = function(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
      if (typeof value === "string") {
        value = stringToBytes(value);
      }
      if (typeof namespace === "string") {
        namespace = (0, _parse.default)(namespace);
      }
      if (namespace.length !== 16) {
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      }
      let bytes = new Uint8Array(16 + value.length);
      bytes.set(namespace);
      bytes.set(value, namespace.length);
      bytes = hashfunc(bytes);
      bytes[6] = bytes[6] & 15 | version;
      bytes[8] = bytes[8] & 63 | 128;
      if (buf) {
        offset = offset || 0;
        for (let i = 0;i < 16; ++i) {
          buf[offset + i] = bytes[i];
        }
        return buf;
      }
      return (0, _stringify.default)(bytes);
    }
    try {
      generateUUID.name = name;
    } catch (err) {
    }
    generateUUID.DNS = DNS;
    generateUUID.URL = URL2;
    return generateUUID;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _default;
  exports.URL = exports.DNS = undefined;
  var _stringify = _interopRequireDefault(require_stringify());
  var _parse = _interopRequireDefault(require_parse());
  var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  exports.DNS = DNS;
  var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  exports.URL = URL2;
});

// node_modules/uuid/dist/md5.js
var require_md5 = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var md5 = function(bytes) {
    if (Array.isArray(bytes)) {
      bytes = Buffer.from(bytes);
    } else if (typeof bytes === "string") {
      bytes = Buffer.from(bytes, "utf8");
    }
    return _crypto.default.createHash("md5").update(bytes).digest();
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _crypto = _interopRequireDefault(__require("crypto"));
  var _default = md5;
  exports.default = _default;
});

// node_modules/uuid/dist/v3.js
var require_v3 = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _v = _interopRequireDefault(require_v35());
  var _md = _interopRequireDefault(require_md5());
  var v3 = (0, _v.default)("v3", 48, _md.default);
  var _default = v3;
  exports.default = _default;
});

// node_modules/uuid/dist/v4.js
var require_v4 = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var v4 = function(options, buf, offset) {
    options = options || {};
    const rnds = options.random || (options.rng || _rng.default)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0;i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return (0, _stringify.default)(rnds);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _rng = _interopRequireDefault(require_rng());
  var _stringify = _interopRequireDefault(require_stringify());
  var _default = v4;
  exports.default = _default;
});

// node_modules/uuid/dist/sha1.js
var require_sha1 = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var sha1 = function(bytes) {
    if (Array.isArray(bytes)) {
      bytes = Buffer.from(bytes);
    } else if (typeof bytes === "string") {
      bytes = Buffer.from(bytes, "utf8");
    }
    return _crypto.default.createHash("sha1").update(bytes).digest();
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _crypto = _interopRequireDefault(__require("crypto"));
  var _default = sha1;
  exports.default = _default;
});

// node_modules/uuid/dist/v5.js
var require_v5 = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _v = _interopRequireDefault(require_v35());
  var _sha = _interopRequireDefault(require_sha1());
  var v5 = (0, _v.default)("v5", 80, _sha.default);
  var _default = v5;
  exports.default = _default;
});

// node_modules/uuid/dist/nil.js
var require_nil = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _default = "00000000-0000-0000-0000-000000000000";
  exports.default = _default;
});

// node_modules/uuid/dist/version.js
var require_version = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var version = function(uuid) {
    if (!(0, _validate.default)(uuid)) {
      throw TypeError("Invalid UUID");
    }
    return parseInt(uuid.substr(14, 1), 16);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _validate = _interopRequireDefault(require_validate());
  var _default = version;
  exports.default = _default;
});

// node_modules/uuid/dist/index.js
var require_dist = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "v1", {
    enumerable: true,
    get: function() {
      return _v.default;
    }
  });
  Object.defineProperty(exports, "v3", {
    enumerable: true,
    get: function() {
      return _v2.default;
    }
  });
  Object.defineProperty(exports, "v4", {
    enumerable: true,
    get: function() {
      return _v3.default;
    }
  });
  Object.defineProperty(exports, "v5", {
    enumerable: true,
    get: function() {
      return _v4.default;
    }
  });
  Object.defineProperty(exports, "NIL", {
    enumerable: true,
    get: function() {
      return _nil.default;
    }
  });
  Object.defineProperty(exports, "version", {
    enumerable: true,
    get: function() {
      return _version.default;
    }
  });
  Object.defineProperty(exports, "validate", {
    enumerable: true,
    get: function() {
      return _validate.default;
    }
  });
  Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function() {
      return _stringify.default;
    }
  });
  Object.defineProperty(exports, "parse", {
    enumerable: true,
    get: function() {
      return _parse.default;
    }
  });
  var _v = _interopRequireDefault(require_v1());
  var _v2 = _interopRequireDefault(require_v3());
  var _v3 = _interopRequireDefault(require_v4());
  var _v4 = _interopRequireDefault(require_v5());
  var _nil = _interopRequireDefault(require_nil());
  var _version = _interopRequireDefault(require_version());
  var _validate = _interopRequireDefault(require_validate());
  var _stringify = _interopRequireDefault(require_stringify());
  var _parse = _interopRequireDefault(require_parse());
});

// node_modules/@actions/core/lib/file-command.js
var require_file_command = __commonJS((exports) => {
  var issueFileCommand = function(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
      throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
      throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
      encoding: "utf8"
    });
  };
  var prepareKeyValueMessage = function(key, value) {
    const delimiter = `ghadelimiter_${uuid_1.v4()}`;
    const convertedValue = utils_1.toCommandValue(value);
    if (key.includes(delimiter)) {
      throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
    }
    if (convertedValue.includes(delimiter)) {
      throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
    }
    return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`;
  };
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.prepareKeyValueMessage = exports.issueFileCommand = undefined;
  var fs = __importStar(__require("fs"));
  var os = __importStar(__require("os"));
  var uuid_1 = require_dist();
  var utils_1 = require_utils();
  exports.issueFileCommand = issueFileCommand;
  exports.prepareKeyValueMessage = prepareKeyValueMessage;
});

// node_modules/@actions/http-client/lib/proxy.js
var require_proxy = __commonJS((exports) => {
  var getProxyUrl = function(reqUrl) {
    const usingSsl = reqUrl.protocol === "https:";
    if (checkBypass(reqUrl)) {
      return;
    }
    const proxyVar = (() => {
      if (usingSsl) {
        return process.env["https_proxy"] || process.env["HTTPS_PROXY"];
      } else {
        return process.env["http_proxy"] || process.env["HTTP_PROXY"];
      }
    })();
    if (proxyVar) {
      try {
        return new URL(proxyVar);
      } catch (_a) {
        if (!proxyVar.startsWith("http://") && !proxyVar.startsWith("https://"))
          return new URL(`http://${proxyVar}`);
      }
    } else {
      return;
    }
  };
  var checkBypass = function(reqUrl) {
    if (!reqUrl.hostname) {
      return false;
    }
    const reqHost = reqUrl.hostname;
    if (isLoopbackAddress(reqHost)) {
      return true;
    }
    const noProxy = process.env["no_proxy"] || process.env["NO_PROXY"] || "";
    if (!noProxy) {
      return false;
    }
    let reqPort;
    if (reqUrl.port) {
      reqPort = Number(reqUrl.port);
    } else if (reqUrl.protocol === "http:") {
      reqPort = 80;
    } else if (reqUrl.protocol === "https:") {
      reqPort = 443;
    }
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === "number") {
      upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    for (const upperNoProxyItem of noProxy.split(",").map((x) => x.trim().toUpperCase()).filter((x) => x)) {
      if (upperNoProxyItem === "*" || upperReqHosts.some((x) => x === upperNoProxyItem || x.endsWith(`.${upperNoProxyItem}`) || upperNoProxyItem.startsWith(".") && x.endsWith(`${upperNoProxyItem}`))) {
        return true;
      }
    }
    return false;
  };
  var isLoopbackAddress = function(host) {
    const hostLower = host.toLowerCase();
    return hostLower === "localhost" || hostLower.startsWith("127.") || hostLower.startsWith("[::1]") || hostLower.startsWith("[0:0:0:0:0:0:0:1]");
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.checkBypass = exports.getProxyUrl = undefined;
  exports.getProxyUrl = getProxyUrl;
  exports.checkBypass = checkBypass;
});

// node_modules/tunnel/lib/tunnel.js
var require_tunnel = __commonJS((exports) => {
  var httpOverHttp = function(options) {
    var agent = new TunnelingAgent(options);
    agent.request = http.request;
    return agent;
  };
  var httpsOverHttp = function(options) {
    var agent = new TunnelingAgent(options);
    agent.request = http.request;
    agent.createSocket = createSecureSocket;
    agent.defaultPort = 443;
    return agent;
  };
  var httpOverHttps = function(options) {
    var agent = new TunnelingAgent(options);
    agent.request = https.request;
    return agent;
  };
  var httpsOverHttps = function(options) {
    var agent = new TunnelingAgent(options);
    agent.request = https.request;
    agent.createSocket = createSecureSocket;
    agent.defaultPort = 443;
    return agent;
  };
  var TunnelingAgent = function(options) {
    var self = this;
    self.options = options || {};
    self.proxyOptions = self.options.proxy || {};
    self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
    self.requests = [];
    self.sockets = [];
    self.on("free", function onFree(socket, host, port, localAddress) {
      var options2 = toOptions(host, port, localAddress);
      for (var i = 0, len = self.requests.length;i < len; ++i) {
        var pending = self.requests[i];
        if (pending.host === options2.host && pending.port === options2.port) {
          self.requests.splice(i, 1);
          pending.request.onSocket(socket);
          return;
        }
      }
      socket.destroy();
      self.removeSocket(socket);
    });
  };
  var createSecureSocket = function(options, cb) {
    var self = this;
    TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
      var hostHeader = options.request.getHeader("host");
      var tlsOptions = mergeOptions({}, self.options, {
        socket,
        servername: hostHeader ? hostHeader.replace(/:.*$/, "") : options.host
      });
      var secureSocket = tls.connect(0, tlsOptions);
      self.sockets[self.sockets.indexOf(socket)] = secureSocket;
      cb(secureSocket);
    });
  };
  var toOptions = function(host, port, localAddress) {
    if (typeof host === "string") {
      return {
        host,
        port,
        localAddress
      };
    }
    return host;
  };
  var mergeOptions = function(target) {
    for (var i = 1, len = arguments.length;i < len; ++i) {
      var overrides = arguments[i];
      if (typeof overrides === "object") {
        var keys = Object.keys(overrides);
        for (var j = 0, keyLen = keys.length;j < keyLen; ++j) {
          var k = keys[j];
          if (overrides[k] !== undefined) {
            target[k] = overrides[k];
          }
        }
      }
    }
    return target;
  };
  var net = __require("net");
  var tls = __require("tls");
  var http = __require("http");
  var https = __require("https");
  var events = __require("events");
  var assert = __require("assert");
  var util = __require("util");
  exports.httpOverHttp = httpOverHttp;
  exports.httpsOverHttp = httpsOverHttp;
  exports.httpOverHttps = httpOverHttps;
  exports.httpsOverHttps = httpsOverHttps;
  util.inherits(TunnelingAgent, events.EventEmitter);
  TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
    var self = this;
    var options = mergeOptions({ request: req }, self.options, toOptions(host, port, localAddress));
    if (self.sockets.length >= this.maxSockets) {
      self.requests.push(options);
      return;
    }
    self.createSocket(options, function(socket) {
      socket.on("free", onFree);
      socket.on("close", onCloseOrRemove);
      socket.on("agentRemove", onCloseOrRemove);
      req.onSocket(socket);
      function onFree() {
        self.emit("free", socket, options);
      }
      function onCloseOrRemove(err) {
        self.removeSocket(socket);
        socket.removeListener("free", onFree);
        socket.removeListener("close", onCloseOrRemove);
        socket.removeListener("agentRemove", onCloseOrRemove);
      }
    });
  };
  TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
    var self = this;
    var placeholder = {};
    self.sockets.push(placeholder);
    var connectOptions = mergeOptions({}, self.proxyOptions, {
      method: "CONNECT",
      path: options.host + ":" + options.port,
      agent: false,
      headers: {
        host: options.host + ":" + options.port
      }
    });
    if (options.localAddress) {
      connectOptions.localAddress = options.localAddress;
    }
    if (connectOptions.proxyAuth) {
      connectOptions.headers = connectOptions.headers || {};
      connectOptions.headers["Proxy-Authorization"] = "Basic " + new Buffer(connectOptions.proxyAuth).toString("base64");
    }
    debug("making CONNECT request");
    var connectReq = self.request(connectOptions);
    connectReq.useChunkedEncodingByDefault = false;
    connectReq.once("response", onResponse);
    connectReq.once("upgrade", onUpgrade);
    connectReq.once("connect", onConnect);
    connectReq.once("error", onError);
    connectReq.end();
    function onResponse(res) {
      res.upgrade = true;
    }
    function onUpgrade(res, socket, head) {
      process.nextTick(function() {
        onConnect(res, socket, head);
      });
    }
    function onConnect(res, socket, head) {
      connectReq.removeAllListeners();
      socket.removeAllListeners();
      if (res.statusCode !== 200) {
        debug("tunneling socket could not be established, statusCode=%d", res.statusCode);
        socket.destroy();
        var error = new Error("tunneling socket could not be established, statusCode=" + res.statusCode);
        error.code = "ECONNRESET";
        options.request.emit("error", error);
        self.removeSocket(placeholder);
        return;
      }
      if (head.length > 0) {
        debug("got illegal response body from proxy");
        socket.destroy();
        var error = new Error("got illegal response body from proxy");
        error.code = "ECONNRESET";
        options.request.emit("error", error);
        self.removeSocket(placeholder);
        return;
      }
      debug("tunneling connection has established");
      self.sockets[self.sockets.indexOf(placeholder)] = socket;
      return cb(socket);
    }
    function onError(cause) {
      connectReq.removeAllListeners();
      debug("tunneling socket could not be established, cause=%s\n", cause.message, cause.stack);
      var error = new Error("tunneling socket could not be established, cause=" + cause.message);
      error.code = "ECONNRESET";
      options.request.emit("error", error);
      self.removeSocket(placeholder);
    }
  };
  TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
    var pos = this.sockets.indexOf(socket);
    if (pos === -1) {
      return;
    }
    this.sockets.splice(pos, 1);
    var pending = this.requests.shift();
    if (pending) {
      this.createSocket(pending, function(socket2) {
        pending.request.onSocket(socket2);
      });
    }
  };
  var debug;
  if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
    debug = function() {
      var args = Array.prototype.slice.call(arguments);
      if (typeof args[0] === "string") {
        args[0] = "TUNNEL: " + args[0];
      } else {
        args.unshift("TUNNEL:");
      }
      console.error.apply(console, args);
    };
  } else {
    debug = function() {
    };
  }
  exports.debug = debug;
});

// node_modules/@actions/http-client/lib/index.js
var require_lib = __commonJS((exports) => {
  var getProxyUrl = function(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : "";
  };
  var isHttps = function(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === "https:";
  };
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = undefined;
  var http = __importStar(__require("http"));
  var https = __importStar(__require("https"));
  var pm = __importStar(require_proxy());
  var tunnel = __importStar(require_tunnel());
  var HttpCodes;
  (function(HttpCodes2) {
    HttpCodes2[HttpCodes2["OK"] = 200] = "OK";
    HttpCodes2[HttpCodes2["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes2[HttpCodes2["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes2[HttpCodes2["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes2[HttpCodes2["SeeOther"] = 303] = "SeeOther";
    HttpCodes2[HttpCodes2["NotModified"] = 304] = "NotModified";
    HttpCodes2[HttpCodes2["UseProxy"] = 305] = "UseProxy";
    HttpCodes2[HttpCodes2["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes2[HttpCodes2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes2[HttpCodes2["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes2[HttpCodes2["BadRequest"] = 400] = "BadRequest";
    HttpCodes2[HttpCodes2["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes2[HttpCodes2["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes2[HttpCodes2["Forbidden"] = 403] = "Forbidden";
    HttpCodes2[HttpCodes2["NotFound"] = 404] = "NotFound";
    HttpCodes2[HttpCodes2["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes2[HttpCodes2["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes2[HttpCodes2["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes2[HttpCodes2["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes2[HttpCodes2["Conflict"] = 409] = "Conflict";
    HttpCodes2[HttpCodes2["Gone"] = 410] = "Gone";
    HttpCodes2[HttpCodes2["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes2[HttpCodes2["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes2[HttpCodes2["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes2[HttpCodes2["BadGateway"] = 502] = "BadGateway";
    HttpCodes2[HttpCodes2["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes2[HttpCodes2["GatewayTimeout"] = 504] = "GatewayTimeout";
  })(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
  var Headers;
  (function(Headers2) {
    Headers2["Accept"] = "accept";
    Headers2["ContentType"] = "content-type";
  })(Headers = exports.Headers || (exports.Headers = {}));
  var MediaTypes;
  (function(MediaTypes2) {
    MediaTypes2["ApplicationJson"] = "application/json";
  })(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
  exports.getProxyUrl = getProxyUrl;
  var HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
  ];
  var HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
  ];
  var RetryableHttpVerbs = ["OPTIONS", "GET", "DELETE", "HEAD"];
  var ExponentialBackoffCeiling = 10;
  var ExponentialBackoffTimeSlice = 5;

  class HttpClientError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.name = "HttpClientError";
      this.statusCode = statusCode;
      Object.setPrototypeOf(this, HttpClientError.prototype);
    }
  }
  exports.HttpClientError = HttpClientError;

  class HttpClientResponse {
    constructor(message) {
      this.message = message;
    }
    readBody() {
      return __awaiter(this, undefined, undefined, function* () {
        return new Promise((resolve) => __awaiter(this, undefined, undefined, function* () {
          let output = Buffer.alloc(0);
          this.message.on("data", (chunk) => {
            output = Buffer.concat([output, chunk]);
          });
          this.message.on("end", () => {
            resolve(output.toString());
          });
        }));
      });
    }
    readBodyBuffer() {
      return __awaiter(this, undefined, undefined, function* () {
        return new Promise((resolve) => __awaiter(this, undefined, undefined, function* () {
          const chunks = [];
          this.message.on("data", (chunk) => {
            chunks.push(chunk);
          });
          this.message.on("end", () => {
            resolve(Buffer.concat(chunks));
          });
        }));
      });
    }
  }
  exports.HttpClientResponse = HttpClientResponse;
  exports.isHttps = isHttps;

  class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
      this._ignoreSslError = false;
      this._allowRedirects = true;
      this._allowRedirectDowngrade = false;
      this._maxRedirects = 50;
      this._allowRetries = false;
      this._maxRetries = 1;
      this._keepAlive = false;
      this._disposed = false;
      this.userAgent = userAgent;
      this.handlers = handlers || [];
      this.requestOptions = requestOptions;
      if (requestOptions) {
        if (requestOptions.ignoreSslError != null) {
          this._ignoreSslError = requestOptions.ignoreSslError;
        }
        this._socketTimeout = requestOptions.socketTimeout;
        if (requestOptions.allowRedirects != null) {
          this._allowRedirects = requestOptions.allowRedirects;
        }
        if (requestOptions.allowRedirectDowngrade != null) {
          this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
        }
        if (requestOptions.maxRedirects != null) {
          this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
        }
        if (requestOptions.keepAlive != null) {
          this._keepAlive = requestOptions.keepAlive;
        }
        if (requestOptions.allowRetries != null) {
          this._allowRetries = requestOptions.allowRetries;
        }
        if (requestOptions.maxRetries != null) {
          this._maxRetries = requestOptions.maxRetries;
        }
      }
    }
    options(requestUrl, additionalHeaders) {
      return __awaiter(this, undefined, undefined, function* () {
        return this.request("OPTIONS", requestUrl, null, additionalHeaders || {});
      });
    }
    get(requestUrl, additionalHeaders) {
      return __awaiter(this, undefined, undefined, function* () {
        return this.request("GET", requestUrl, null, additionalHeaders || {});
      });
    }
    del(requestUrl, additionalHeaders) {
      return __awaiter(this, undefined, undefined, function* () {
        return this.request("DELETE", requestUrl, null, additionalHeaders || {});
      });
    }
    post(requestUrl, data, additionalHeaders) {
      return __awaiter(this, undefined, undefined, function* () {
        return this.request("POST", requestUrl, data, additionalHeaders || {});
      });
    }
    patch(requestUrl, data, additionalHeaders) {
      return __awaiter(this, undefined, undefined, function* () {
        return this.request("PATCH", requestUrl, data, additionalHeaders || {});
      });
    }
    put(requestUrl, data, additionalHeaders) {
      return __awaiter(this, undefined, undefined, function* () {
        return this.request("PUT", requestUrl, data, additionalHeaders || {});
      });
    }
    head(requestUrl, additionalHeaders) {
      return __awaiter(this, undefined, undefined, function* () {
        return this.request("HEAD", requestUrl, null, additionalHeaders || {});
      });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
      return __awaiter(this, undefined, undefined, function* () {
        return this.request(verb, requestUrl, stream, additionalHeaders);
      });
    }
    getJson(requestUrl, additionalHeaders = {}) {
      return __awaiter(this, undefined, undefined, function* () {
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        const res = yield this.get(requestUrl, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
      });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
      return __awaiter(this, undefined, undefined, function* () {
        const data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        const res = yield this.post(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
      });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
      return __awaiter(this, undefined, undefined, function* () {
        const data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        const res = yield this.put(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
      });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
      return __awaiter(this, undefined, undefined, function* () {
        const data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        const res = yield this.patch(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
      });
    }
    request(verb, requestUrl, data, headers) {
      return __awaiter(this, undefined, undefined, function* () {
        if (this._disposed) {
          throw new Error("Client has already been disposed.");
        }
        const parsedUrl = new URL(requestUrl);
        let info = this._prepareRequest(verb, parsedUrl, headers);
        const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb) ? this._maxRetries + 1 : 1;
        let numTries = 0;
        let response;
        do {
          response = yield this.requestRaw(info, data);
          if (response && response.message && response.message.statusCode === HttpCodes.Unauthorized) {
            let authenticationHandler;
            for (const handler of this.handlers) {
              if (handler.canHandleAuthentication(response)) {
                authenticationHandler = handler;
                break;
              }
            }
            if (authenticationHandler) {
              return authenticationHandler.handleAuthentication(this, info, data);
            } else {
              return response;
            }
          }
          let redirectsRemaining = this._maxRedirects;
          while (response.message.statusCode && HttpRedirectCodes.includes(response.message.statusCode) && this._allowRedirects && redirectsRemaining > 0) {
            const redirectUrl = response.message.headers["location"];
            if (!redirectUrl) {
              break;
            }
            const parsedRedirectUrl = new URL(redirectUrl);
            if (parsedUrl.protocol === "https:" && parsedUrl.protocol !== parsedRedirectUrl.protocol && !this._allowRedirectDowngrade) {
              throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
            }
            yield response.readBody();
            if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
              for (const header in headers) {
                if (header.toLowerCase() === "authorization") {
                  delete headers[header];
                }
              }
            }
            info = this._prepareRequest(verb, parsedRedirectUrl, headers);
            response = yield this.requestRaw(info, data);
            redirectsRemaining--;
          }
          if (!response.message.statusCode || !HttpResponseRetryCodes.includes(response.message.statusCode)) {
            return response;
          }
          numTries += 1;
          if (numTries < maxTries) {
            yield response.readBody();
            yield this._performExponentialBackoff(numTries);
          }
        } while (numTries < maxTries);
        return response;
      });
    }
    dispose() {
      if (this._agent) {
        this._agent.destroy();
      }
      this._disposed = true;
    }
    requestRaw(info, data) {
      return __awaiter(this, undefined, undefined, function* () {
        return new Promise((resolve, reject) => {
          function callbackForResult(err, res) {
            if (err) {
              reject(err);
            } else if (!res) {
              reject(new Error("Unknown error"));
            } else {
              resolve(res);
            }
          }
          this.requestRawWithCallback(info, data, callbackForResult);
        });
      });
    }
    requestRawWithCallback(info, data, onResult) {
      if (typeof data === "string") {
        if (!info.options.headers) {
          info.options.headers = {};
        }
        info.options.headers["Content-Length"] = Buffer.byteLength(data, "utf8");
      }
      let callbackCalled = false;
      function handleResult(err, res) {
        if (!callbackCalled) {
          callbackCalled = true;
          onResult(err, res);
        }
      }
      const req = info.httpModule.request(info.options, (msg) => {
        const res = new HttpClientResponse(msg);
        handleResult(undefined, res);
      });
      let socket;
      req.on("socket", (sock) => {
        socket = sock;
      });
      req.setTimeout(this._socketTimeout || 3 * 60000, () => {
        if (socket) {
          socket.end();
        }
        handleResult(new Error(`Request timeout: ${info.options.path}`));
      });
      req.on("error", function(err) {
        handleResult(err);
      });
      if (data && typeof data === "string") {
        req.write(data, "utf8");
      }
      if (data && typeof data !== "string") {
        data.on("close", function() {
          req.end();
        });
        data.pipe(req);
      } else {
        req.end();
      }
    }
    getAgent(serverUrl) {
      const parsedUrl = new URL(serverUrl);
      return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
      const info = {};
      info.parsedUrl = requestUrl;
      const usingSsl = info.parsedUrl.protocol === "https:";
      info.httpModule = usingSsl ? https : http;
      const defaultPort = usingSsl ? 443 : 80;
      info.options = {};
      info.options.host = info.parsedUrl.hostname;
      info.options.port = info.parsedUrl.port ? parseInt(info.parsedUrl.port) : defaultPort;
      info.options.path = (info.parsedUrl.pathname || "") + (info.parsedUrl.search || "");
      info.options.method = method;
      info.options.headers = this._mergeHeaders(headers);
      if (this.userAgent != null) {
        info.options.headers["user-agent"] = this.userAgent;
      }
      info.options.agent = this._getAgent(info.parsedUrl);
      if (this.handlers) {
        for (const handler of this.handlers) {
          handler.prepareRequest(info.options);
        }
      }
      return info;
    }
    _mergeHeaders(headers) {
      if (this.requestOptions && this.requestOptions.headers) {
        return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
      }
      return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
      let clientHeader;
      if (this.requestOptions && this.requestOptions.headers) {
        clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
      }
      return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
      let agent;
      const proxyUrl = pm.getProxyUrl(parsedUrl);
      const useProxy = proxyUrl && proxyUrl.hostname;
      if (this._keepAlive && useProxy) {
        agent = this._proxyAgent;
      }
      if (this._keepAlive && !useProxy) {
        agent = this._agent;
      }
      if (agent) {
        return agent;
      }
      const usingSsl = parsedUrl.protocol === "https:";
      let maxSockets = 100;
      if (this.requestOptions) {
        maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
      }
      if (proxyUrl && proxyUrl.hostname) {
        const agentOptions = {
          maxSockets,
          keepAlive: this._keepAlive,
          proxy: Object.assign(Object.assign({}, (proxyUrl.username || proxyUrl.password) && {
            proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
          }), { host: proxyUrl.hostname, port: proxyUrl.port })
        };
        let tunnelAgent;
        const overHttps = proxyUrl.protocol === "https:";
        if (usingSsl) {
          tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
        } else {
          tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
        }
        agent = tunnelAgent(agentOptions);
        this._proxyAgent = agent;
      }
      if (this._keepAlive && !agent) {
        const options = { keepAlive: this._keepAlive, maxSockets };
        agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
        this._agent = agent;
      }
      if (!agent) {
        agent = usingSsl ? https.globalAgent : http.globalAgent;
      }
      if (usingSsl && this._ignoreSslError) {
        agent.options = Object.assign(agent.options || {}, {
          rejectUnauthorized: false
        });
      }
      return agent;
    }
    _performExponentialBackoff(retryNumber) {
      return __awaiter(this, undefined, undefined, function* () {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise((resolve) => setTimeout(() => resolve(), ms));
      });
    }
    _processResponse(res, options) {
      return __awaiter(this, undefined, undefined, function* () {
        return new Promise((resolve, reject) => __awaiter(this, undefined, undefined, function* () {
          const statusCode = res.message.statusCode || 0;
          const response = {
            statusCode,
            result: null,
            headers: {}
          };
          if (statusCode === HttpCodes.NotFound) {
            resolve(response);
          }
          function dateTimeDeserializer(key, value) {
            if (typeof value === "string") {
              const a = new Date(value);
              if (!isNaN(a.valueOf())) {
                return a;
              }
            }
            return value;
          }
          let obj;
          let contents;
          try {
            contents = yield res.readBody();
            if (contents && contents.length > 0) {
              if (options && options.deserializeDates) {
                obj = JSON.parse(contents, dateTimeDeserializer);
              } else {
                obj = JSON.parse(contents);
              }
              response.result = obj;
            }
            response.headers = res.message.headers;
          } catch (err) {
          }
          if (statusCode > 299) {
            let msg;
            if (obj && obj.message) {
              msg = obj.message;
            } else if (contents && contents.length > 0) {
              msg = contents;
            } else {
              msg = `Failed request: (${statusCode})`;
            }
            const err = new HttpClientError(msg, statusCode);
            err.result = response.result;
            reject(err);
          } else {
            resolve(response);
          }
        }));
      });
    }
  }
  exports.HttpClient = HttpClient;
  var lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => (c[k.toLowerCase()] = obj[k], c), {});
});

// node_modules/@actions/http-client/lib/auth.js
var require_auth = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = undefined;

  class BasicCredentialHandler {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
    prepareRequest(options) {
      if (!options.headers) {
        throw Error("The request has no headers");
      }
      options.headers["Authorization"] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`;
    }
    canHandleAuthentication() {
      return false;
    }
    handleAuthentication() {
      return __awaiter(this, undefined, undefined, function* () {
        throw new Error("not implemented");
      });
    }
  }
  exports.BasicCredentialHandler = BasicCredentialHandler;

  class BearerCredentialHandler {
    constructor(token) {
      this.token = token;
    }
    prepareRequest(options) {
      if (!options.headers) {
        throw Error("The request has no headers");
      }
      options.headers["Authorization"] = `Bearer ${this.token}`;
    }
    canHandleAuthentication() {
      return false;
    }
    handleAuthentication() {
      return __awaiter(this, undefined, undefined, function* () {
        throw new Error("not implemented");
      });
    }
  }
  exports.BearerCredentialHandler = BearerCredentialHandler;

  class PersonalAccessTokenCredentialHandler {
    constructor(token) {
      this.token = token;
    }
    prepareRequest(options) {
      if (!options.headers) {
        throw Error("The request has no headers");
      }
      options.headers["Authorization"] = `Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`;
    }
    canHandleAuthentication() {
      return false;
    }
    handleAuthentication() {
      return __awaiter(this, undefined, undefined, function* () {
        throw new Error("not implemented");
      });
    }
  }
  exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
});

// node_modules/@actions/core/lib/oidc-utils.js
var require_oidc_utils = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OidcClient = undefined;
  var http_client_1 = require_lib();
  var auth_1 = require_auth();
  var core_1 = require_core();

  class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
      const requestOptions = {
        allowRetries: allowRetry,
        maxRetries: maxRetry
      };
      return new http_client_1.HttpClient("actions/oidc-client", [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
      const token = process.env["ACTIONS_ID_TOKEN_REQUEST_TOKEN"];
      if (!token) {
        throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");
      }
      return token;
    }
    static getIDTokenUrl() {
      const runtimeUrl = process.env["ACTIONS_ID_TOKEN_REQUEST_URL"];
      if (!runtimeUrl) {
        throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");
      }
      return runtimeUrl;
    }
    static getCall(id_token_url) {
      var _a;
      return __awaiter(this, undefined, undefined, function* () {
        const httpclient = OidcClient.createHttpClient();
        const res = yield httpclient.getJson(id_token_url).catch((error) => {
          throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.message}`);
        });
        const id_token = (_a = res.result) === null || _a === undefined ? undefined : _a.value;
        if (!id_token) {
          throw new Error("Response json body do not have ID Token field");
        }
        return id_token;
      });
    }
    static getIDToken(audience) {
      return __awaiter(this, undefined, undefined, function* () {
        try {
          let id_token_url = OidcClient.getIDTokenUrl();
          if (audience) {
            const encodedAudience = encodeURIComponent(audience);
            id_token_url = `${id_token_url}&audience=${encodedAudience}`;
          }
          core_1.debug(`ID token url is ${id_token_url}`);
          const id_token = yield OidcClient.getCall(id_token_url);
          core_1.setSecret(id_token);
          return id_token;
        } catch (error) {
          throw new Error(`Error message: ${error.message}`);
        }
      });
    }
  }
  exports.OidcClient = OidcClient;
});

// node_modules/@actions/core/lib/summary.js
var require_summary = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = undefined;
  var os_1 = __require("os");
  var fs_1 = __require("fs");
  var { access, appendFile, writeFile } = fs_1.promises;
  exports.SUMMARY_ENV_VAR = "GITHUB_STEP_SUMMARY";
  exports.SUMMARY_DOCS_URL = "https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";

  class Summary {
    constructor() {
      this._buffer = "";
    }
    filePath() {
      return __awaiter(this, undefined, undefined, function* () {
        if (this._filePath) {
          return this._filePath;
        }
        const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
        if (!pathFromEnv) {
          throw new Error(`Unable to find environment variable for \$${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
        }
        try {
          yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
        } catch (_a) {
          throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
        }
        this._filePath = pathFromEnv;
        return this._filePath;
      });
    }
    wrap(tag, content, attrs = {}) {
      const htmlAttrs = Object.entries(attrs).map(([key, value]) => ` ${key}="${value}"`).join("");
      if (!content) {
        return `<${tag}${htmlAttrs}>`;
      }
      return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    write(options) {
      return __awaiter(this, undefined, undefined, function* () {
        const overwrite = !!(options === null || options === undefined ? undefined : options.overwrite);
        const filePath = yield this.filePath();
        const writeFunc = overwrite ? writeFile : appendFile;
        yield writeFunc(filePath, this._buffer, { encoding: "utf8" });
        return this.emptyBuffer();
      });
    }
    clear() {
      return __awaiter(this, undefined, undefined, function* () {
        return this.emptyBuffer().write({ overwrite: true });
      });
    }
    stringify() {
      return this._buffer;
    }
    isEmptyBuffer() {
      return this._buffer.length === 0;
    }
    emptyBuffer() {
      this._buffer = "";
      return this;
    }
    addRaw(text, addEOL = false) {
      this._buffer += text;
      return addEOL ? this.addEOL() : this;
    }
    addEOL() {
      return this.addRaw(os_1.EOL);
    }
    addCodeBlock(code, lang) {
      const attrs = Object.assign({}, lang && { lang });
      const element = this.wrap("pre", this.wrap("code", code), attrs);
      return this.addRaw(element).addEOL();
    }
    addList(items, ordered = false) {
      const tag = ordered ? "ol" : "ul";
      const listItems = items.map((item) => this.wrap("li", item)).join("");
      const element = this.wrap(tag, listItems);
      return this.addRaw(element).addEOL();
    }
    addTable(rows) {
      const tableBody = rows.map((row) => {
        const cells = row.map((cell) => {
          if (typeof cell === "string") {
            return this.wrap("td", cell);
          }
          const { header, data, colspan, rowspan } = cell;
          const tag = header ? "th" : "td";
          const attrs = Object.assign(Object.assign({}, colspan && { colspan }), rowspan && { rowspan });
          return this.wrap(tag, data, attrs);
        }).join("");
        return this.wrap("tr", cells);
      }).join("");
      const element = this.wrap("table", tableBody);
      return this.addRaw(element).addEOL();
    }
    addDetails(label, content) {
      const element = this.wrap("details", this.wrap("summary", label) + content);
      return this.addRaw(element).addEOL();
    }
    addImage(src, alt, options) {
      const { width, height } = options || {};
      const attrs = Object.assign(Object.assign({}, width && { width }), height && { height });
      const element = this.wrap("img", null, Object.assign({ src, alt }, attrs));
      return this.addRaw(element).addEOL();
    }
    addHeading(text, level) {
      const tag = `h${level}`;
      const allowedTag = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag) ? tag : "h1";
      const element = this.wrap(allowedTag, text);
      return this.addRaw(element).addEOL();
    }
    addSeparator() {
      const element = this.wrap("hr", null);
      return this.addRaw(element).addEOL();
    }
    addBreak() {
      const element = this.wrap("br", null);
      return this.addRaw(element).addEOL();
    }
    addQuote(text, cite) {
      const attrs = Object.assign({}, cite && { cite });
      const element = this.wrap("blockquote", text, attrs);
      return this.addRaw(element).addEOL();
    }
    addLink(text, href) {
      const element = this.wrap("a", text, { href });
      return this.addRaw(element).addEOL();
    }
  }
  var _summary = new Summary;
  exports.markdownSummary = _summary;
  exports.summary = _summary;
});

// node_modules/@actions/core/lib/path-utils.js
var require_path_utils = __commonJS((exports) => {
  var toPosixPath = function(pth) {
    return pth.replace(/[\\]/g, "/");
  };
  var toWin32Path = function(pth) {
    return pth.replace(/[/]/g, "\\");
  };
  var toPlatformPath = function(pth) {
    return pth.replace(/[/\\]/g, path.sep);
  };
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = undefined;
  var path = __importStar(__require("path"));
  exports.toPosixPath = toPosixPath;
  exports.toWin32Path = toWin32Path;
  exports.toPlatformPath = toPlatformPath;
});

// node_modules/@actions/core/lib/core.js
var require_core = __commonJS((exports) => {
  var exportVariable = function(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env["GITHUB_ENV"] || "";
    if (filePath) {
      return file_command_1.issueFileCommand("ENV", file_command_1.prepareKeyValueMessage(name, val));
    }
    command_1.issueCommand("set-env", { name }, convertedVal);
  };
  var setSecret = function(secret) {
    command_1.issueCommand("add-mask", {}, secret);
  };
  var addPath = function(inputPath) {
    const filePath = process.env["GITHUB_PATH"] || "";
    if (filePath) {
      file_command_1.issueFileCommand("PATH", inputPath);
    } else {
      command_1.issueCommand("add-path", {}, inputPath);
    }
    process.env["PATH"] = `${inputPath}${path.delimiter}${process.env["PATH"]}`;
  };
  var getInput = function(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
    if (options && options.required && !val) {
      throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
      return val;
    }
    return val.trim();
  };
  var getMultilineInput = function(name, options) {
    const inputs = getInput(name, options).split("\n").filter((x) => x !== "");
    if (options && options.trimWhitespace === false) {
      return inputs;
    }
    return inputs.map((input) => input.trim());
  };
  var getBooleanInput = function(name, options) {
    const trueValue = ["true", "True", "TRUE"];
    const falseValue = ["false", "False", "FALSE"];
    const val = getInput(name, options);
    if (trueValue.includes(val))
      return true;
    if (falseValue.includes(val))
      return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` + `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
  };
  var setOutput = function(name, value) {
    const filePath = process.env["GITHUB_OUTPUT"] || "";
    if (filePath) {
      return file_command_1.issueFileCommand("OUTPUT", file_command_1.prepareKeyValueMessage(name, value));
    }
    process.stdout.write(os.EOL);
    command_1.issueCommand("set-output", { name }, utils_1.toCommandValue(value));
  };
  var setCommandEcho = function(enabled) {
    command_1.issue("echo", enabled ? "on" : "off");
  };
  var setFailed = function(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
  };
  var isDebug = function() {
    return process.env["RUNNER_DEBUG"] === "1";
  };
  var debug = function(message) {
    command_1.issueCommand("debug", {}, message);
  };
  var error = function(message, properties = {}) {
    command_1.issueCommand("error", utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
  };
  var warning = function(message, properties = {}) {
    command_1.issueCommand("warning", utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
  };
  var notice = function(message, properties = {}) {
    command_1.issueCommand("notice", utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
  };
  var info = function(message) {
    process.stdout.write(message + os.EOL);
  };
  var startGroup = function(name) {
    command_1.issue("group", name);
  };
  var endGroup = function() {
    command_1.issue("endgroup");
  };
  var group = function(name, fn) {
    return __awaiter(this, undefined, undefined, function* () {
      startGroup(name);
      let result;
      try {
        result = yield fn();
      } finally {
        endGroup();
      }
      return result;
    });
  };
  var saveState = function(name, value) {
    const filePath = process.env["GITHUB_STATE"] || "";
    if (filePath) {
      return file_command_1.issueFileCommand("STATE", file_command_1.prepareKeyValueMessage(name, value));
    }
    command_1.issueCommand("save-state", { name }, utils_1.toCommandValue(value));
  };
  var getState = function(name) {
    return process.env[`STATE_${name}`] || "";
  };
  var getIDToken = function(aud) {
    return __awaiter(this, undefined, undefined, function* () {
      return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
  };
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = undefined;
  var command_1 = require_command();
  var file_command_1 = require_file_command();
  var utils_1 = require_utils();
  var os = __importStar(__require("os"));
  var path = __importStar(__require("path"));
  var oidc_utils_1 = require_oidc_utils();
  var ExitCode;
  (function(ExitCode2) {
    ExitCode2[ExitCode2["Success"] = 0] = "Success";
    ExitCode2[ExitCode2["Failure"] = 1] = "Failure";
  })(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
  exports.exportVariable = exportVariable;
  exports.setSecret = setSecret;
  exports.addPath = addPath;
  exports.getInput = getInput;
  exports.getMultilineInput = getMultilineInput;
  exports.getBooleanInput = getBooleanInput;
  exports.setOutput = setOutput;
  exports.setCommandEcho = setCommandEcho;
  exports.setFailed = setFailed;
  exports.isDebug = isDebug;
  exports.debug = debug;
  exports.error = error;
  exports.warning = warning;
  exports.notice = notice;
  exports.info = info;
  exports.startGroup = startGroup;
  exports.endGroup = endGroup;
  exports.group = group;
  exports.saveState = saveState;
  exports.getState = getState;
  exports.getIDToken = getIDToken;
  var summary_1 = require_summary();
  Object.defineProperty(exports, "summary", { enumerable: true, get: function() {
    return summary_1.summary;
  } });
  var summary_2 = require_summary();
  Object.defineProperty(exports, "markdownSummary", { enumerable: true, get: function() {
    return summary_2.markdownSummary;
  } });
  var path_utils_1 = require_path_utils();
  Object.defineProperty(exports, "toPosixPath", { enumerable: true, get: function() {
    return path_utils_1.toPosixPath;
  } });
  Object.defineProperty(exports, "toWin32Path", { enumerable: true, get: function() {
    return path_utils_1.toWin32Path;
  } });
  Object.defineProperty(exports, "toPlatformPath", { enumerable: true, get: function() {
    return path_utils_1.toPlatformPath;
  } });
});

// node_modules/dotenv/package.json
var require_package = __commonJS((exports, module) => {
  module.exports = {
    name: "dotenv",
    version: "16.3.1",
    description: "Loads environment variables from .env file",
    main: "lib/main.js",
    types: "lib/main.d.ts",
    exports: {
      ".": {
        types: "./lib/main.d.ts",
        require: "./lib/main.js",
        default: "./lib/main.js"
      },
      "./config": "./config.js",
      "./config.js": "./config.js",
      "./lib/env-options": "./lib/env-options.js",
      "./lib/env-options.js": "./lib/env-options.js",
      "./lib/cli-options": "./lib/cli-options.js",
      "./lib/cli-options.js": "./lib/cli-options.js",
      "./package.json": "./package.json"
    },
    scripts: {
      "dts-check": "tsc --project tests/types/tsconfig.json",
      lint: "standard",
      "lint-readme": "standard-markdown",
      pretest: "npm run lint && npm run dts-check",
      test: "tap tests/*.js --100 -Rspec",
      prerelease: "npm test",
      release: "standard-version"
    },
    repository: {
      type: "git",
      url: "git://github.com/motdotla/dotenv.git"
    },
    funding: "https://github.com/motdotla/dotenv?sponsor=1",
    keywords: [
      "dotenv",
      "env",
      ".env",
      "environment",
      "variables",
      "config",
      "settings"
    ],
    readmeFilename: "README.md",
    license: "BSD-2-Clause",
    devDependencies: {
      "@definitelytyped/dtslint": "^0.0.133",
      "@types/node": "^18.11.3",
      decache: "^4.6.1",
      sinon: "^14.0.1",
      standard: "^17.0.0",
      "standard-markdown": "^7.1.0",
      "standard-version": "^9.5.0",
      tap: "^16.3.0",
      tar: "^6.1.11",
      typescript: "^4.8.4"
    },
    engines: {
      node: ">=12"
    },
    browser: {
      fs: false
    }
  };
});

// node_modules/dotenv/lib/main.js
var require_main = __commonJS((exports, module) => {
  var parse = function(src) {
    const obj = {};
    let lines = src.toString();
    lines = lines.replace(/\r\n?/mg, "\n");
    let match;
    while ((match = LINE.exec(lines)) != null) {
      const key = match[1];
      let value = match[2] || "";
      value = value.trim();
      const maybeQuote = value[0];
      value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
      if (maybeQuote === '"') {
        value = value.replace(/\\n/g, "\n");
        value = value.replace(/\\r/g, "\r");
      }
      obj[key] = value;
    }
    return obj;
  };
  var _parseVault = function(options) {
    const vaultPath = _vaultPath(options);
    const result = DotenvModule.configDotenv({ path: vaultPath });
    if (!result.parsed) {
      throw new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
    }
    const keys = _dotenvKey(options).split(",");
    const length = keys.length;
    let decrypted;
    for (let i = 0;i < length; i++) {
      try {
        const key = keys[i].trim();
        const attrs = _instructions(result, key);
        decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);
        break;
      } catch (error) {
        if (i + 1 >= length) {
          throw error;
        }
      }
    }
    return DotenvModule.parse(decrypted);
  };
  var _log = function(message) {
    console.log(`[dotenv@${version}][INFO] ${message}`);
  };
  var _warn = function(message) {
    console.log(`[dotenv@${version}][WARN] ${message}`);
  };
  var _debug = function(message) {
    console.log(`[dotenv@${version}][DEBUG] ${message}`);
  };
  var _dotenvKey = function(options) {
    if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {
      return options.DOTENV_KEY;
    }
    if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
      return process.env.DOTENV_KEY;
    }
    return "";
  };
  var _instructions = function(result, dotenvKey) {
    let uri;
    try {
      uri = new URL(dotenvKey);
    } catch (error) {
      if (error.code === "ERR_INVALID_URL") {
        throw new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=development");
      }
      throw error;
    }
    const key = uri.password;
    if (!key) {
      throw new Error("INVALID_DOTENV_KEY: Missing key part");
    }
    const environment = uri.searchParams.get("environment");
    if (!environment) {
      throw new Error("INVALID_DOTENV_KEY: Missing environment part");
    }
    const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
    const ciphertext = result.parsed[environmentKey];
    if (!ciphertext) {
      throw new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
    }
    return { ciphertext, key };
  };
  var _vaultPath = function(options) {
    let dotenvPath = path.resolve(process.cwd(), ".env");
    if (options && options.path && options.path.length > 0) {
      dotenvPath = options.path;
    }
    return dotenvPath.endsWith(".vault") ? dotenvPath : `${dotenvPath}.vault`;
  };
  var _resolveHome = function(envPath) {
    return envPath[0] === "~" ? path.join(os.homedir(), envPath.slice(1)) : envPath;
  };
  var _configVault = function(options) {
    _log("Loading env from encrypted .env.vault");
    const parsed = DotenvModule._parseVault(options);
    let processEnv = process.env;
    if (options && options.processEnv != null) {
      processEnv = options.processEnv;
    }
    DotenvModule.populate(processEnv, parsed, options);
    return { parsed };
  };
  var configDotenv = function(options) {
    let dotenvPath = path.resolve(process.cwd(), ".env");
    let encoding = "utf8";
    const debug = Boolean(options && options.debug);
    if (options) {
      if (options.path != null) {
        dotenvPath = _resolveHome(options.path);
      }
      if (options.encoding != null) {
        encoding = options.encoding;
      }
    }
    try {
      const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, { encoding }));
      let processEnv = process.env;
      if (options && options.processEnv != null) {
        processEnv = options.processEnv;
      }
      DotenvModule.populate(processEnv, parsed, options);
      return { parsed };
    } catch (e) {
      if (debug) {
        _debug(`Failed to load ${dotenvPath} ${e.message}`);
      }
      return { error: e };
    }
  };
  var config = function(options) {
    const vaultPath = _vaultPath(options);
    if (_dotenvKey(options).length === 0) {
      return DotenvModule.configDotenv(options);
    }
    if (!fs.existsSync(vaultPath)) {
      _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`);
      return DotenvModule.configDotenv(options);
    }
    return DotenvModule._configVault(options);
  };
  var decrypt = function(encrypted, keyStr) {
    const key = Buffer.from(keyStr.slice(-64), "hex");
    let ciphertext = Buffer.from(encrypted, "base64");
    const nonce = ciphertext.slice(0, 12);
    const authTag = ciphertext.slice(-16);
    ciphertext = ciphertext.slice(12, -16);
    try {
      const aesgcm = crypto.createDecipheriv("aes-256-gcm", key, nonce);
      aesgcm.setAuthTag(authTag);
      return `${aesgcm.update(ciphertext)}${aesgcm.final()}`;
    } catch (error) {
      const isRange = error instanceof RangeError;
      const invalidKeyLength = error.message === "Invalid key length";
      const decryptionFailed = error.message === "Unsupported state or unable to authenticate data";
      if (isRange || invalidKeyLength) {
        const msg = "INVALID_DOTENV_KEY: It must be 64 characters long (or more)";
        throw new Error(msg);
      } else if (decryptionFailed) {
        const msg = "DECRYPTION_FAILED: Please check your DOTENV_KEY";
        throw new Error(msg);
      } else {
        console.error("Error: ", error.code);
        console.error("Error: ", error.message);
        throw error;
      }
    }
  };
  var populate = function(processEnv, parsed, options = {}) {
    const debug = Boolean(options && options.debug);
    const override = Boolean(options && options.override);
    if (typeof parsed !== "object") {
      throw new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
    }
    for (const key of Object.keys(parsed)) {
      if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
        if (override === true) {
          processEnv[key] = parsed[key];
        }
        if (debug) {
          if (override === true) {
            _debug(`"${key}" is already defined and WAS overwritten`);
          } else {
            _debug(`"${key}" is already defined and was NOT overwritten`);
          }
        }
      } else {
        processEnv[key] = parsed[key];
      }
    }
  };
  var fs = __require("fs");
  var path = __require("path");
  var os = __require("os");
  var crypto = __require("crypto");
  var packageJson = require_package();
  var version = packageJson.version;
  var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
  var DotenvModule = {
    configDotenv,
    _configVault,
    _parseVault,
    config,
    decrypt,
    parse,
    populate
  };
  exports.configDotenv = DotenvModule.configDotenv;
  exports._configVault = DotenvModule._configVault;
  exports._parseVault = DotenvModule._parseVault;
  exports.config = DotenvModule.config;
  exports.decrypt = DotenvModule.decrypt;
  exports.parse = DotenvModule.parse;
  exports.populate = DotenvModule.populate;
  module.exports = DotenvModule;
});

// src/index.ts
var core = __toESM(require_core(), 1);
var dotenv = __toESM(require_main(), 1);
import * as path from "path";
import {promises as fs} from "fs";
async function main() {
  const file = core.getInput("file") || ".env";
  const pathname = path.resolve(file);
  core.info(`Loading env from ${pathname}`);
  const content = await fs.readFile(pathname, "utf-8");
  const env = dotenv.parse(content);
  for (const key in env) {
    const value = env[key];
    core.info(`Loaded variable ${key}`);
    core.setSecret(value);
    core.setOutput(key, value);
  }
}
main().catch(function(error) {
  core.setFailed(error.message);
});

var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'wxpay']]]]]]]]])
Z([3,'margin-top:10rpx;'])
Z([3,'微信支付'])
Z([3,'primary'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'tag-view'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'bindClickPrimary']]]]]]]]])
Z([3,'本地异步缓存'])
Z([3,'primary'])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z([1,true])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'bindClickError']]]]]]]]])
Z([3,'地图选择位置'])
Z([3,'error'])
Z([3,'2'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'bindClickGray']]]]]]]]])
Z([3,'获取异步缓存'])
Z([3,'3'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'bindClickWarning']]]]]]]]])
Z([3,'margin-top:10rpx;'])
Z([[7],[3,'requestText']])
Z([3,'warning'])
Z([3,'4'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'bindClickIf']]]]]]]]])
Z(z[23])
Z([3,'不同端打印不同的结果'])
Z(z[25])
Z([3,'5'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'bindClickUtilRequest']]]]]]]]])
Z(z[23])
Z([3,'utilRequest'])
Z(z[25])
Z([3,'6'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'bindClickApi']]]]]]]]])
Z(z[23])
Z([3,'异步封装调用'])
Z(z[25])
Z([3,'7'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'navigateToNvue']]]]]]]]])
Z(z[23])
Z([3,'vue到nvue跳转'])
Z(z[6])
Z([3,'8'])
Z(z[2])
Z([3,'9'])
Z([3,'index'])
Z([3,'product'])
Z([[7],[3,'productList']])
Z(z[57])
Z(z[3])
Z([3,'uni-product'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showToast']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[7],[3,'renderImage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/banner/banner.wxml','./components/uni-tag/uni-tag.wxml','./components/wxpay/wxpay.wxml','./pages/componentShow/componentShow.wxml','./pages/home/home.wxml','./pages/index/index.wxml','./pages/otherPage/otherPage.wxml','./pages/person/person.wxml','./pages/photo/photo.wxml','./pages/requestTest/requestTest.wxml','./pages/shoppingCart/shoppingCart.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_v()
_(r,xC)
if(_oz(z,0,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=_mz(z,'uni-tag',['bind:__l',0,'bind:click',1,'data-event-opts',1,'style',2,'text',3,'type',4,'vueId',5],[],e,s,gg)
_(r,fE)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var hG=_mz(z,'banner',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,hG)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oJ=_n('view')
_rz(z,oJ,'class',0,e,s,gg)
var lK=_n('view')
_rz(z,lK,'class',1,e,s,gg)
var aL=_mz(z,'uni-tag',['bind:__l',2,'bind:click',1,'data-event-opts',2,'text',3,'type',4,'vueId',5],[],e,s,gg)
_(lK,aL)
var tM=_mz(z,'uni-tag',['bind:__l',8,'bind:click',1,'circle',2,'data-event-opts',3,'text',4,'type',5,'vueId',6],[],e,s,gg)
_(lK,tM)
var eN=_mz(z,'uni-tag',['bind:__l',15,'bind:click',1,'data-event-opts',2,'text',3,'vueId',4],[],e,s,gg)
_(lK,eN)
var bO=_mz(z,'uni-tag',['bind:__l',20,'bind:click',1,'data-event-opts',2,'style',3,'text',4,'type',5,'vueId',6],[],e,s,gg)
_(lK,bO)
var oP=_mz(z,'uni-tag',['bind:__l',27,'bind:click',1,'data-event-opts',2,'style',3,'text',4,'type',5,'vueId',6],[],e,s,gg)
_(lK,oP)
var xQ=_mz(z,'uni-tag',['bind:__l',34,'bind:click',1,'data-event-opts',2,'style',3,'text',4,'type',5,'vueId',6],[],e,s,gg)
_(lK,xQ)
var oR=_mz(z,'uni-tag',['bind:__l',41,'bind:click',1,'data-event-opts',2,'style',3,'text',4,'type',5,'vueId',6],[],e,s,gg)
_(lK,oR)
var fS=_mz(z,'uni-tag',['bind:__l',48,'bind:click',1,'data-event-opts',2,'style',3,'text',4,'type',5,'vueId',6],[],e,s,gg)
_(lK,fS)
var cT=_mz(z,'wxpay',['bind:__l',55,'vueId',1],[],e,s,gg)
_(lK,cT)
_(oJ,lK)
var hU=_v()
_(oJ,hU)
var oV=function(oX,cW,lY,gg){
var t1=_mz(z,'view',['bindtap',61,'class',1,'data-event-opts',2],[],oX,cW,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,64,oX,cW,gg)){e2.wxVkey=1
}
e2.wxXCkey=1
_(lY,t1)
return lY
}
hU.wxXCkey=2
_2z(z,59,oV,e,s,gg,hU,'product','index','index')
_(r,oJ)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/home/home","components/banner/banner","pages/requestTest/requestTest","pages/componentShow/componentShow","pages/person/person","pages/shoppingCart/shoppingCart","pages/photo/photo","pages/otherPage/otherPage","components/wxpay/wxpay"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"吴同岳","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"tabBar":{"list":[{"text":"主页","pagePath":"pages/home/home","iconPath":"static/home.png","selectedIconPath":"static/home_c.png"},{"text":"购物车","pagePath":"pages/shoppingCart/shoppingCart","iconPath":"static/shopping_cart.png","selectedIconPath":"static/shopping_cart_c.png"},{"text":"相机","pagePath":"pages/photo/photo","iconPath":"static/photo.png","selectedIconPath":"static/photo_c.png"},{"text":"个人中心","pagePath":"pages/person/person","iconPath":"static/person.png","selectedIconPath":"static/person_c.png"}],"color":"#000","selectedColor":"#1afa29","backgroundColor":"#F7F7F7","borderStyle":"white"},"nvue":{"pages":{"pages/androidTest/androidTest.html":{"window":{"usingComponents":{}},"nvue":true},"pages/nvueTest/nvueTest.html":{"window":{"usingComponents":{}},"nvue":true}}},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"no","compilerVersion":"2.4.1","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/banner/banner.json']={"usingComponents":{}};
__wxAppCode__['components/banner/banner.wxml']=$gwx('./components/banner/banner.wxml');

__wxAppCode__['components/uni-tag/uni-tag.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-tag/uni-tag.wxml']=$gwx('./components/uni-tag/uni-tag.wxml');

__wxAppCode__['components/wxpay/wxpay.json']={"usingComponents":{"uni-tag":"/components/uni-tag/uni-tag"}};
__wxAppCode__['components/wxpay/wxpay.wxml']=$gwx('./components/wxpay/wxpay.wxml');

__wxAppCode__['pages/componentShow/componentShow.json']={"usingComponents":{"banner":"/components/banner/banner"}};
__wxAppCode__['pages/componentShow/componentShow.wxml']=$gwx('./pages/componentShow/componentShow.wxml');

__wxAppCode__['pages/home/home.json']={"usingComponents":{}};
__wxAppCode__['pages/home/home.wxml']=$gwx('./pages/home/home.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"未知页","enablePullDownRefresh":true,"usingComponents":{"uni-tag":"/components/uni-tag/uni-tag","wxpay":"/components/wxpay/wxpay"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/otherPage/otherPage.json']={"usingComponents":{}};
__wxAppCode__['pages/otherPage/otherPage.wxml']=$gwx('./pages/otherPage/otherPage.wxml');

__wxAppCode__['pages/person/person.json']={"usingComponents":{}};
__wxAppCode__['pages/person/person.wxml']=$gwx('./pages/person/person.wxml');

__wxAppCode__['pages/photo/photo.json']={"usingComponents":{}};
__wxAppCode__['pages/photo/photo.wxml']=$gwx('./pages/photo/photo.wxml');

__wxAppCode__['pages/requestTest/requestTest.json']={"usingComponents":{}};
__wxAppCode__['pages/requestTest/requestTest.wxml']=$gwx('./pages/requestTest/requestTest.wxml');

__wxAppCode__['pages/shoppingCart/shoppingCart.json']={"usingComponents":{}};
__wxAppCode__['pages/shoppingCart/shoppingCart.wxml']=$gwx('./pages/shoppingCart/shoppingCart.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{2139:function(t,e,n){"use strict";n.r(e);var o=n("5b17"),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=u.a},"3c48":function(t,e,n){},5083:function(t,e,n){"use strict";(function(t){n("97b3"),n("921b");var e=r(n("66fd")),o=r(n("d245")),u=r(n("3466"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.prototype.$store=u.default,e.default.config.productionTip=!1,o.default.mpType="app";var l=new e.default(c({},o.default,{store:u.default}));t(l).$mount()}).call(this,n("6e42")["createApp"])},"5b17":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("1644");var o={globalData:{text:"vue与nvue通用的全局变量管理"},onLaunch:function(){console.log(t("App Launch"," at App.vue:8"))},onShow:function(){console.log(t("App Show"," at App.vue:27"))},onHide:function(){console.log(t("App Hide"," at App.vue:33"))}};e.default=o}).call(this,n("0de9")["default"])},c605:function(t,e,n){"use strict";var o=n("3c48"),u=n.n(o);u.a},d245:function(t,e,n){"use strict";n.r(e);var o=n("2139");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("c605");var r,c,a=n("2877"),l=Object(a["a"])(o["default"],r,c,!1,null,null,null);e["default"]=l.exports}},[["5083","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, i = t[0], l = t[1], c = t[2], f = 0, s = []; f < i.length; f++) {
      o = i[f], u[o] && s.push(u[o][0]), u[o] = 0;
    }

    for (r in l) {
      Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    }

    p && p(t);

    while (s.length) {
      s.shift()();
    }

    return a.push.apply(a, c || []), n();
  }

  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== u[i] && (r = !1);
      }

      r && (a.splice(t--, 1), e = l(l.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      a = [];

  function i(e) {
    return l.p + "" + e + ".js";
  }

  function l(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, l), n.l = !0, n.exports;
  }

  l.e = function (e) {
    var t = [],
        n = {
      "components/uni-tag/uni-tag": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/uni-tag/uni-tag": "components/uni-tag/uni-tag"
      }[e] || e) + ".wxss", u = l.p + r, a = document.getElementsByTagName("link"), i = 0; i < a.length; i++) {
        var c = a[i],
            f = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (f === r || f === u)) return t();
      }

      var s = document.getElementsByTagName("style");

      for (i = 0; i < s.length; i++) {
        c = s[i], f = c.getAttribute("data-href");
        if (f === r || f === u) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var r = t && t.target && t.target.src || u,
            a = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        a.request = r, delete o[e], p.parentNode.removeChild(p), n(a);
      }, p.href = u;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var r = u[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var a = new Promise(function (t, n) {
        r = u[e] = [t, n];
      });
      t.push(r[2] = a);
      var c,
          f = document.createElement("script");
      f.charset = "utf-8", f.timeout = 120, l.nc && f.setAttribute("nonce", l.nc), f.src = i(e), c = function c(t) {
        f.onerror = f.onload = null, clearTimeout(s);
        var n = u[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                a = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            a.type = r, a.request = o, n[1](a);
          }

          u[e] = void 0;
        }
      };
      var s = setTimeout(function () {
        c({
          type: "timeout",
          target: f
        });
      }, 12e4);
      f.onerror = f.onload = c, document.head.appendChild(f);
    }
    return Promise.all(t);
  }, l.m = e, l.c = r, l.d = function (e, t, n) {
    l.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, t) {
    if (1 & t && (e = l(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (l.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      l.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, l.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(t, "a", t), t;
  }, l.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, l.p = "/", l.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      f = c.push.bind(c);
  c.push = t, c = c.slice();

  for (var s = 0; s < c.length; s++) {
    t(c[s]);
  }

  var p = f;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"081c":function(t,e,n){"use strict";(function(e){t.exports={navigateTo:function(t){this.setParameters(t.url),e.navigateTo(t)},redirectTo:function(t){this.setParameters(t.url),e.redirectTo(t)},reLaunch:function(t){this.setParameters(t.url),e.reLaunch(t)},switchTab:function(t){e.switchTab(t)},navigateBack:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){e.switchTab(navigateBack)}),setParameters:function(t){var n=t.split("?");if(n.length<2)return!1;var r={};n=n[1],n=n.split("&");for(var o=0;o<n.length;o++){var i=n[o].split("=");r[i[0]]=i[1]}try{e.setStorageSync("graceUIPageParameters",JSON.stringify(r))}catch(a){}},getParameters:function(){try{return JSON.parse(e.getStorageSync("graceUIPageParameters"))}catch(t){return null}}}}).call(this,n("6e42")["default"])},"0ba2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__9BE2053"};e.default=r},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var a=o.pop();i=o.join("---COMMA---"),0===a.indexOf(" at ")?i+=a:i+="---COMMA---"+a}else i=o[0];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},1644:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.loginWx=o,e.login=i;var r=n("e986");function o(t,e){return(0,r.lAxios)("wx/wx_login","POST",t,e)}function i(t,e){return(0,r.lAxios)("login","POST",t,e)}},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return E}),n.d(e,"mapState",function(){return x}),n.d(e,"mapMutations",function(){return P}),n.d(e,"mapGetters",function(){return B}),n.d(e,"mapActions",function(){return j}),n.d(e,"createNamespacedHelpers",function(){return U});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function u(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){a(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,f);var l=function(t){this.register([],t,!1)};function p(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;p(t.concat(r),e.getChild(r),n.modules[r])}}l.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},l.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},l.prototype.update=function(t){p([],this.root,t)},l.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new c(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){r.register(t.concat(o),e,n)})},l.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var h;var d=function(t){var e=this;void 0===t&&(t={}),!h&&"undefined"!==typeof window&&window.Vue&&E(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new h;var a=this,s=this,u=s.dispatch,c=s.commit;this.dispatch=function(t,e){return u.call(a,t,e)},this.commit=function(t,e,n){return c.call(a,t,e,n)},this.strict=r,b(this,o,[],this._modules.root),m(this,o),n.forEach(function(t){return t(e)}),h.config.devtools&&i(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;b(t,n,[],t._modules.root,!0),m(t,n,e)}function m(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};a(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=h.config.silent;h.config.silent=!0,t._vm=new h({data:{$$state:e},computed:i}),h.config.silent=s,t.strict&&k(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),h.nextTick(function(){return r.$destroy()}))}function b(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=D(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){h.set(s,u,r.state)})}var c=r.context=A(t,a,n);r.forEachMutation(function(e,n){var r=a+n;w(t,r,e,c)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;S(t,r,o,c)}),r.forEachGetter(function(e,n){var r=a+n;O(t,r,e,c)}),r.forEachChild(function(r,i){b(t,e,n.concat(i),r,o)})}function A(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=C(n,r,o),a=i.payload,s=i.options,u=i.type;return s&&s.root||(u=e+u),t.dispatch(u,a)},commit:r?t.commit:function(n,r,o){var i=C(n,r,o),a=i.payload,s=i.options,u=i.type;s&&s.root||(u=e+u),t.commit(u,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return _(t,e)}},state:{get:function(){return D(t.state,n)}}}),o}function _(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function w(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function S(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return u(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function O(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function k(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function D(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function C(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function E(t){h&&t===h||(h=t,r(h))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,o=C(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),u=this._mutations[i];u&&(this._withCommit(function(){u.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=C(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},d.prototype.subscribe=function(t){return g(t,this._subscribers)},d.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),b(this,this.state,t,this._modules.get(t),n.preserveState),m(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=D(e.state,t.slice(0,-1));h.delete(n,t[t.length-1])}),y(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var x=T(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=M(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),P=T(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=M(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),B=T(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||M(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),j=T(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=M(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),U=function(t){return{mapState:x.bind(null,t),mapGetters:B.bind(null,t),mapMutations:P.bind(null,t),mapActions:j.bind(null,t)}};function I(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function T(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function M(t,e,n){var r=t._modulesNamespaceMap[n];return r}var R={Store:d,install:E,version:"3.0.1",mapState:x,mapMutations:P,mapGetters:B,mapActions:j,createNamespacedHelpers:U};e["default"]=R},3466:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("66fd")),o=i(n("2f62"));function i(t){return t&&t.__esModule?t:{default:t}}r.default.use(o.default);var a=new o.default.Store({state:{token:"状态管理储存Bearer-token",getter:"这是测试getters"},mutations:{doMutations:function(e,n){console.log(t(n," at store\\index.js:11")),setTimeout(function(e){console.log(t(n," at store\\index.js:13"))},2e3)},doCommit:function(){console.log(t("hello doCommit"," at store\\index.js:17"))}},actions:{doActions:function(e,n){console.log(t(n," at store\\index.js:22"))},doDispatch:function(){}},getters:{doGetters:function(t){return t.getter}}}),s=a;e.default=s}).call(this,n("0de9")["default"])},"3b68":function(t,e,n){"use strict";(function(t){function n(e,n,r){t.reLaunch({url:e+"?"+n+"="+r})}function r(e,n,r){t.navigateTo({url:e+"?"+n+"="+r})}Object.defineProperty(e,"__esModule",{value:!0}),e.reLaunch=n,e.navigateTo=r}).call(this,n("6e42")["default"])},"52a0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=!0;r=o?"http://localhost:7777/yes/public/api/":"https://coral3.com/yes/public/api/";var i=r;e.default=i},"52c1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/index/index":{navigationBarTitleText:"未知页",enablePullDownRefresh:!0},"pages/home/home":{},"components/banner/banner":{},"pages/requestTest/requestTest":{},"pages/componentShow/componentShow":{},"pages/person/person":{},"pages/shoppingCart/shoppingCart":{},"pages/photo/photo":{},"pages/otherPage/otherPage":{},"components/wxpay/wxpay":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"吴同岳",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8",navigationStyle:"custom"}};e.default=r},5848:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.wxpay=o;var r=n("e986");function o(t,e){return(0,r.lAxios)("wxpay","POST",t,e)}},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function A(t,e){return b.call(t,e)}function _(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,S=_(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),O=_(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),k=/\B([A-Z])/g,D=_(function(t){return t.replace(k,"-$1").toLowerCase()});function C(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function E(t,e){return t.bind(e)}var x=Function.prototype.bind?E:C;function P(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function B(t,e){for(var n in e)t[n]=e[n];return t}function j(t){for(var e={},n=0;n<t.length;n++)t[n]&&B(e,t[n]);return e}function U(t,e,n){}var I=function(t,e,n){return!1},T=function(t){return t};function M(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return M(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return M(t[n],e[n])})}catch(c){return!1}}function R(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function V(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var F=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],N={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:U,parsePlatformTagName:T,mustUseProp:I,async:!0,_lifecycleHooks:H},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var K=new RegExp("[^"+q.source+".$_\\d]");function L(t){if(!K.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J,G="__proto__"in{},z="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=X&&WXEnvironment.platform.toLowerCase(),Z=z&&window.navigator.userAgent.toLowerCase(),$=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(z)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(eo){}var ot=function(){return void 0===J&&(J=!z&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),J},it=z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=U,ft=0,lt=function(){this.id=ft++,this.subs=[]};function pt(t){lt.SharedObject.targetStack.push(t),lt.SharedObject.target=t}function ht(){lt.SharedObject.targetStack.pop(),lt.SharedObject.target=lt.SharedObject.targetStack[lt.SharedObject.targetStack.length-1]}lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){m(this.subs,t)},lt.prototype.depend=function(){lt.SharedObject.target&&lt.SharedObject.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},lt.SharedObject.target=null,lt.SharedObject.targetStack=[];var dt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var gt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function mt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var bt=Array.prototype,At=Object.create(bt),_t=["push","pop","shift","unshift","splice","sort","reverse"];_t.forEach(function(t){var e=bt[t];W(At,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var wt=Object.getOwnPropertyNames(At),St=!0;function Ot(t){St=t}var kt=function(t){this.value=t,this.dep=new lt,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)?(G?t.push!==t.__proto__.push?Ct(t,At,wt):Dt(t,At):Ct(t,At,wt),this.observeArray(t)):this.walk(t)};function Dt(t,e){t.__proto__=e}function Ct(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];W(t,i,e[i])}}function Et(t,e){var n;if(u(t)&&!(t instanceof dt))return A(t,"__ob__")&&t.__ob__ instanceof kt?n=t.__ob__:St&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new kt(t)),e&&n&&n.vmCount++,n}function xt(t,e,n,r,o){var i=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&Et(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.SharedObject.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&jt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&Et(e),i.notify())}})}}function Pt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(xt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Bt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||A(t,e)&&(delete t[e],n&&n.dep.notify())}}function jt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&jt(e)}kt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)xt(t,e[n])},kt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Et(t[e])};var Ut=N.optionMergeStrategies;function It(t,e){if(!e)return t;for(var n,r,o,i=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],A(t,n)?r!==o&&f(r)&&f(o)&&It(r,o):Pt(t,n,o));return t}function Tt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?It(r,o):o}:e?t?function(){return It("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Mt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Rt(n):n}function Rt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Vt(t,e,n,r){var o=Object.create(t||null);return e?B(o,e):o}Ut.data=function(t,e,n){return n?Tt(t,e,n):e&&"function"!==typeof e?t:Tt(t,e)},H.forEach(function(t){Ut[t]=Mt}),F.forEach(function(t){Ut[t+"s"]=Vt}),Ut.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in B(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},Ut.props=Ut.methods=Ut.inject=Ut.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return B(o,t),e&&B(o,e),o},Ut.provide=Tt;var Ft=function(t,e){return void 0===e?t:e};function Ht(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=S(o),a[i]={type:null})}else if(f(n))for(var s in n)o=n[s],i=S(s),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function Nt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?B({from:i},a):{from:a}}else 0}}function qt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Qt(t,e,n){if("function"===typeof e&&(e=e.options),Ht(e,n),Nt(e,n),qt(e),!e._base&&(e.extends&&(t=Qt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Qt(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)A(t,i)||s(i);function s(r){var o=Ut[r]||Ft;a[r]=o(t[r],e[r],n,r)}return a}function Wt(t,e,n,r){if("string"===typeof n){var o=t[e];if(A(o,n))return o[n];var i=S(n);if(A(o,i))return o[i];var a=O(i);if(A(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Kt(t,e,n,r){var o=e[t],i=!A(n,t),a=n[t],s=zt(Boolean,o.type);if(s>-1)if(i&&!A(o,"default"))a=!1;else if(""===a||a===D(t)){var u=zt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Lt(r,o,t);var c=St;Ot(!0),Et(a),Ot(c)}return a}function Lt(t,e,n){if(A(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Jt(e.type)?r.call(t):r}}function Jt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Gt(t,e){return Jt(t)===Jt(e)}function zt(t,e){if(!Array.isArray(e))return Gt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Gt(e[n],t))return n;return-1}function Xt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(eo){Zt(eo,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{ht()}}function Yt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(t){return Xt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(eo){Xt(eo,r,o)}return i}function Zt(t,e,n){if(N.errorHandler)try{return N.errorHandler.call(null,t,e,n)}catch(eo){eo!==t&&$t(eo,null,"config.errorHandler")}$t(t,e,n)}function $t(t,e,n){if(!z&&!X||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(U)}}else if($||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,ae=new MutationObserver(re),se=document.createTextNode(String(ie));ae.observe(se,{characterData:!0}),te=function(){ie=(ie+1)%2,se.data=String(ie)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(eo){Xt(eo,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function fe(t){le(t,ce),ce.clear()}function le(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)le(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)le(t[r[n]],e)}}}var pe=_(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Yt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Yt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,o,a,s){var u,c,f,l;for(u in t)c=t[u],f=e[u],l=pe(u),r(c)||(r(f)?(r(c.fns)&&(c=t[u]=he(c,s)),i(l.once)&&(c=t[u]=a(l.name,c,l.capture)),n(l.name,c,l.capture,l.passive,l.params)):c!==f&&(f.fns=c,t[u]=f));for(u in e)r(t[u])&&(l=pe(u),o(l.name,e[u],l.capture))}function ve(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in i){var f=D(c);ge(a,u,c,f,!0)||ge(a,s,c,f,!1)}return a}}function ge(t,e,n,r,i){if(o(e)){if(A(e,n))return t[n]=e[n],i||delete e[n],!0;if(A(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[yt(t)]:Array.isArray(t)?Ae(t):void 0}function be(t){return o(t)&&o(t.text)&&a(t.isComment)}function Ae(t,e){var n,a,u,c,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=f.length-1,c=f[u],Array.isArray(a)?a.length>0&&(a=Ae(a,(e||"")+"_"+n),be(a[0])&&be(c)&&(f[u]=yt(c.text+a[0].text),a.shift()),f.push.apply(f,a)):s(a)?be(c)?f[u]=yt(c.text+a):""!==a&&f.push(yt(a)):be(a)&&be(c)?f[u]=yt(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function _e(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=Se(t.$options.inject,t);e&&(Ot(!1),Object.keys(e).forEach(function(n){xt(t,n,e[n])}),Ot(!0))}function Se(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&A(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function Oe(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(ke)&&delete n[c];return n}function ke(t){return t.isComment&&!t.asyncFactory||" "===t.text}function De(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=Ce(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=Ee(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),W(o,"$stable",a),W(o,"$key",s),W(o,"$hasNormal",i),o}function Ce(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Ee(t,e){return function(){return t[e]}}function xe(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length)),f=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function Pe(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=B(B({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Be(t){return Wt(this.$options,"filters",t,!0)||T}function je(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ue(t,e,n,r,o){var i=N.keyCodes[e]||n;return o&&r&&!N.keyCodes[e]?je(o,r):i?je(i,t):r?D(r)!==e:void 0}function Ie(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=j(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||N.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=S(a),c=D(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Te(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Re(r,"__static__"+t,!1),r)}function Me(t,e,n){return Re(t,"__once__"+e+(n?"_"+n:""),!0),t}function Re(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ve(t[r],e+"_"+r,n);else Ve(t,e,n)}function Ve(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Fe(t,e){if(e)if(f(e)){var n=t.on=t.on?B({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function He(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?He(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Ne(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function qe(t,e){return"string"===typeof t?e+t:t}function Qe(t){t._o=Me,t._n=v,t._s=d,t._l=xe,t._t=Pe,t._q=M,t._i=R,t._m=Te,t._f=Be,t._k=Ue,t._b=Ie,t._v=yt,t._e=gt,t._u=He,t._g=Fe,t._d=Ne,t._p=qe}function We(t,e,r,o,a){var s,u=this,c=a.options;A(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var f=i(c._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Se(c.inject,o),this.slots=function(){return u.$slots||De(t.scopedSlots,u.$slots=Oe(r,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return De(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=De(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=rn(s,t,e,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,l)}}function Ke(t,e,r,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var f in c)u[f]=Kt(f,c,e||n);else o(r.attrs)&&Je(u,r.attrs),o(r.props)&&Je(u,r.props);var l=new We(r,u,a,i,t),p=s.render.call(null,l._c,l);if(p instanceof dt)return Le(p,r,l.parent,s,l);if(Array.isArray(p)){for(var h=me(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=Le(h[v],r,l.parent,s,l);return d}}function Le(t,e,n,r,o){var i=mt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Je(t,e){for(var n in e)t[S(n)]=e[n]}Qe(We.prototype);var Ge={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ge.prepatch(n,n)}else{var r=t.componentInstance=Ye(t,Sn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Cn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Bn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Qn(n):xn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pn(e,!0):e.$destroy())}},ze=Object.keys(Ge);function Xe(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=dn(f,c),void 0===t))return hn(f,e,n,a,s);e=e||{},pr(t),o(e.model)&&tn(t.options,e);var l=ve(e,t,s);if(i(t.options.functional))return Ke(t,l,e,n,a);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Ze(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:a},f);return v}}}function Ye(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<ze.length;n++){var r=ze[n],o=e[r],i=Ge[r];o===i||o&&o._merged||(e[r]=o?$e(i,o):i)}}function $e(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var en=1,nn=2;function rn(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=nn),on(t,e,n,r,o)}function on(t,e,n,r,i){if(o(n)&&o(n.__ob__))return gt();if(o(n)&&o(n.is)&&(e=n.is),!e)return gt();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===nn?r=me(r):i===en&&(r=ye(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||N.getTagNamespace(e),a=N.isReservedTag(e)?new dt(N.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Wt(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Xe(u,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&an(a,s),o(n)&&sn(n),a):gt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];o(u.tag)&&(r(u.ns)||i(n)&&"svg"!==u.tag)&&an(u,e,n)}}function sn(t){u(t.style)&&fe(t.style),u(t.class)&&fe(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Oe(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return rn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return rn(t,e,n,r,o,!0)};var i=r&&r.data;xt(t,"$attrs",i&&i.attrs||n,null,!0),xt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,fn=null;function ln(t){Qe(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=De(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{fn=e,t=r.call(e._renderProxy,e.$createElement)}catch(eo){Xt(eo,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=gt()),t.parent=o,t}}function pn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function hn(t,e,n,r,o){var i=gt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function dn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=fn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,f=null;n.$on("hook:destroyed",function(){return m(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},p=V(function(n){t.resolved=pn(n,e),s?a.length=0:l(!0)}),d=V(function(e){o(t.errorComp)&&(t.error=!0,l(!0))}),v=t(p,d);return u(v)&&(h(v)?r(t.resolved)&&v.then(p,d):h(v.component)&&(v.component.then(p,d),o(v.error)&&(t.errorComp=pn(v.error,e)),o(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&_n(t,e)}function mn(t,e){cn.$on(t,e)}function bn(t,e){cn.$off(t,e)}function An(t,e){var n=cn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function _n(t,e,n){cn=t,de(e,n||{},mn,bn,An,t),cn=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?P(n):n;for(var r=P(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Yt(n[i],e,r,e,o)}return e}}var Sn=null;function On(t){var e=Sn;return Sn=t,function(){Sn=e}}function kn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Dn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=On(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Bn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Bn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Cn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Ot(!1);for(var f=t._props,l=t.$options._propKeys||[],p=0;p<l.length;p++){var h=l[p],d=t.$options.props;f[h]=Kt(h,d,e,t)}Ot(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,_n(t,r,v),c&&(t.$slots=Oe(i,o.context),t.$forceUpdate())}function En(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function xn(t,e){if(e){if(t._directInactive=!1,En(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)xn(t.$children[n]);Bn(t,"activated")}}function Pn(t,e){if((!e||(t._directInactive=!0,!En(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);Bn(t,"deactivated")}}function Bn(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Yt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var jn=[],Un=[],In={},Tn=!1,Mn=!1,Rn=0;function Vn(){Rn=jn.length=Un.length=0,In={},Tn=Mn=!1}var Fn=Date.now;if(z&&!$){var Hn=window.performance;Hn&&"function"===typeof Hn.now&&Fn()>document.createEvent("Event").timeStamp&&(Fn=function(){return Hn.now()})}function Nn(){var t,e;for(Fn(),Mn=!0,jn.sort(function(t,e){return t.id-e.id}),Rn=0;Rn<jn.length;Rn++)t=jn[Rn],t.before&&t.before(),e=t.id,In[e]=null,t.run();var n=Un.slice(),r=jn.slice();Vn(),Wn(n),qn(r),it&&N.devtools&&it.emit("flush")}function qn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Bn(r,"updated")}}function Qn(t){t._inactive=!1,Un.push(t)}function Wn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,xn(t[e],!0)}function Kn(t){var e=t.id;if(null==In[e]){if(In[e]=!0,Mn){var n=jn.length-1;while(n>Rn&&jn[n].id>t.id)n--;jn.splice(n+1,0,t)}else jn.push(t);Tn||(Tn=!0,ue(Nn))}}var Ln=0,Jn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ln,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=L(e),this.getter||(this.getter=U)),this.value=this.lazy?void 0:this.get()};Jn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(eo){if(!this.user)throw eo;Xt(eo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),ht(),this.cleanupDeps()}return t},Jn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Jn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Jn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Kn(this)},Jn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(eo){Xt(eo,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Jn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Jn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Jn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Gn={enumerable:!0,configurable:!0,get:U,set:U};function zn(t,e,n){Gn.get=function(){return this[e][n]},Gn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Gn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Yn(t,e.props),e.methods&&ir(t,e.methods),e.data?Zn(t):Et(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Yn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||Ot(!1);var a=function(i){o.push(i);var a=Kt(i,e,n,t);xt(r,i,a),i in t||zn(t,"_props",i)};for(var s in e)a(s);Ot(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?$n(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&A(r,i)||Q(i)||zn(t,"_data",i)}Et(e,!0)}function $n(t,e){pt();try{return t.call(e,e)}catch(eo){return Xt(eo,e,"data()"),{}}finally{ht()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Jn(t,a||U,U,tr)),o in t||nr(t,o,i)}}function nr(t,e,n){var r=!ot();"function"===typeof n?(Gn.get=r?rr(e):or(n),Gn.set=U):(Gn.get=n.get?r&&!1!==n.cache?rr(e):or(n.get):U,Gn.set=n.set||U),Object.defineProperty(t,e,Gn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.SharedObject.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ir(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?U:x(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)sr(t,n,r[o]);else sr(t,n,r)}}function sr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Pt,t.prototype.$delete=Bt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return sr(r,t,e,n);n=n||{},n.user=!0;var o=new Jn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Xt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var cr=0;function fr(t){t.prototype._init=function(t){var e=this;e._uid=cr++,e._isVue=!0,t&&t._isComponent?lr(e,t):e.$options=Qt(pr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,kn(e),yn(e),un(e),Bn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Xn(e),"mp-toutiao"!==e.mpHost&&_e(e),"mp-toutiao"!==e.mpHost&&Bn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function lr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pr(t){var e=t.options;if(t.super){var n=pr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=hr(t);o&&B(t.extendOptions,o),e=t.options=Qt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function gr(t){t.mixin=function(t){return this.options=Qt(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Qt(n.options,t),a["super"]=n,a.options.props&&mr(a),a.options.computed&&br(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,F.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=B({},a.options),o[r]=a,a}}function mr(t){var e=t.options.props;for(var n in e)zn(t.prototype,"_props",n)}function br(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function Ar(t){F.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function _r(t){return t&&(t.Ctor.options.name||t.tag)}function wr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Sr(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=_r(a.componentOptions);s&&!e(s)&&Or(n,i,r,o)}}}function Or(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,m(n,e)}fr(dr),ur(dr),wn(dr),Dn(dr),ln(dr);var kr=[String,RegExp,Array],Dr={name:"keep-alive",abstract:!0,props:{include:kr,exclude:kr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Or(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Sr(t,function(t){return wr(e,t)})}),this.$watch("exclude",function(e){Sr(t,function(t){return!wr(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var r=_r(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!wr(i,r))||a&&r&&wr(a,r))return e;var s=this,u=s.cache,c=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[f]?(e.componentInstance=u[f].componentInstance,m(c,f),c.push(f)):(u[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&Or(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Cr={KeepAlive:Dr};function Er(t){var e={get:function(){return N}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:B,mergeOptions:Qt,defineReactive:xt},t.set=Pt,t.delete=Bt,t.nextTick=ue,t.observable=function(t){return Et(t),t},t.options=Object.create(null),F.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,B(t.options.components,Cr),vr(t),gr(t),yr(t),Ar(t)}Er(dr),Object.defineProperty(dr.prototype,"$isServer",{get:ot}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:We}),dr.version="2.6.10";var xr="[object Array]",Pr="[object Object]";function Br(t,e){var n={};return jr(t,e),Ur(t,e,"",n),n}function jr(t,e){if(t!==e){var n=Tr(t),r=Tr(e);if(n==Pr&&r==Pr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:jr(i,e[o])}}else n==xr&&r==xr&&t.length>=e.length&&e.forEach(function(e,n){jr(t[n],e)})}}function Ur(t,e,n,r){if(t!==e){var o=Tr(t),i=Tr(e);if(o==Pr)if(i!=Pr||Object.keys(t).length<Object.keys(e).length)Ir(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Tr(i),u=Tr(a);if(s!=xr&&s!=Pr)i!=e[o]&&Ir(r,(""==n?"":n+".")+o,i);else if(s==xr)u!=xr?Ir(r,(""==n?"":n+".")+o,i):i.length<a.length?Ir(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Ur(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Pr)if(u!=Pr||Object.keys(i).length<Object.keys(a).length)Ir(r,(""==n?"":n+".")+o,i);else for(var c in i)Ur(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==xr?i!=xr?Ir(r,n,t):t.length<e.length?Ir(r,n,t):t.forEach(function(t,o){Ur(t,e[o],n+"["+o+"]",r)}):Ir(r,n,t)}}function Ir(t,e,n){t[e]=n}function Tr(t){return Object.prototype.toString.call(t)}function Mr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Rr(t){return jn.find(function(e){return t._watcher===e})}function Vr(t,e){if(!t.__next_tick_pending&&!Rr(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(eo){Xt(eo,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Fr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Hr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Fr(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Br(o,i);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Mr(n)})):Mr(this)}};function Nr(){}function qr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Nr),t.$options.render||(t.$options.render=Nr),"mp-toutiao"!==t.mpHost&&Bn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Jn(t,r,U,{before:function(){t._isMounted&&!t._isDestroyed&&Bn(t,"beforeUpdate")}},!0),n=!1,t}function Qr(t,e){return o(t)||o(e)?Wr(t,Kr(e)):""}function Wr(t,e){return t?e?t+" "+e:t:e||""}function Kr(t){return Array.isArray(t)?Lr(t):u(t)?Jr(t):"string"===typeof t?t:""}function Lr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Kr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Jr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Gr=_(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function zr(t){return Array.isArray(t)?j(t):"string"===typeof t?Gr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Yr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:P(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Vr(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=_e,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Yt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yr(e||this,t)},t.prototype.__get_class=function(t,e){return Qr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=zr(t),r=e?B(e,n):n;return Object.keys(r).map(function(t){return D(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(u(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var $r=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function to(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==$r.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;$r.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=$r}dr.prototype.__patch__=Hr,dr.prototype.$mount=function(t,e){return qr(this,t,e)},to(dr),Zr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Oe,e.createPage=Se,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return h(t)||p(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function m(t){return"[object Object]"===d.call(t)}function b(t,e){return v.call(t,e)}function A(){}function _(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,S=_(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),O=["invoke","success","fail","complete","returnValue"],k={},D={};function C(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?E(n):n}function E(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function x(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function P(t,e){Object.keys(e).forEach(function(n){-1!==O.indexOf(n)&&g(e[n])&&(t[n]=C(t[n],e[n]))})}function B(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==O.indexOf(n)&&g(e[n])&&x(t[n],e[n])})}function j(t,e){"string"===typeof t&&m(e)?P(D[t]||(D[t]={}),e):m(t)&&P(k,t)}function U(t,e){"string"===typeof t?m(e)?B(D[t],e):delete D[t]:m(t)&&B(k,t)}function I(t){return function(e){return t(e)||e}}function T(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function M(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(I(o));else{var i=o(e);if(T(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){M(t[n],e).then(function(t){return g(r)&&r(t)||t})}}}),e}function V(t,e){var n=[];Array.isArray(k.returnValue)&&n.push.apply(n,f(k.returnValue));var r=D[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function F(t){var e=Object.create(null);Object.keys(k).forEach(function(t){"returnValue"!==t&&(e[t]=k[t].slice())});var n=D[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function H(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=F(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=M(a.invoke,n);return s.then(function(t){return e.apply(void 0,[R(a,t)].concat(o))})}return e.apply(void 0,[R(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var N={returnValue:function(t){return T(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},q=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,Q=/^create|Manager$/,W=/^on/;function K(t){return Q.test(t)}function L(t){return q.test(t)}function J(t){return W.test(t)&&"onPush"!==t}function G(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function z(t){return!(K(t)||L(t)||J(t))}function X(t,e){return z(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return g(n.success)||g(n.fail)||g(n.complete)?V(t,H.apply(void 0,[t,e,n].concat(o))):V(t,G(new Promise(function(r,i){H.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Y=1e-4,Z=750,$=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,$="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Y),0===n?1!==et&&$?.5:1:t<0?-n:n}var ot={promiseInterceptor:N},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:j,removeInterceptor:U}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(pt(t,r,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m(e)){var i=!0===o?e:{};for(var a in g(n)&&(n=n(e,i)||{}),e)if(b(n,a)){var s=n[a];g(s)&&(s=s(e[a],e,i)),s?y(s)?i[s]=e[a]:m(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?i[a]=ft(t,e[a],r):o||(i[a]=e[a]);return i}return g(e)&&(e=ft(t,e,r)),e}function pt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(at.returnValue)&&(e=at.returnValue(t,e)),lt(t,e,n,{},r)}function ht(t,e){if(b(at,t)){var n=at[t];return n?function(e,r){var o=n;g(n)&&(o=n(e)),e=lt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return L(t)?pt(t,a,o.returnValue,K(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(o),g(r)&&r(o)}}vt.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function mt(t,e,n){return t[e].apply(t,n)}function bt(){return mt(yt(),"$on",Array.prototype.slice.call(arguments))}function At(){return mt(yt(),"$off",Array.prototype.slice.call(arguments))}function _t(){return mt(yt(),"$once",Array.prototype.slice.call(arguments))}function wt(){return mt(yt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:bt,$off:At,$once:_t,$emit:wt});function Ot(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function kt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;Ot("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function Dt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&kt(e),e}var Ct=Object.freeze({getSubNVueById:Dt,requireNativePlugin:Ot}),Et=Page,xt=Component,Pt=/:/g,Bt=_(function(t){return S(t.replace(Pt,"-"))});function jt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[Bt(n)].concat(o))}}}function Ut(t,e){var n=e[t];e[t]=n?function(){jt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){jt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ut("onLoad",t),Et(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ut("created",t),xt(t)};var It=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Tt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){b(n,e)&&(t[e]=n[e])})}function Mt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Mt(t,e)}):void 0}function Rt(t,e,n){e.forEach(function(e){Mt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Vt(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Ft(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ht(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Nt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return m(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||b(n,t)||(n[t]=r[t])}),n}var qt=[String,Number,Boolean,Object,Array,null];function Qt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Wt(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),m(r)&&r.props&&a.push(e({properties:Lt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){m(t)&&t.props&&a.push(e({properties:Lt(t.props,!0)}))}),a}function Kt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Lt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Qt(t)}}):m(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(m(r)){var o=r["default"];g(o)&&(o=o()),r.type=Kt(e,r.type),n[e]={type:-1!==qt.indexOf(r.type)?r.type:null,value:o,observer:Qt(e)}}else{var i=Kt(e,r);n[e]={type:-1!==qt.indexOf(i)?i:null,observer:Qt(e)}}}),n}function Jt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=A,t.preventDefault=A,t.target=t.target||{},b(t,"detail")||(t.detail={}),m(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Gt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):m(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function zt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Gt(t,e)}),r}function Xt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Yt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=zt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Xt(t)):"string"===typeof t&&b(s,t)?u.push(s[t]):u.push(t)}),u}var Zt="~",$t="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Jt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===$t;r=s?r.slice(1):r;var u=r.charAt(0)===Zt;r=u?r.slice(1):r,a&&te(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var a=o[r];if(!g(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}i.push(a.apply(o,Yt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Tt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=t.$options.globalData||{},Rt(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function le(t){return re(t,{mocks:oe,initRefs:ce})}var pe=["onUniNViewMessage"];function he(t){var e=le(t);return Rt(e,pe),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=Vt(r.default,t),s=i(a,2),u=s[0],c=s[1],f={multipleSlots:!0,addGlobalClass:!0},l={options:f,data:Nt(c,r.default.prototype),behaviors:Wt(c,ae),properties:Lt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ht(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Ft(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){l.methods[t]=function(e){return this.$vm[t](e)}}),n?l:[l,u]}function ge(t){return ve(t,{isPage:se,initRelation:ue})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var me=["onShow","onHide","onUnload"];function be(t,e){e.isPage,e.initRelation;var n=ye(t);return Rt(n.methods,me,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function Ae(t){return be(t,{isPage:se,initRelation:ue})}me.push.apply(me,It);var _e=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(t){var e=Ae(t);return Rt(e.methods,_e),e}function Se(t){return Component(we(t))}function Oe(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var ke={};Object.keys(it).forEach(function(t){ke[t]=it[t]}),Object.keys(St).forEach(function(t){ke[t]=St[t]}),Object.keys(Ct).forEach(function(t){ke[t]=X(t,Ct[t])}),Object.keys(wx).forEach(function(t){(b(wx,t)||b(at,t))&&(ke[t]=X(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=ke,t.UniEmitter=St),wx.createApp=de,wx.createPage=Se,wx.createComponent=Oe;var De=ke,Ce=De;e.default=Ce}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-24120191114002",_inBundle:!1,_integrity:"sha512-j68RqeewGyFPfdlzADBoxklEb+0FbzxgQG9/bg12RRX7ISDMEFP9FmNKkpL0CFOrqO1//GHiB5+oxbWhLFMjFw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24120191114002.tgz",_shasum:"20467f84fc1c5a1d349dd4124f92b678d83dc0b8",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"8084e20c55d3df84c36375e5401113a217b62128",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-24120191114002"}},"84e5":function(t,e){t.exports="data:image/png;base64,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"},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var l=e.version,p="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,g=10,y="__DC_STAT_UUID",m="__DC_UUID_VALUE";function b(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=m}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,m)}}return e}var A=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},_=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},O=function(){var e="";return"wx"!==S()&&"qq"!==S()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},k=function(){return"n"===S()?plus.runtime.version:""},D=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},C=function(e){var n=S(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},E="First__Visit__Time",x="Last__Visit__Time",P=function(){var e=t.getStorageSync(E),n=0;return e?n=e:(n=w(),t.setStorageSync(E,n),t.removeStorageSync(x)),n},B=function(){var e=t.getStorageSync(x),n=0;return n=e||"",t.setStorageSync(x,w()),n},j="__page__residence__time",U=0,I=0,T=function(){return U=w(),"n"===S()&&t.setStorageSync(j,w()),U},M=function(){return I=w(),"n"===S()&&(U=t.getStorageSync(j)),I-U},R="Total__Visit__Count",V=function(){var e=t.getStorageSync(R),n=1;return e&&(n=e,n++),t.setStorageSync(R,n),n},F=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},H=0,N=0,q=function(){var t=(new Date).getTime();return H=t,N=0,t},Q=function(){var t=(new Date).getTime();return N=t,t},W=function(t){var e=0;if(0!==H&&(e=N-H),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},K=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===S()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},L=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===S()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},J=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},G=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},z=n("52c1").default,X=n("0ba2").default||n("0ba2"),Y=t.getSystemInfoSync(),Z=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:b(),ut:S(),mpn:O(),ak:X.appid,usv:l,v:k(),ch:D(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return f(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){Q();var t=W("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,Q();var n=W();q();var r=L(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=L(this),e=K();if(this._navigationBarTitle.config=z&&z.pages[e]&&z.pages[e].titleNView&&z.pages[e].titleNView.titleText||z&&z.pages[e]&&z.pages[e].navigationBarTitleText||"",this.__licationShow)return q(),this.__licationShow=!1,void(this._lastPageRoute=t);Q(),this._lastPageRoute=t;var n=W("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}q()}},{key:"_pageHide",value:function(){if(!this.__licationHide){Q();var t=W("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=C(t.scene),this.statData.fvts=P(),this.statData.lvts=B(),this.statData.tvc=V(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;X.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=w(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===S()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",a),!(M()<g)||n){var s=this._reportingRequestData;"n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")),T();var u=[],c=[],f=[],p=function(t){var e=s[t];e.forEach(function(e){var n=_(e);0===t?u.push(n):3===t?f.push(n):c.push(n)})};for(var h in s)p(h);u.push.apply(u,c.concat(f));var d={usv:l,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=A(F(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){G(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),$=function(e){function n(){var e;return u(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),f(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),f(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,T(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,J(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,J(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=$.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"97b3":function(t,e,n){},b03a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.apiTest=o,e.needToken=i;var r=n("e986");function o(t,e){return(0,r.lAxios)("test","POST",t,e)}function i(t,e){return(0,r.lAxios)("needToken","POST",t,e)}},c06b:function(t,e,n){"use strict";(function(t){function n(){t.showLoading({title:"加载中...",mask:!0})}function r(){t.hideLoading()}function o(e,n){t.showToast({title:e,icon:n})}Object.defineProperty(e,"__esModule",{value:!0}),e.showLoading=n,e.hideLoading=r,e.showToast=o}).call(this,n("6e42")["default"])},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},e979:function(t,e){t.exports="data:image/png;base64,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"},e986:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.post=a,e.get=s,e.lAxios=u;var r=i(n("52a0")),o=n("c06b");function i(t){return t&&t.__esModule?t:{default:t}}function a(e,n,i){(0,o.showLoading)();var a=t.getStorageSync("token");if(a=a||!0,!a)return!1;a="Bearer "+a,"function"==typeof n&&(i=n),t.request({url:e.includes("http")?e:r.default+e,data:"object"==typeof n?n:{},method:"POST",header:{Authorization:a},success:function(t){i&&i(t.data),(0,o.hideLoading)()},fail:function(){(0,o.hideLoading)()}})}function s(e,n,i){(0,o.showLoading)();var a=t.getStorageSync("token");if(a=!0,!a)return!1;a="Bearer "+a,"function"==typeof n&&(i=n),t.request({url:e.includes("http")?e:r.default+e,data:"object"==typeof n?n:{},method:"GET",header:{Authorization:a},success:function(t){i&&i(t.data),(0,o.hideLoading)()},fail:function(){(0,o.hideLoading)()}})}function u(e,n,i,a){(0,o.showLoading)();var s=t.getStorageSync("token");s&&(s="Bearer "+s);var u=new Promise(function(u,c){t.request({url:e.includes("http")?e:r.default+e,data:i||{},method:n,header:{Authorization:s},success:function(n){if("login"==e)try{t.setStorageSync("token",n.data.token)}catch(r){}a&&a(n.data),(0,o.hideLoading)(),u(n.data)},fail:function(){(0,o.hideLoading)()}})});return u}}).call(this,n("6e42")["default"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/uni-tag/uni-tag';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-tag/uni-tag.js';

define('components/uni-tag/uni-tag.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-tag/uni-tag"], {
  "04a6": function a6(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      name: "uni-tag",
      props: {
        type: {
          type: String,
          default: "default"
        },
        size: {
          type: String,
          default: "normal"
        },
        text: String,
        disabled: {
          type: [String, Boolean],
          defalut: !1
        },
        inverted: {
          type: [String, Boolean],
          defalut: !1
        },
        circle: {
          type: [String, Boolean],
          defalut: !1
        }
      },
      methods: {
        onClick: function onClick() {
          !0 !== this.disabled && "true" !== this.disabled && this.$emit("click");
        }
      }
    };
    e.default = a;
  },
  "5c5e": function c5e(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("04a6"),
        u = n.n(a);

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    e["default"] = u.a;
  },
  "7d37": function d37(t, e, n) {
    "use strict";

    var a = n("a2b4"),
        u = n.n(a);
    u.a;
  },
  a2b4: function a2b4(t, e, n) {},
  d5db: function d5db(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("e409"),
        u = n("5c5e");

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    n("7d37");
    var r = n("2877"),
        l = Object(r["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = l.exports;
  },
  e409: function e409(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-tag/uni-tag-create-component', {
  'components/uni-tag/uni-tag-create-component': function componentsUniTagUniTagCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d5db"));
  }
}, [['components/uni-tag/uni-tag-create-component']]]);
});
require('components/uni-tag/uni-tag.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"617b":function(e,n,t){"use strict";t.r(n);var o=t("fea2"),i=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=i.a},6788:function(e,n,t){"use strict";t.r(n);var o=t("fb9f"),i=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=i.a},"8fc3":function(e,n,t){},"948b":function(e,n,t){},9945:function(e,n,t){"use strict";t.r(n);var o=t("ed15"),i=t("6788");for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);t("9b76");var u=t("2877"),c=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},"9b76":function(e,n,t){"use strict";var o=t("948b"),i=t.n(o);i.a},acea:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return i})},b6e6:function(e,n,t){"use strict";var o=t("8fc3"),i=t.n(o);i.a},ed15:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return i})},edd2:function(e,n,t){"use strict";t.r(n);var o=t("acea"),i=t("617b");for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);t("b6e6");var u=t("2877"),c=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},f8c8:function(e,n,t){"use strict";(function(e){t("97b3"),t("921b");o(t("66fd"));var n=o(t("9945"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},fb9f:function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t("3b68"),a=t("c06b"),u=t("e986"),c=d(t("edd2")),s=t("b03a"),r=t("2f62"),l=t("1644");function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){g(e,n,t[n])})}return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var p=function(){return t.e("components/uni-tag/uni-tag").then(t.bind(null,"d5db"))},v=t("081c"),x=g({data:function(){return{webPay:"<h1>121212</h1>",loading_is:!1,requestText:"发动请求",data:[{name:"wutongyue",age:"26",img:t("e979")},{name:"msy",age:"26",img:t("84e5")}],renderImage:!0,productList:[{title:"测试标题",image:t("84e5"),originalPrice:"666",favourPrice:"888",tip:"火爆促销"},{title:"测试标题",image:t("84e5"),originalPrice:"666",favourPrice:"888",tip:"实惠"},{title:"测试标题",image:t("84e5"),originalPrice:"666",favourPrice:"888",tip:"最低价"}],list:[{title:"标题",img:t("84e5"),content:"你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界"},{title:"标题",img:t("84e5"),content:"你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界"},{title:"标题",img:t("84e5"),content:"你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界"}]}},components:{uniTag:p,wxpay:c.default},onPageScroll:function(){console.log(e(123," at pages\\index\\index.vue:138"))},onLoad:function(){(0,u.post)("http://localhost:7777/yes-c/public/api/killClass",function(n){console.log(e(n," at pages\\index\\index.vue:143"))}),(0,s.apiTest)().then(function(n){console.log(e(n," at pages\\index\\index.vue:179"))})},onReady:function(){this.doMutations("测试mutations")},onPullDownRefresh:function(){console.log(e("refresh"," at pages\\index\\index.vue:189")),setTimeout(function(){o.stopPullDownRefresh()},1500)},onReachBottom:function(){setTimeout(function(n){o.hideLoading(),console.log(e("触底结束"," at pages\\index\\index.vue:199"))},1500),this.showLoading(),console.log(e("触底事件"," at pages\\index\\index.vue:202"))},methods:f({getOpenId:function(){o.login({provider:"weixin",success:function(n){(0,l.loginWx)({code:n.code}).then(function(n){console.log(e(n," at pages\\index\\index.vue:214"))})}})},showToast:function(e){0==e?o.showToast({title:"你好，世界",icon:"success"}):this.showLoading()},showLoading:function(){o.showLoading({title:"加载中...",mask:!0,duration:1600})},goOtherPage:function(n){console.log(e("页面跳转"," at pages\\index\\index.vue:238")),(0,i.navigateTo)("/pages/otherPage/otherPage","props",n)},bindClickPrimary:function(){o.setStorage({key:"name",data:"梧桐叶",success:function(){console.log(e("本地缓存success"," at pages\\index\\index.vue:250"))}})},bindClickError:function(){o.chooseLocation({success:function(n){console.log(e("位置名称："+n.name," at pages\\index\\index.vue:259")),console.log(e("详细地址："+n.address," at pages\\index\\index.vue:260")),console.log(e("纬度："+n.latitude," at pages\\index\\index.vue:261")),console.log(e("经度："+n.longitude," at pages\\index\\index.vue:262"))}})},bindClickGray:function(){o.getStorage({key:"name",success:function(n){console.log(e("本地获取缓存成功，数据为："+n.data," at pages\\index\\index.vue:271"))}})},bindClickWarning:function(){var n=this;this.requestText="发动请求中...",(0,a.showLoading)();var t=this;o.request({url:"https://coral3.com/yes/public/api/test",data:{text:"uni.request"},header:{Authorization:"Bearer "},success:function(t){console.log(e(t.data," at pages\\index\\index.vue:289")),n.requestText="发动请求",(0,a.hideLoading)(),(0,a.showToast)("发动成功","success")},fail:function(){this?this.requestText="发动请求":t.requestText="发动请求",(0,a.showToast)("发动失败","none"),(0,a.hideLoading)()}})},bindClickUtilRequest:function(){(0,u.post)("test",{name:"wutongyue"},function(n){console.log(e(n," at pages\\index\\index.vue:310"))})},bindClickApi:function(){(0,a.showLoading)(),(0,s.apiTest)({name:"请"}).then(function(n){console.log(e(n," at pages\\index\\index.vue:320"))})}},(0,r.mapMutations)(["doCommit","doMutations"]),{getUserInfo:function(n){console.log(e(n," at pages\\index\\index.vue:326"))},bindClickIf:function(){console.log(e("only in android-app show"," at pages\\index\\index.vue:337"))},navigateToNvue:function(){v.navigateTo({url:"../nvueTest/nvueTest?name=wutongyue333"})}})},"onReady",function(){});n.default=x}).call(this,t("0de9")["default"],t("6e42")["default"])},fea2:function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t("5848"),a=function(){return t.e("components/uni-tag/uni-tag").then(t.bind(null,"d5db"))},u={data:function(){return{data:"13"}},methods:{unipay:function(n){e.getProvider({service:"payment",success:function(t){console.log(o(t," at components\\wxpay\\wxpay.vue:24")),e.requestPayment({provider:t.provider[0],orderInfo:(new Date).valueOf()+"",timeStamp:n.timeStamp,nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.paySign,success:function(e){this.data=JSON.stringify(e)}})}})},wxpay:function(){var e=this;console.log(o(getApp().globalData.token," at components\\wxpay\\wxpay.vue:43"));var n=getApp().globalData;(0,i.wxpay)({openid:n.token,uname:"wutongyue",title:"测试标题",price:1,code:n.code}).then(function(n){e.data=JSON.stringify(n),console.log(o(e.data," at components\\wxpay\\wxpay.vue:55")),e.unipay(n)})}},components:{uniTag:a}};n.default=u}).call(this,t("6e42")["default"],t("0de9")["default"])}},[["f8c8","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/home.js';

define('pages/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"322f":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n("e986"),o={data:function(){return{}},methods:{},onLoad:function(){(0,u.post)("test",{username:"yue",password:"123"},function(t){console.log(e(t," at pages\\home\\home.vue:21"))})}};t.default=o}).call(this,n("0de9")["default"])},3772:function(e,t,n){"use strict";n.r(t);var u=n("df13"),o=n("c1b1");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);var f=n("2877"),r=Object(f["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports},c1b1:function(e,t,n){"use strict";n.r(t);var u=n("322f"),o=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);t["default"]=o.a},df13:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return o})},edf7:function(e,t,n){"use strict";(function(e){n("97b3"),n("921b");u(n("66fd"));var t=u(n("3772"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["edf7","common/runtime","common/vendor"]]]);
});
require('pages/home/home.js');
__wxRoute = 'components/banner/banner';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/banner/banner.js';

define('components/banner/banner.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/banner/banner"],{"0f68":function(t,n,a){"use strict";var e=a("9e07"),o=a.n(e);o.a},"2dbe":function(t,n,a){"use strict";a.r(n);var e=a("9766"),o=a.n(e);for(var u in e)"default"!==u&&function(t){a.d(n,t,function(){return e[t]})}(u);n["default"]=o.a},9766:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,circular:!0}},methods:{changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value}}};n.default=e},"9e07":function(t,n,a){},aaf0:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},o=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return o})},ba43:function(t,n,a){"use strict";a.r(n);var e=a("aaf0"),o=a("2dbe");for(var u in o)"default"!==u&&function(t){a.d(n,t,function(){return o[t]})}(u);a("0f68");var r=a("2877"),i=Object(r["a"])(o["default"],e["a"],e["b"],!1,null,null,null);n["default"]=i.exports},c76a:function(t,n,a){"use strict";(function(t){a("97b3"),a("921b");e(a("66fd"));var n=e(a("ba43"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])}},[["c76a","common/runtime","common/vendor"]]]);
});
require('components/banner/banner.js');
__wxRoute = 'pages/requestTest/requestTest';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/requestTest/requestTest.js';

define('pages/requestTest/requestTest.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/requestTest/requestTest"],{"0e35":function(e,t,n){"use strict";n.r(t);var u=n("512d"),a=n("2a6a");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var o=n("2877"),c=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},2205:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n("e986"),a={data:function(){return{}},methods:{},onReady:function(){(0,u.post)("t",function(t){console.log(e(t," at pages\\requestTest\\requestTest.vue:20"))})}};t.default=a}).call(this,n("0de9")["default"])},"2a6a":function(e,t,n){"use strict";n.r(t);var u=n("2205"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a},"512d":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})},"7e33":function(e,t,n){"use strict";(function(e){n("97b3"),n("921b");u(n("66fd"));var t=u(n("0e35"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["7e33","common/runtime","common/vendor"]]]);
});
require('pages/requestTest/requestTest.js');
__wxRoute = 'pages/componentShow/componentShow';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/componentShow/componentShow.js';

define('pages/componentShow/componentShow.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/componentShow/componentShow"],{"0f68":function(t,n,e){"use strict";var u=e("9e07"),a=e.n(u);a.a},"2dbe":function(t,n,e){"use strict";e.r(n);var u=e("9766"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a},"3d0c":function(t,n,e){"use strict";(function(t){e("97b3"),e("921b");u(e("66fd"));var n=u(e("45d4"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},4404:function(t,n,e){"use strict";e.r(n);var u=e("5977"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a},"45d4":function(t,n,e){"use strict";e.r(n);var u=e("d75e"),a=e("4404");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);var o=e("2877"),i=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=i.exports},5977:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=a(e("ba43"));function a(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{}},methods:{},components:{banner:u.default}};n.default=r},9766:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,circular:!0}},methods:{changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value}}};n.default=u},"9e07":function(t,n,e){},aaf0:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},ba43:function(t,n,e){"use strict";e.r(n);var u=e("aaf0"),a=e("2dbe");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("0f68");var o=e("2877"),i=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=i.exports},d75e:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})}},[["3d0c","common/runtime","common/vendor"]]]);
});
require('pages/componentShow/componentShow.js');
__wxRoute = 'pages/person/person';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/person/person.js';

define('pages/person/person.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/person/person"],{"669e":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return r})},7830:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{data:"个人中心"}},methods:{}};e.default=u},9591:function(t,e,n){"use strict";n.r(e);var u=n("669e"),r=n("ec69");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);var c=n("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports},c4fd:function(t,e,n){"use strict";(function(t){n("97b3"),n("921b");u(n("66fd"));var e=u(n("9591"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ec69:function(t,e,n){"use strict";n.r(e);var u=n("7830"),r=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=r.a}},[["c4fd","common/runtime","common/vendor"]]]);
});
require('pages/person/person.js');
__wxRoute = 'pages/shoppingCart/shoppingCart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shoppingCart/shoppingCart.js';

define('pages/shoppingCart/shoppingCart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shoppingCart/shoppingCart"],{"064a":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},1648:function(t,n,e){"use strict";e.r(n);var u=e("064a"),a=e("fc01");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);var o=e("2877"),c=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=c.exports},"291a":function(t,n,e){"use strict";(function(t){e("97b3"),e("921b");u(e("66fd"));var n=u(e("1648"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"505e":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{data:"购物车页面"}},methods:{}};n.default=u},fc01:function(t,n,e){"use strict";e.r(n);var u=e("505e"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a}},[["291a","common/runtime","common/vendor"]]]);
});
require('pages/shoppingCart/shoppingCart.js');
__wxRoute = 'pages/photo/photo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/photo/photo.js';

define('pages/photo/photo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/photo/photo"],{"3f2c":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},"4af8":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{data:"相册页面"}},methods:{}};n.default=u},"708d":function(t,n,e){"use strict";e.r(n);var u=e("4af8"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a},7943:function(t,n,e){"use strict";(function(t){e("97b3"),e("921b");u(e("66fd"));var n=u(e("91fd"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"91fd":function(t,n,e){"use strict";e.r(n);var u=e("3f2c"),a=e("708d");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);var o=e("2877"),f=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=f.exports}},[["7943","common/runtime","common/vendor"]]]);
});
require('pages/photo/photo.js');
__wxRoute = 'pages/otherPage/otherPage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/otherPage/otherPage.js';

define('pages/otherPage/otherPage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/otherPage/otherPage"],{"171f":function(e,t,n){"use strict";(function(e){n("97b3"),n("921b");a(n("66fd"));var t=a(n("cce5"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"3fad":function(e,t,n){"use strict";n.r(t);var a=n("571c"),u=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=u.a},"571c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{data:"你好，这是一个新页面"}},onLoad:function(t){console.log(e("从index页面跳转过来的"+t.props," at pages\\otherPage\\otherPage.vue:16"))},methods:{}};t.default=n}).call(this,n("0de9")["default"])},cce5:function(e,t,n){"use strict";n.r(t);var a=n("e3e1"),u=n("3fad");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);var r=n("2877"),c=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},e3e1:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})}},[["171f","common/runtime","common/vendor"]]]);
});
require('pages/otherPage/otherPage.js');
__wxRoute = 'components/wxpay/wxpay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/wxpay/wxpay.js';

define('components/wxpay/wxpay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wxpay/wxpay"],{"617b":function(n,e,t){"use strict";t.r(e);var a=t("fea2"),o=t.n(a);for(var u in a)"default"!==u&&function(n){t.d(e,n,function(){return a[n]})}(u);e["default"]=o.a},6422:function(n,e,t){"use strict";(function(n){t("97b3"),t("921b");a(t("66fd"));var e=a(t("edd2"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"8fc3":function(n,e,t){},acea:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return o})},b6e6:function(n,e,t){"use strict";var a=t("8fc3"),o=t.n(a);o.a},edd2:function(n,e,t){"use strict";t.r(e);var a=t("acea"),o=t("617b");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("b6e6");var c=t("2877"),i=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},fea2:function(n,e,t){"use strict";(function(n,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("5848"),u=function(){return t.e("components/uni-tag/uni-tag").then(t.bind(null,"d5db"))},c={data:function(){return{data:"13"}},methods:{unipay:function(e){n.getProvider({service:"payment",success:function(t){console.log(a(t," at components\\wxpay\\wxpay.vue:24")),n.requestPayment({provider:t.provider[0],orderInfo:(new Date).valueOf()+"",timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign,success:function(n){this.data=JSON.stringify(n)}})}})},wxpay:function(){var n=this;console.log(a(getApp().globalData.token," at components\\wxpay\\wxpay.vue:43"));var e=getApp().globalData;(0,o.wxpay)({openid:e.token,uname:"wutongyue",title:"测试标题",price:1,code:e.code}).then(function(e){n.data=JSON.stringify(e),console.log(a(n.data," at components\\wxpay\\wxpay.vue:55")),n.unipay(e)})}},components:{uniTag:u}};e.default=c}).call(this,t("6e42")["default"],t("0de9")["default"])}},[["6422","common/runtime","common/vendor"]]]);
});
require('components/wxpay/wxpay.js');
__wxRoute = 'pages/androidTest/androidTest';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/androidTest/androidTest.js';

define('pages/androidTest/androidTest.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/androidTest/androidTest.js');
__wxRoute = 'pages/nvueTest/nvueTest';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/nvueTest/nvueTest.js';

define('pages/nvueTest/nvueTest.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/nvueTest/nvueTest.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);


if(!lt.util.load.provided_QMARK_('lt.plugins.describe-key')) {
goog.provide('lt.plugins.describe_key');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.objs.context');
goog.require('clojure.string');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.context');
goog.require('lt.objs.command');
goog.require('lt.objs.app');
goog.require('clojure.string');
goog.require('lt.objs.keyboard');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.command');
goog.require('lt.objs.keyboard');
lt.plugins.describe_key.old_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Make a copy of the current keymap.
*/
lt.plugins.describe_key.save_current_key_map = (function save_current_key_map(){return cljs.core.reset_BANG_.call(null,lt.plugins.describe_key.old_key_map,cljs.core.deref.call(null,lt.objs.keyboard.key_map));
});
lt.plugins.describe_key.restore_keymap = (function restore_keymap(){return cljs.core.reset_BANG_.call(null,lt.objs.keyboard.key_map,cljs.core.deref.call(null,lt.plugins.describe_key.old_key_map));
});
lt.plugins.describe_key.print_key_command = (function print_key_command(keyseq,command_and_args){var c_AMPERSAND_a = cljs.core.first.call(null,command_and_args);var vec__8254 = (((c_AMPERSAND_a instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_AMPERSAND_a,null], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,c_AMPERSAND_a),cljs.core.rest.call(null,c_AMPERSAND_a)], null));var command = cljs.core.nth.call(null,vec__8254,0,null);var args = cljs.core.nth.call(null,vec__8254,1,null);var stored_cmd = lt.objs.command.by_id.call(null,command);return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Describe key",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),keyseq], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),[cljs.core.str("Command: "),cljs.core.str(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(stored_cmd))].join('')], null),((cljs.core.seq.call(null,args))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),clojure.string.join.call(null," ",cljs.core.cons.call(null,"Arguments:",cljs.core.map.call(null,cljs.core.pr_str,args)))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",1013904347),new cljs.core.Keyword(null,"desc","desc",1016984067).cljs$core$IFn$_invoke$arity$1(stored_cmd)], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Ok",new cljs.core.Keyword(null,"action","action",3885920680),new cljs.core.Keyword(null,"cancel","cancel",3941147116)], null)], null)], null));
});
/**
* Take all current key sequences and wrap them into a printing function
*/
lt.plugins.describe_key.intercept_keymap = (function intercept_keymap(){return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7466__auto__ = (function iter__8263(s__8264){return (new cljs.core.LazySeq(null,(function (){var s__8264__$1 = s__8264;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8264__$1);if(temp__4092__auto__)
{var s__8264__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8264__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8264__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8266 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8265 = 0;while(true){
if((i__8265 < size__7465__auto__))
{var vec__8269 = cljs.core._nth.call(null,c__7464__auto__,i__8265);var k = cljs.core.nth.call(null,vec__8269,0,null);var v = cljs.core.nth.call(null,vec__8269,1,null);cljs.core.chunk_append.call(null,b__8266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),k),new cljs.core.Keyword("lt.plugins.describe-key","print-key-command","lt.plugins.describe-key/print-key-command",1194889220))], null)], null));
{
var G__8271 = (i__8265 + 1);
i__8265 = G__8271;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8266),iter__8263.call(null,cljs.core.chunk_rest.call(null,s__8264__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8266),null);
}
} else
{var vec__8270 = cljs.core.first.call(null,s__8264__$2);var k = cljs.core.nth.call(null,vec__8270,0,null);var v = cljs.core.nth.call(null,vec__8270,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),k),new cljs.core.Keyword("lt.plugins.describe-key","print-key-command","lt.plugins.describe-key/print-key-command",1194889220))], null)], null),iter__8263.call(null,cljs.core.rest.call(null,s__8264__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,cljs.core.deref.call(null,lt.objs.keyboard.key_map));
})()),new cljs.core.PersistentArrayMap(null, 1, ["ctrl-g",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.describe-key","restore-keymap","lt.plugins.describe-key/restore-keymap",3134429185)], null)], null));
});
/**
* Create a temporary keymap to give the user info about the function associated with keys pressed.
* <ctrl-g> will restore the initial keymap.
*/
lt.plugins.describe_key.describe_key = (function describe_key(){lt.plugins.describe_key.save_current_key_map.call(null);
return cljs.core.reset_BANG_.call(null,lt.objs.keyboard.key_map,lt.plugins.describe_key.intercept_keymap.call(null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.describe-key","restore-keymap","lt.plugins.describe-key/restore-keymap",3134429185),new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"desc","desc",1016984067),"Restore the initial keymap",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.describe_key.restore_keymap.call(null);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.describe-key","print-key-command","lt.plugins.describe-key/print-key-command",1194889220),new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"desc","desc",1016984067),"Show the user the command information.",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (k,v){return lt.plugins.describe_key.print_key_command.call(null,k,v);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.describe-key","describe-key","lt.plugins.describe-key/describe-key",4304523940),new cljs.core.Keyword(null,"desc","desc",1016984067),"Describe the command associated with a key sequence.",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.describe_key.describe_key.call(null);
})], null));
}

//# sourceMappingURL=describe key_compiled.js.map
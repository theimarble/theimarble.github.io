
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_CS_Site_Header}","click",function(sym,e){window.open("../../../cs.html","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){window.open("../../../cs.html","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text}","click",function(sym,e){window.open("../../../cs.html","_top");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",19000,function(sym,e){sym.play(5000);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-5038703");
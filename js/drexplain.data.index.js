DR_EXPLAIN.namespace( 'DR_EXPLAIN.data_index' );
DR_EXPLAIN.data_index = {

	// index
	DREX_NODE_KEYWORDS: [1,3,2,3,4,3,1,2,4],
	DREX_NODE_KEYWORDS_START: [0,0,0,0,0,2,4,6,7,8,9], //length:= drex.nodes_count,
	DREX_NODE_KEYWORDS_END: [0,0,0,0,2,4,6,7,8,9,9], //length:= drex.nodes_count,

	DREX_KEYWORD_NAMES: ["<NOVA PALAVRA-CHAVE>"," Crédito/Débito","PIX","CNPJ","Origem da venda"],
	DREX_KEYWORD_CHILD_START: [1,5,5,5,5],
	DREX_KEYWORD_CHILD_END: [5,5,5,5,5]
	
};
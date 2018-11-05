/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

/**
 * 状态数据库对象
 * menuExpand: boolean 左侧目录是否展开
 */
const state = {
    menuExpand: true
};

/**
 * 状态数据库设值方法
 * @returns {{
 * menuList: ((p1:*)=>Array) 目录数据设值函数
 * }}
 */
const getters = {
    menuExpand: state => state.menuExpand
};

/**
 * setMenuList: (({commit}:{commit: *})) 获取目录数据方法
 */
const actions = {
	setMenuList({commit}, {expandState}) {
    	commit('mutationMenuState', {expandState});
	}
};

const mutations = {
    mutationMenuState(state, {expandState}) {

		/* 扭转数据状态 */
		state.menuExpand = expandState;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
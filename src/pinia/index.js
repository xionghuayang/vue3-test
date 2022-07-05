import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
	state: () => {
		return {
			id: 1,
			count: 12
		};
	},
	actions: {
		addCount() {
			this.count++;
		},
		calcCount() {
			this.count--;
		}
	}
});

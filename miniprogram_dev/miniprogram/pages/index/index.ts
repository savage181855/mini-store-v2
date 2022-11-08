import { foo, bar, test } from "../../libs/index";

import { useAppStore } from "../../store";

Page({
  stores: [
    // {
    //   storeKey: 'appStore',
    //   useStoreRef: useAppStore,
    // },
    {
      storeKey: "appStore",
      useStoreRef: useAppStore,
      mapState: ["navBarHeight", "shopList", "shopIndex", "openid"],
      watch: {
        shopIndex(oldValue: any, value: any) {},
      },
    },
    {
      storeKey: "indexStore",
      useStoreRef: useAppStore,
    },
  ],
  data: {},
  onLoad() {
    // console.debug(this)
    // console.debug(this.route);
  },
});

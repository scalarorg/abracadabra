import { mapGetters } from "vuex";

export default {
    data() {
        return {
            STAKE: true,
            UNSTAKE: false,
            actions: { STAKE: true, UNSTAKE: false },
            amount: "",
            amountError: "",
            lockedUntil: false,
            updateInterval: null,
            emptyTokens: {
                stakeToken: {},
                mainToken: { contractInstance: { users: () => false } },
            }
        };
    },
    computed: {
        ...mapGetters({
            account: "getAccount",
            networks: "getAvailableNetworks"
        }),
    },
    methods: {
        getImgUrl(type) {
            var images = require.context(
              "../../assets/images/tokens-icon/",
              false,
              /\.svg$/
            );
            return images("./" + type + ".svg");
        },
        toggleAction() {

                this.amount = "";
                this.amountError = "";
      
            if (this.actions.STAKE) {
               this.actions.UNSTAKE = true;
               this.actions.STAKE = false;
               return;
            }
      
            if (this.actions.UNSTAKE) {
               this.actions.STAKE = true;
               this.actions.UNSTAKE = false;
               return;
            }

        },
    },
}
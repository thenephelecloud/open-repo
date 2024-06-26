<script>
import { formatUnstakePeriod } from 'pages/staking/staking-utils';

import StakingFormInput from 'pages/staking/StakingFormInput';

const genericMaxWei = '999999999999000000000000000000';

export default {
    name: 'BaseStakingForm',
    components: {
        StakingFormInput,
    },
    props: {
        header: {
            type: String,
            required: true,
        },
        subheader: {
            type: String,
            required: true,
        },
        topInputLabel: {
            type: String,
            required: true,
        },
        topInputInfoText: {
            type: String,
            required: true,
        },
        topInputAmount: {
            type: String,
            required: true,
        },
        topInputMaxValue: {
            type: String,
            default: null,
        },
        topInputErrorText: {
            type: String,
            required: true,
        },
        topInputIsLoading: {
            type: Boolean,
            required: true,
        },
        topInputTooltip: {
            type: String,
            required: true,
        },
        bottomInputLabel: {
            type: String,
            required: true,
        },
        bottomInputAmount: {
            type: String,
            required: true,
        },
        bottomInputMaxValue: {
            type: String,
            default: null,
        },
        bottomInputIsLoading: {
            type: Boolean,
            required: true,
        },
        ctaText: {
            type: String,
            required: true,
        },
        ctaDisabled: {
            type: Boolean,
            required: true,
        },
        ctaLoading: {
            type: Boolean,
            required: true,
        },
        unstakePeriodSeconds: {
            type: Number,
            default: null,
        },
        valueOfOneStlosInTlos: {
            type: String,
            default: null,
        },
    },
    emits: [
        'input-top',
        'input-bottom',
        'cta-clicked',
    ],
    data: () => ({
        unstakePeriod: '',
        stlosContract: null,
    }),
    computed: {
        unstakePeriodPretty() {
            return formatUnstakePeriod(this.unstakePeriodSeconds, this.$t);
        },
        inputs() {
            return [{
                label:       this.topInputLabel,
                infoText:    this.topInputInfoText,
                errorText:   this.topInputErrorText,
                tooltip:     this.topInputTooltip,
                maxValue:    this.topInputMaxValue || genericMaxWei,
                isLoading:   this.topInputIsLoading,
            }, {
                label:       this.bottomInputLabel,
                errorText:   '',
                maxValue:    this.bottomInputMaxValue || null,
                isLoading:   this.bottomInputIsLoading,
            }];
        },
    },
    methods: {
        handleInput(event, index) {
            const eventName = 'input-'.concat(index === 0 ? 'top' : 'bottom');

            this.$emit(eventName, event);
        },
        handleCtaClick() {
            this.$emit('cta-clicked');
        },
    },
};
</script>

<template>
<div class="c-base-staking-form container-fluid">
    <div class="row">
        <div class="col-sm-12 col-md-6 offset-md-3">
            <div class="row q-mb-md">
                <div class="col">
                    <h5 class="c-base-staking-form__header">
                        {{ header }}
                    </h5>
                    <p>{{ subheader }}</p>
                </div>
            </div>
            <div class="row">
                <div v-if="valueOfOneStlosInTlos !== null" class="col-12 q-mb-sm u-flex--right">
                    <q-badge outline color="secondary" :label="`1 NEP = ${valueOfOneStlosInTlos} sTLOS`" />
                </div>
                <div class="col-12">
                    <StakingFormInput
                        :model-value="topInputAmount"
                        v-bind="inputs[0]"
                        @update:modelValue="handleInput($event, 0)"
                    />
                </div>

                <div class="col-12 u-flex--center">
                    <div class="c-base-staking-form__decorative-chevron"></div>
                </div>

                <div class="col-12 q-mb-md">
                    <StakingFormInput
                        :model-value="bottomInputAmount"
                        v-bind="inputs[1]"
                        @update:modelValue="handleInput($event, 1)"
                    />
                </div>

                <div class="col-xs-12 col-sm-8 u-flex--center-y">
                    <p class="c-base-staking-form__footer-p">
                        {{ $t('pages.staking.note_unstaking_period', { period: unstakePeriodPretty }) }}
                    </p>
                </div>

                <div class="col-xs-12 col-sm-4 u-flex--right">
                    <q-btn
                        :disabled="ctaDisabled"
                        :loading="ctaLoading"
                        color="secondary"
                        text-color="black"
                        @click="handleCtaClick"
                    >
                        {{ ctaText }}
                    </q-btn>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.c-base-staking-form {
    &__header {
        margin: 0 0 8px;
    }

    &__decorative-chevron {
        height: 56px;
        position: relative;

        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;

            height: 48px;
            width: 4px;
            border-radius: 4px 4px 0 0;

            background-color: $grey-0;

            @at-root .body--light & {
                background-color: $purpleDark;
            }
        }

        &::before {
            left: -21px;
            transform: rotate(-55deg);
        }

        &::after {
            right: -20px;
            transform: rotate(55deg);
        }
    }

    &__footer-p {
        font-size: 12px;
        margin: 0 0 16px;

        color: $grey-0;

        @at-root .body--light & {
            color: $purpleDark;
        }

        @media screen and (min-width: $breakpoint-sm) {
            margin: 0;
        }
    }
}
</style>

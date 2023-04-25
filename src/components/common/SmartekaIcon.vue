<template>
    <i :class="className" :data-name="name">
        <svg v-html="iconTemplate.content"
             v-bind="iconTemplate.attributes"
        ></svg>
    </i>
</template>

<script lang="ts">
export default {
    name: 'Icon',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        iconTemplate() {
            try {
                let icon = require(`@/assets/svg/${this.name}.svg`);
                if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
                    icon = icon.default;
                }
                return icon;
            } catch (e) {
                console.error(`Icon "${this.name}" not found`);
                return null;
            }
        },
        className() {
            return 'icon icon--' + this.name;
        }
    }
};
</script>

<style lang="scss">
.icon {
    display: inline-block;

    &__xs {
        width: em(12);
        height: em(12);
    }

    &__sm {
        width: em(16);
    }

    &__md {
        width: em(20);
    }

    &__mmd {
        width: em(40);
    }

    &__lg {
        width: em(64);
    }

    &__xlg {
        width: em(95);
    }

    &__xl {
        width: em(110);
    }

    &__auto {
        & > * {
            width: auto;
            height: auto;
        }
    }

    &--tooltip {
        // transform: translate3d(0,0,1px);
    }

    &__btn {
        width: em(16);
        height: em(16);
        vertical-align: middle;
        margin-left: em(5);
    }
}

// @include mobile() {
//     .icon {
//         &__xl {
//             width: em(260);
//         }
//     }
// }


</style>

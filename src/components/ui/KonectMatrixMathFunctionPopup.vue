<template>
    <SketchComponentModal
        title="Matrix math function"
        :beforeClose="beforeClose"
    >
        <template v-slot:modal-body>
            <v-select
                label="Function name"
                :items="functionNames"
                v-model="name"
            >
            </v-select>
        </template>
    </SketchComponentModal>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';
import { SketchComponentModal  } from 'konect-api-vue'

import { availableMathFunction, MatrixMathFunction } from '../utils/utils';

import KonectMatrixMathFunction from '../component/KonectMatrixMathFunction';

export default defineComponent({
    components: {
        SketchComponentModal
    },
    data() {
        return {
            name: this.component.functionName,
        }
    },
    props: {
        component: {
            required: true,
            type: Object as PropType<KonectMatrixMathFunction>
        }
    },

    methods: {
        beforeClose() {
            this.component.setFunctionName(this.name);
        }
    },
    computed: {
        functionNames() : Array<MatrixMathFunction>{
            return availableMathFunction;
        }
    }
});

</script>
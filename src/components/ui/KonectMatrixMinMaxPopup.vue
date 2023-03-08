<template>
    <SketchComponentModal
        title="Min/Max matrix"
        :beforeClose="beforeClose"
    >
        <template v-slot:modal-body>
            <v-select
                label="Min or Max"
                :items="items"
                v-model="functionName"
            ></v-select>
        </template>
    </SketchComponentModal>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';
import { SketchComponentModal  } from 'konect-api-vue'

import KonectMatrixMinMax from '../component/KonectMatrixMinMax';

export default defineComponent({
    components: {
        SketchComponentModal
    },
    data() {
        return {
            functionName: this.component.functionName,
            items: [
                'min',
                'max'
            ]
        }
    },
    props: {
        component: {
            required: true,
            type: Object as PropType<KonectMatrixMinMax>
        }
    },

    methods: {
        beforeClose() {
            this.component.setFunctionName(this.functionName);
        }
    },
});

</script>
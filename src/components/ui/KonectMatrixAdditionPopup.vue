<template>
    <SketchComponentModal
        title="Matrix addition"
        :max-width="1200"
    >
        <template v-slot:modal-body>
            <div class="d-flex justify-content-around" v-if="component.aWrapper.isDataAvailable() && component.bWrapper.isDataAvailable()">
                <div class="w-45">
                    <h6 class="text-center">Matrix #1</h6>
                    <KonectMatrix :matrix="aMatrix" />
                </div>
                <div class="w-45">
                    <h6 class="text-center">Matrix #2</h6>
                    <KonectMatrix :matrix="bMatrix" />
                </div>
            </div>
            <div v-else>
                <v-alert
                    type="error"
                    title="No data available"
                    text="None matrix available to computed addition"
                >
                </v-alert>  
            </div>
        </template>
    </SketchComponentModal>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import { SketchComponentModal  } from 'konect-api-vue';
import KonectMatrix from './util/KonectMatrix.vue';

import { Matrix } from 'ml-matrix';

import KonectMatrixAddition from '../component/KonectMatrixAddition';

export default defineComponent({
    props: {
        component: {
            required: true,
            type: KonectMatrixAddition
        }
    },
    components: {
        SketchComponentModal,
        KonectMatrix
    },

    computed: {
        aMatrix() : Matrix {
            return this.component.aWrapper.getData() as Matrix;
        },

        bMatrix() : Matrix {
            return this.component.bWrapper.getData() as Matrix;
        }
    }
});

</script>

<style>

.w-45 {
    width: 45%;
}

</style>
<template>
    <SketchComponentModal
        title="Center matrix"
    >
        <template v-slot:modal-body>
            <div class="d-flex justify-content-center" v-if="component.matrixWrapper.isDataAvailable()">
                    <KonectMatrix :matrix="matrix" />
            </div>
            <div v-else>
                <v-alert
                    type="error"
                    title="No data available"
                    text="None matrix available to computed the center matrix"
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

import KonectMatrixCenter from '../component/KonectMatrixCenter';

export default defineComponent({
    props: {
        component: {
            required: true,
            type: KonectMatrixCenter
        }
    },
    components: {
        SketchComponentModal,
        KonectMatrix
    },

    computed: {
        matrix() : Matrix {
            return this.component.matrixWrapper.getData() as Matrix;
        }
    }
});

</script>

<style>

.w-45 {
    width: 45%;
}

</style>
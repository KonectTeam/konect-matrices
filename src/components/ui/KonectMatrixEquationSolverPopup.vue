<template>
    <SketchComponentModal
        title="Equation solver"
        :max-width="1000"
    >
        <template v-slot:modal-body>
            <div class="d-flex justify-content-center" v-if="component.matrixWrapper.isDataAvailable()">
                    <KonectMatrix :matrix="matrix" />
            </div>
            <div v-else>
                <v-alert
                    type="error"
                    title="No data available"
                    text="None matrix available to solve equations."
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

import KonectMatrixEquationSolver from '../component/KonectMatrixEquationSolver';

export default defineComponent({
    props: {
        component: {
            required: true,
            type: KonectMatrixEquationSolver
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
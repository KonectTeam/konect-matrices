<template>
    <SketchComponentModal
        title="Matrix addition"
    >
        <template v-slot:modal-body>
            <div class="d-flex">
                <div class="w-50" v-if="component.aWrapper.isDataAvailable()">
                    <KonectMatrix :matrix="aMatrix" />
                </div>
                <div class="w-50">
                    <KonectMatrix :matrix="bMatrix" />
                </div>
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
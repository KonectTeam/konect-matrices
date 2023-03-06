<template>
    <SketchComponentModal
        title="Matrix loader"
        :beforeClose="beforeClose"
    >
        <template v-slot:modal-body>
            <div class="ml-6">
                <p>You can write you matrix in the input below. You need to a one row per line, and separate each value by a space.</p>
                <v-textarea label="Matrix" v-model="rawMatrix"></v-textarea>
            </div>
        </template>
    </SketchComponentModal>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';
import { SketchComponentModal  } from 'konect-api-vue'

import KonectMatrixLoader from '../component/KonectMatrixLoader';


export default defineComponent({
    components: {
        SketchComponentModal
    },
    data() {
        return {
            rawMatrix: this.component.rawMatrix
        }
    },
    props: {
        component: {
            required: true,
            type: Object as PropType<KonectMatrixLoader>
        }
    },

    methods: {
        beforeClose() {
            this.component.setRawMatrix(this.rawMatrix);
        }
    },
});

</script>
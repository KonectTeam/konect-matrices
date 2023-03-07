<template>
    <SketchComponentModal
        title="Identity matrix"
        :before-close="beforeClose"
    >

    <template v-slot:modal-body>
        <v-text-field v-model="dimensions" type="number" label="Matrix dimensions"></v-text-field>
    </template>


    </SketchComponentModal>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import { SketchComponentModal  } from 'konect-api-vue';

import KonectMatrixIdentity from '../component/KonectMatrixIdentity';

export default defineComponent({
    props: {
        component: {
            required: true,
            type: KonectMatrixIdentity
        }
    },
    data() {
        return {
            dimensions: this.component.dimensions.toString()
        }
    },
    components: {
        SketchComponentModal
    },

    methods: {
        beforeClose() {
            this.component.setDimensions(parseFloat(this.dimensions));
        }
    }
});

</script>
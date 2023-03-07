<template>
    <v-table class="border">
        <tbody>
            <tr
                v-for="(row, index) in matrix2D"
                    :key="index"
                >
                <td v-for="(col, colIndex) in row" :key="colIndex">
                    {{ col }}
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script lang="ts">

import { Matrix } from 'ml-matrix';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        matrix: {
            required: true,
            type: Matrix
        }
    },
    computed: {
        matrix2D(): Array<Array<number>> {
            return this.matrix.to2DArray();
        }
    }
})

</script>
<template>
    <v-table>
        <tbody>
            <tr
                v-for="row in matrix.rows"
                :key="row"
                >
            >
                <td v-for="col in matrix.columns" :key="col">
                    {{  matrix.get(row, col) }}
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
})

</script>
import { Matrix } from 'ml-matrix';

import KonectMatrixLoader from '../../components/component/KonectMatrixLoader';

describe('Test the factory of the component KonectMatrixLoader', () => {
    it('Check the execution of the component with a good string format', () => {
        const component = new KonectMatrixLoader();
        const matrix = new Matrix([
            [ 0, 1 ],
            [ 10, 20 ]
        ]);
    });
})
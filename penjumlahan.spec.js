import { expect } from 'chai'
import penjumlahan from './penjumlahan.js'

it('Cek penjumlahan', function () {
	const hasil = penjumlahan(1, 1)
	expect(hasil).to.equal(2)
})
import { expect } from 'chai'
import mainArray from './mainArray.js'

it('ngetest dengan index yang benar', function () {
	const hasil = mainArray(1)
	expect(hasil).to.equal('MANGGO')
})

it('ngetest dengan index yang salah', function () {
	const hasil = function () {
		mainArray(10)
	}

	expect(hasil).to.throw("Cannot read properties of undefined (reading 'toUpperCase')")
})
import { expect } from "chai";
import RumusTrapesium from "./RumusTrapesium.js";

let rumusTrapesium

describe('Unit Test untuk class RumusTrapesium', function () {

	beforeEach(function () {
		rumusTrapesium = new RumusTrapesium()
	})

	it('hitung luas trapesium dengan parameter yang valid', function () {
		const luas = rumusTrapesium.hitungLuas(20, 15, 10)

		expect(luas).to.equal(175)
	})

	it('hitung luas trapesium dengan angka lebih dari 1000', function () {
		const luas = rumusTrapesium.hitungLuas(2000, 1500, 1000)

		expect(luas).to.equal(1750000)
	})

})
const wordsRegexp = /(негр|пидр|нигрила|нига|нигер|пидарас|пидорас|пидор|ниггер|ниггрила|педик|нигга|негар|неггар|пидераст|majestic|grand|маджестик|гранд|redage|аризон|arizona|pidr|pidor|nigger|nigga|niger|pidaras|pidrila|pedik|pidoras|negr|majestik|arizon|радмир|radmir|даун|vrp|врп|вэрп|onix|onixrp|оникс|parvenu|parvenurp|парвеню|парвенюрп|{|}|<|>)/gi;

export function prepareValue(value: string) {
	return value.replace(wordsRegexp, (res) => (res ? '*'.repeat(res.length) : ''));
}

/*
 * SRP Group Parameters
 * http://tools.ietf.org/html/rfc5054#appendix-A
 *
 * The 1024-, 1536-, and 2048-bit groups are taken from software
 * developed by Tom Wu and Eugene Jhong for the Stanford SRP
 * distribution, and subsequently proven to be prime.  The larger primes
 * are taken from [MODP], but generators have been calculated that are
 * primitive roots of N, unlike the generators in [MODP].
 *
 * The 1024-bit and 1536-bit groups MUST be supported.
 */

const bigint = require('bigint');

module.exports = {

  1024: {
    /*
     *      EEAF0AB9 ADB38DD6 9C33F80A FA8FC5E8 60726187 75FF3C0B 9EA2314C
     *      9C256576 D674DF74 96EA81D3 383B4813 D692C6E0 E0D5D8E2 50B98BE4
     *      8E495C1D 6089DAD1 5DC7D7B4 6154D6B6 CE8EF4AD 69B15D49 82559B29
     *      7BCF1885 C529F566 660E57EC 68EDBC3C 05726CC0 2FD4CBF4 976EAA9A
     *      FD5138FE 8376435B 9FC61D2F C0EB06E3
     */
    N: bigint('167609434410335061345139523764350090260135525329813904557420930309800865859473551531551523800013916573891864789934747039010546328480848979516637673776605610374669426214776197828492691384519453218253702788022233205683635831626913357154941914129985489522629902540768368409482248290641036967659389658897350067939'),
    g: bigint(2)},

  1536: {
    /*
     *      9DEF3CAF B939277A B1F12A86 17A47BBB DBA51DF4 99AC4C80 BEEEA961
     *      4B19CC4D 5F4F5F55 6E27CBDE 51C6A94B E4607A29 1558903B A0D0F843
     *      80B655BB 9A22E8DC DF028A7C EC67F0D0 8134B1C8 B9798914 9B609E0B
     *      E3BAB63D 47548381 DBC5B1FC 764E3F4B 53DD9DA1 158BFD3E 2B9C8CF5
     *      6EDF0195 39349627 DB2FD53D 24B7C486 65772E43 7D6C7F8C E442734A
     *      F7CCB7AE 837C264A E3A9BEB8 7F8A2FE9 B8B5292E 5A021FFF 5E91479E
     *      8CE7A28C 2442C6F3 15180F93 499A234D CF76E3FE D135F9BB
     */
    N: bigint('1486998185923128292816507353619409521152457662596380074614818966810244974827752411420380336514078832314731499938313197533147998565301020797040787428051479639316928015998415709101293902971072960487527411068082311763171549170528008620813391411445907584912865222076100726050255271567749213905330659264908657221124284665444825474741087704974475795505492821585749417639344967192301749033325359286273431675492866492416941152646940908101472416714421046022696100064262587'),
    g: bigint(2)},

  2048: {
    /*
     *      AC6BDB41 324A9A9B F166DE5E 1389582F AF72B665 1987EE07 FC319294
     *      3DB56050 A37329CB B4A099ED 8193E075 7767A13D D52312AB 4B03310D
     *      CD7F48A9 DA04FD50 E8083969 EDB767B0 CF609517 9A163AB3 661A05FB
     *      D5FAAAE8 2918A996 2F0B93B8 55F97993 EC975EEA A80D740A DBF4FF74
     *      7359D041 D5C33EA7 1D281E44 6B14773B CA97B43A 23FB8016 76BD207A
     *      436C6481 F1D2B907 8717461A 5B9D32E6 88F87748 544523B5 24B0D57D
     *      5EA77A27 75D2ECFA 032CFBDB F52FB378 61602790 04E57AE6 AF874E73
     *      03CE5329 9CCC041C 7BC308D8 2A5698F3 A8D0C382 71AE35F8 E9DBFBB6
     *      94B5C803 D89F7AE4 35DE236D 525F5475 9B65E372 FCD68EF2 0FA7111F
     *      9E4AFF73
     */
    N: bigint('21766174458617435773191008891802753781907668374255538511144643224689886235383840957210909013086056401571399717235807266581649606472148410291413364152197364477180887395655483738115072677402235101762521901569820740293149529620419333266262073471054548368736039519702486226506248861060256971802984953561121442680157668000761429988222457090413873973970171927093992114751765168063614761119615476233422096442783117971236371647333871414335895773474667308967050807005509320424799678417036867928316761272274230314067548291133582479583061439577559347101961771406173684378522703483495337037655006751328447510550299250924469288819'),
    g: bigint(2)}
};

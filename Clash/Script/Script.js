/**
 * mihomo 覆写脚本 · egwj/Rules
 *
 * 用途：在 Clash Verge / Mihomo Party 等支持 Enhance Script 的客户端中，
 * 对任意机场订阅套用本仓库的基础设置、策略组、rule-providers 与 rules。
 *
 * 使用方式：把这个文件的 raw 地址填到客户端的「覆写脚本 / Script」里。
 * 注意：这是客户端订阅覆写脚本，不是 Surge 模块，也不是 rule-provider。
 */

const RULE_BASE = 'https://testingcf.jsdelivr.net/gh/egwj/Rules@master/Clash/RuleSet/';

const groupOptionsEnable = {
  '🎬 Streaming': true,
  '📺 CNTV': true,
  '🍏 Apple TV': true,
  '🍎 Apple': true,
  '🎵 Spotify': true,
  '🖥 YouTube': true,
  '🔍 Google': true,
  '🤖 AIGC': true,
  '🪙 Crypto': true,
  '💳 Credit': true,
  '📬 Telegram': true,
  '📧 Mail': true,
  '⏱️ Speedtest': true,
  '🏠 Gateway': true,
  '🚧 AdGuard': true,
};

function main(config) {
  if (!Array.isArray(config.proxies) || config.proxies.length === 0) {
    throw new Error('未找到任何代理节点，请先绑定含有效节点的订阅再启用本脚本');
  }

  applyGeneral(config);
  applyProxyGroups(config);
  applyRules(config);

  return config;
}

function applyGeneral(config) {
  config['mixed-port'] = 7892;
  config['allow-lan'] = true;
  config['bind-address'] = '*';
  config['mode'] = 'rule';
  config['log-level'] = 'info';
  config['ipv6'] = false;
  config['external-controller'] = '127.0.0.1:9090';
  config['unified-delay'] = true;
  config['tcp-concurrent'] = true;
  config['find-process-mode'] = 'strict';
  config['geodata-loader'] = 'standard';
  config['global-ua'] = 'clash.meta';
  config['keep-alive-interval'] = 30;
  config['geo-auto-update'] = true;
  config['geo-update-interval'] = 24;

  config['geox-url'] = {
    geoip: 'https://testingcf.jsdelivr.net/gh/Loyalsoldier/v2ray-rules-dat@release/geoip.dat',
    geosite: 'https://testingcf.jsdelivr.net/gh/Loyalsoldier/v2ray-rules-dat@release/geosite.dat',
    mmdb: 'https://testingcf.jsdelivr.net/gh/Loyalsoldier/geoip@release/Country.mmdb',
  };

  config.hosts = {
    '*.clash.dev': '127.0.0.1',
    localhost: '127.0.0.1',
  };

  config.profile = {
    'store-selected': true,
    'store-fake-ip': true,
  };

  config.sniffer = {
    enable: true,
    'override-destination': false,
    'force-dns-mapping': true,
    'parse-pure-ip': true,
    sniff: {
      HTTP: {
        ports: [80, '8080-8880'],
        'override-destination': true,
      },
      TLS: {
        ports: [443, 8443],
      },
      QUIC: {
        ports: [443, 8443],
      },
    },
    'skip-domain': ['+.push.apple.com', 'Mijia Cloud'],
    'skip-dst-address': [
      '2001:4860::/32',
      '2404:6800::/32',
      '2a00:1450::/32',
    ],
  };
}

function applyProxyGroups(config) {
  const proxyNames = config.proxies.map((proxy) => proxy.name);
  const groups = [
    group('🔰 Proxy', ['🇭🇰 Hong Kong', '🇨🇳 Taiwan', '🇸🇬 Singapore', '🇯🇵 Japan', '🇺🇸 America', '🇨🇦 Canada', '🇬🇧 United Kingdom', '🇩🇪 Germany', '🇫🇷 France', '🇮🇹 Italy', '🇪🇸 Spain', '🇵🇹 Portugal', '🇳🇬 Nigeria', '🇰🇷 Korea', '🇲🇴 Macau', '🇦🇺 Australia', '🇵🇭 Philippines', '🇲🇾 Malaysia', '🇹🇭 Thailand', '🇧🇷 Brazil', '🇦🇷 Argentina', '🇨🇱 Chile', '🇺🇳 Server', '🔘 DIRECT']),
    group('🎬 Streaming', ['🔘 DIRECT', '🔰 Proxy', '🇭🇰 Hong Kong', '🇨🇳 Taiwan', '🇸🇬 Singapore', '🇯🇵 Japan', '🇺🇸 America', '🇺🇳 Server']),
    group('📺 CNTV', ['🔘 DIRECT', '🔰 Proxy', '🇨🇳 Taiwan', '🇭🇰 Hong Kong']),
    group('🍏 Apple TV', ['🔘 DIRECT', '🔰 Proxy', '🇺🇸 America']),
    group('🍎 Apple', ['🔘 DIRECT', '🔰 Proxy', '🇺🇸 America', '🇯🇵 Japan']),
    group('🎵 Spotify', ['🔘 DIRECT', '🔰 Proxy', '🇵🇭 Philippines', '🇭🇰 Hong Kong']),
    group('🖥 YouTube', ['🔘 DIRECT', '🔰 Proxy', '🇺🇸 America', '🇲🇴 Macau']),
    group('🔍 Google', ['🔘 DIRECT', '🔰 Proxy', '🇺🇸 America']),
    group('🤖 AIGC', ['🔘 DIRECT', '🔰 Proxy', '🇺🇸 America', '🇸🇬 Singapore', '🇨🇳 Taiwan']),
    group('🪙 Crypto', ['🔘 DIRECT', '🔰 Proxy', '🇺🇸 America', '🇩🇪 Germany', '🇫🇷 France', '🇵🇭 Philippines', '🇳🇬 Nigeria', '🇲🇾 Malaysia']),
    group('💳 Credit', ['🔘 DIRECT', '🔰 Proxy', '🇺🇸 America']),
    group('📬 Telegram', ['🔘 DIRECT', '🔰 Proxy', '🇸🇬 Singapore']),
    group('📧 Mail', ['🔘 DIRECT', '🔰 Proxy']),
    group('⏱️ Speedtest', ['🇺🇳 Server']),
    group('🏠 Gateway', ['🔘 DIRECT', '🔰 Proxy']),
    group('🚧 AdGuard', ['🔘 DIRECT', '⛔️ REJECT', '📛 REJECT-DROP']),
    group('🔘 DIRECT', ['DIRECT'], true),
    group('⛔️ REJECT', ['REJECT'], true),
    group('📛 REJECT-DROP', ['REJECT-DROP'], true),
    pool('🇺🇳 Server', proxyNames),
    pool('🇭🇰 Hong Kong', match(proxyNames, /🇭🇰|HK|Hong Kong|香港/i)),
    pool('🇨🇳 Taiwan', match(proxyNames, /🇨🇳|🇹🇼|TW|Taiwan|台湾|台灣/i)),
    pool('🇸🇬 Singapore', match(proxyNames, /🇸🇬|SG|Singapore|新加坡/i)),
    pool('🇯🇵 Japan', match(proxyNames, /🇯🇵|JP|Japan|日本/i)),
    pool('🇺🇸 America', match(proxyNames, /🇺🇸|US|United States|America|美国|美國/i)),
    pool('🇨🇦 Canada', match(proxyNames, /🇨🇦|CA|Canada|加拿大/i)),
    pool('🇬🇧 United Kingdom', match(proxyNames, /🇬🇧|UK|United Kingdom|Britain|英国|英國/i)),
    pool('🇩🇪 Germany', match(proxyNames, /🇩🇪|DE|Germany|德国|德國/i)),
    pool('🇫🇷 France', match(proxyNames, /🇫🇷|FR|France|法国|法國/i)),
    pool('🇮🇹 Italy', match(proxyNames, /🇮🇹|IT|Italy|意大利/i)),
    pool('🇪🇸 Spain', match(proxyNames, /🇪🇸|ES|Spain|西班牙/i)),
    pool('🇵🇹 Portugal', match(proxyNames, /🇵🇹|PT|Portugal|葡萄牙/i)),
    pool('🇳🇬 Nigeria', match(proxyNames, /🇳🇬|NG|Nigeria|尼日利亚|尼日利亞/i)),
    pool('🇰🇷 Korea', match(proxyNames, /🇰🇷|KR|Korea|韩国|韓國/i)),
    pool('🇲🇴 Macau', match(proxyNames, /🇲🇴|MO|Macau|Macao|澳门|澳門/i)),
    pool('🇦🇺 Australia', match(proxyNames, /🇦🇺|AU|Australia|澳大利亚|澳洲/i)),
    pool('🇵🇭 Philippines', match(proxyNames, /🇵🇭|PH|Philippines|菲律宾|菲律賓/i)),
    pool('🇲🇾 Malaysia', match(proxyNames, /🇲🇾|MY|Malaysia|马来西亚|馬來西亞/i)),
    pool('🇹🇭 Thailand', match(proxyNames, /🇹🇭|TH|Thailand|泰国|泰國/i)),
    pool('🇧🇷 Brazil', match(proxyNames, /🇧🇷|BR|Brazil|巴西/i)),
    pool('🇦🇷 Argentina', match(proxyNames, /🇦🇷|AR|Argentina|阿根廷/i)),
    pool('🇨🇱 Chile', match(proxyNames, /🇨🇱|CL|Chile|智利/i)),
  ];

  const disabled = new Set(Object.keys(groupOptionsEnable).filter((name) => !groupOptionsEnable[name]));
  config['proxy-groups'] = groups
    .filter((g) => !disabled.has(g.name))
    .map((g) => Array.isArray(g.proxies) ? { ...g, proxies: g.proxies.filter((p) => !disabled.has(p)) } : g);
}

function applyRules(config) {
  const providers = {
    Bypass: provider('Bypass.yaml', 'classical'),
    Reroute: provider('Reroute.yaml', 'classical'),
    Private: externalProvider('https://testingcf.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt', 'domain', 'Private.yaml'),
    HTTPDNS: externalProvider('https://testingcf.jsdelivr.net/gh/VirgilClyne/GetSomeFries@main/ruleset/HTTPDNS.Block.yaml', 'classical', 'HTTPDNS.yaml'),
    Reject: externalProvider('https://testingcf.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt', 'domain', 'Reject.yaml'),
    Block: provider('Block.yaml', 'classical'),
    Streaming_TW: provider('Streaming_TW.yaml', 'classical'),
    Streaming_JP: provider('Streaming_JP.yaml', 'classical'),
    Streaming_US: provider('Streaming_US.yaml', 'classical'),
    Streaming_UK: provider('Streaming_UK.yaml', 'classical'),
    Streaming_KR: provider('Streaming_KR.yaml', 'classical'),
    Streaming_AU: provider('Streaming_AU.yaml', 'classical'),
    Streaming: provider('Streaming.yaml', 'classical'),
    CNTV: provider('CNTV.yaml', 'classical'),
    'Google AI Studio': provider('Gemini.yaml', 'classical', 'Google_AI_Studio.yaml'),
    AIGC: provider('GenAI.yaml', 'classical', 'AIGC.yaml'),
    Poe: provider('Poe.yaml', 'classical'),
    'iCloud Private Relay': provider('iCloud.PrivateRelay.yaml', 'classical', 'iCloud.PrivateRelay.yaml'),
    'Apple News': provider('Apple%20News.yaml', 'classical', 'Apple_News.yaml'),
    'Apple TV': provider('Apple%20TV.yaml', 'classical', 'Apple_TV.yaml'),
    'Apple CN': provider('Apple%20CN.yaml', 'classical', 'Apple_CN.yaml'),
    Apple: provider('Apple.yaml', 'classical'),
    Spotify: provider('Spotify.yaml', 'classical'),
    YouTube: provider('YouTube.yaml', 'classical'),
    Crypto: provider('Crypto.yaml', 'classical'),
    Google: provider('Google.yaml', 'classical'),
    Credit: provider('Credit.yaml', 'classical'),
    PayPal: provider('PayPal.yaml', 'classical'),
    Telegram: provider('Telegram.yaml', 'classical'),
    Spark: provider('Spark.yaml', 'classical'),
    Speedtest: externalProvider('https://testingcf.jsdelivr.net/gh/SukkaW/Surge@master/Source/domainset/speedtest.conf', 'domain', 'Speedtest.yaml'),
    Global: externalProvider('https://testingcf.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt', 'domain', 'Global.yaml'),
    China: externalProvider('https://testingcf.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt', 'domain', 'China.yaml'),
    CNASN: externalProvider('https://testingcf.jsdelivr.net/gh/VirgilClyne/GetSomeFries@main/ruleset/ASN.China.yaml', 'classical', 'CNASN.yaml'),
    CNCIDR: externalProvider('https://testingcf.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt', 'ipcidr', 'CNCIDR.yaml'),
    LAN: provider('lancidr.txt', 'ipcidr', 'LANCIDR.yaml'),
  };

  const rules = [
    'AND,((DST-PORT,22),(NETWORK,TCP)),🔘 DIRECT',
    'RULE-SET,Bypass,🔘 DIRECT',
    'RULE-SET,Reroute,🔰 Proxy',
    'RULE-SET,Private,🔘 DIRECT',
    'RULE-SET,HTTPDNS,🚧 AdGuard',
    'RULE-SET,Reject,🚧 AdGuard',
    'RULE-SET,Block,🚧 AdGuard',
    'RULE-SET,Streaming_TW,🇨🇳 Taiwan',
    'RULE-SET,Streaming_JP,🇯🇵 Japan',
    'RULE-SET,Streaming_US,🇺🇸 America',
    'RULE-SET,Streaming_UK,🇬🇧 United Kingdom',
    'RULE-SET,Streaming_KR,🇰🇷 Korea',
    'RULE-SET,Streaming_AU,🇦🇺 Australia',
    'RULE-SET,Streaming,🎬 Streaming',
    'RULE-SET,CNTV,📺 CNTV',
    'RULE-SET,Google AI Studio,🔍 Google',
    'RULE-SET,AIGC,🤖 AIGC',
    'RULE-SET,Poe,🤖 AIGC',
    'RULE-SET,iCloud Private Relay,🔰 Proxy',
    'RULE-SET,Apple News,🇺🇸 America',
    'RULE-SET,Apple TV,🍏 Apple TV',
    'RULE-SET,Apple CN,🔘 DIRECT',
    'RULE-SET,Apple,🍎 Apple',
    'RULE-SET,Spotify,🎵 Spotify',
    'RULE-SET,YouTube,🖥 YouTube',
    'RULE-SET,Crypto,🪙 Crypto',
    'RULE-SET,Google,🔍 Google',
    'RULE-SET,Credit,💳 Credit',
    'RULE-SET,PayPal,💳 Credit',
    'RULE-SET,Telegram,📬 Telegram',
    'RULE-SET,Spark,📧 Mail',
    'RULE-SET,Speedtest,⏱️ Speedtest',
    'RULE-SET,Reroute,🔰 Proxy',
    'RULE-SET,Global,🔰 Proxy',
    'RULE-SET,China,🔘 DIRECT',
    'RULE-SET,CNASN,🔘 DIRECT',
    'RULE-SET,CNCIDR,🔘 DIRECT',
    'RULE-SET,LAN,🔘 DIRECT',
    'GEOSITE,cn,🔘 DIRECT',
    'GEOIP,CN,🔘 DIRECT,no-resolve',
    'GEOSITE,geolocation-!cn,🔰 Proxy',
    'MATCH,🔰 Proxy',
  ];

  const disabled = new Set(Object.keys(groupOptionsEnable).filter((name) => !groupOptionsEnable[name]));
  const enabledRules = rules.filter((rule) => {
    const parts = rule.split(',');
    return !(parts[0] === 'RULE-SET' && disabled.has(parts[2]));
  });
  const usedProviders = new Set(
    enabledRules
      .map((rule) => rule.split(','))
      .filter((parts) => parts[0] === 'RULE-SET')
      .map((parts) => parts[1]),
  );

  config['rule-providers'] = Object.fromEntries(
    Object.entries(providers).filter(([name]) => usedProviders.has(name)),
  );
  config.rules = enabledRules;
}

function group(name, proxies, hidden = false) {
  return { name, type: 'select', proxies, hidden };
}

function pool(name, proxies) {
  return group(name, proxies.length > 0 ? proxies : ['COMPATIBLE']);
}

function match(names, regex) {
  return names.filter((name) => regex.test(name));
}

function provider(remoteFile, behavior, localFile = remoteFile) {
  return externalProvider(`${RULE_BASE}${remoteFile}`, behavior, localFile);
}

function externalProvider(url, behavior, localFile) {
  return {
    type: 'http',
    behavior,
    path: `./Provider/RuleSet/${localFile}`,
    url,
    interval: 86400,
  };
}

/**
 * 
 *    iEdon-Net PeerAPI Frontend     
 *          Configutation            
 * 
 */

import pkg from '../package.json'

export default {
    root: '/',
    package: `${pkg.name}/${pkg.version}`,
    apiPrefix: 'https://api.dn42.muska.zip/dn42/peerapi',
    pingIntervalMs: 180000,
    configFallback: {
        netAsn: '4242423745',
        netName: 'muska.dn42',
        netDesc: 'Muska Network - DN42 Network',
        footerText: 'Running in fallback mode',
        maintenanceText: ''
    },
    gravatarUrlPrefix: 'https://cravatar.cn/avatar/'
}

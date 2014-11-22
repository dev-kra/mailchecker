/**
 * Usage
 *
 * var MailChecker = require('mailchecker/platform/node')
 * MailChecker(String email);
 * @return {Boolean} true is the specified email is valid, false otherwise
 */

var lists            = ["0-mail.com","0815.ru","0clickemail.com","10minutemail.com","20minutemail.com","2prong.com","30minutemail.com","3d-painting.com","4warding.com","4warding.net","4warding.org","60minutemail.com","amilegit.com","anonbox.net","anonymbox.com","antispam.de","beefmilk.com","binkmail.com","bio-muesli.net","bobmail.info","bofthew.com","brefmail.com","bsnow.net","bugmenot.com","bumpymail.com","cosmorph.com","courrieltemporaire.com","cubiclink.com","curryworld.de","cust.in","dacoolest.com","dandikmail.com","dayrep.com","deadaddress.com","despam.it","devnullmail.com","discardmail.com","discardmail.de","disposemail.com","dispostable.com","dodgeit.com","dodgit.com","dodgit.org","donemail.ru","dontreg.com","dontsendmespam.de","dump-email.info","dumpyemail.com","e4ward.com","email60.com","emailigo.de","emailinfive.com","emailmiser.com","emailsensei.com","emailtemporario.com.br","emailwarden.com","emailx.at.hm","fakeinbox.com","fakeinformation.com","fastacura.com","filzmail.com","fizmail.com","fr33mail.info","get1mail.com","get2mail.fr","getonemail.com","getonemail.net","gishpuppy.com","great-host.in","guerillamail.com","guerrillamail.com","guerrillamailblock.com","h.mintemail.com","haltospam.com","hochsitze.com","hotpop.com","hulapla.de","ieatspam.eu","ieatspam.info","imails.info","incognitomail.com","incognitomail.net","incognitomail.org","insorg-mail.info","ipoo.org","jetable.com","jetable.net","jetable.org","jnxjn.com","junk1e.com","keepmymail.com","kir.ch.tc","klzlk.com","kulturbetrieb.info","lhsdv.com","litedrop.com","lol.ovpn.to","lookugly.com","lopl.co.cc","m4ilweb.info","mail-temporaire.fr","mail.by","mail4trash.com","mailcatch.com","maileater.com","mailexpire.com","mailin8r.com","mailinator.com","mailinator.net","mailinator2.com","mailme.ir","mailme.lv","mailmetrash.com","mailnator.com","mailnesia.com","mailnull.com","mailslite.com","mailzilla.org","mbx.cc","meltmail.com","messagebeamer.de","mierdamail.com","mintemail.com","moburl.com","monemail.fr.nf","msa.minsmail.com","mt2009.com","mypartyclip.de","myphantomemail.com","mytrashmail.com","nepwk.com","no-spam.ws","nobulk.com","noclickemail.com","nogmailspam.info","nomail2me.com","nomorespamemails.com","nospam4.us","nospamfor.us","nospamthanks.info","notmailinator.com","nowmymail.com","nus.edu.sg","nwldx.com","onewaymail.com","online.ms","ovpn.to","owlpic.com","pjjkp.com","politikerclub.de","pookmail.com","prtnx.com","qq.com","quickinbox.com","recode.me","regbypass.com","rmqkr.net","rppkn.com","rtrtr.com","s0ny.net","safe-mail.net","safetymail.info","safetypost.de","sandelf.de","saynotospams.com","selfdestructingmail.com","sendspamhere.com","sharklasers.com","shitmail.me","skeefmail.com","slopsbox.com","smellfear.com","snakemail.com","sofimail.com","sofort-mail.de","sogetthis.com","spam.la","spam.su","spamavert.com","spambob.net","spambob.org","spambog.com","spambog.de","spambog.ru","spambox.info","spambox.irishspringrealty.com","spambox.us","spamcero.com","spamday.com","spamfree24.com","spamfree24.de","spamfree24.eu","spamfree24.info","spamfree24.net","spamfree24.org","spamgourmet.com","spamherelots.com","spamhole.com","spamify.com","spaminator.de","spamkill.info","spaml.com","spaml.de","spammotel.com","spamobox.com","spamspot.com","spamthis.co.uk","spamthisplease.com","supergreatmail.com","supermailer.jp","suremail.info","teewars.org","teleworm.com","tempalias.com","tempe-mail.com","tempemail.biz","tempemail.com","tempemail.net","tempinbox.co.uk","tempinbox.com","tempmail.it","tempmail2.com","tempomail.fr","temporarioemail.com.br","temporaryemail.net","temporaryinbox.com","thanksnospam.info","thankyou2010.com","thisisnotmyrealemail.com","throwawayemailaddress.com","tmailinator.com","tradermail.info","trash-amil.com","trash-mail.com","trash-mail.de","trash2009.com","trashemail.de","trashmail.at","trashmail.com","trashmail.net","trashmail.ws","trashmailer.com","trashymail.com","trashymail.net","trillianpro.com","tyldd.com","uggsrock.com","veryrealemail.com","webm4il.info","wegwerfemail.de","wh4f.org","whyspam.me","willselfdestruct.com","wuzupmail.net","yopmail.com","yuurok.com","zehnminutenmail.de","zippymail.info","zoaxe.com","10minutemail.com","disposeamail.com","dontreg.com","e4ward.com","guerrillamail.com","inbox2.info","jetable.com","kasmail.com","killmail.net","maileater.com","mailexpire.com","mailinator.com","mailmoat.com","mytrashmail.com","netmails.net","noclickemail.com","nullbox.info","pookmail.com","shortmail.net","sneakemail.com","spambob.com","spambob.org","spambox.info","spambox.org","spambox.us","spamex.com","spamfree24.net","spamfree24.org","spamgourmet.com","spamhole.com","spammotel.com","tempinbox.com","temporaryforwarding.com","temporaryinbox.com","trashmail.net","xemaps.com","yopmail.com","mailed.in","mailinator.com","trash2009.com","mailexpire.com","MailEater.com","jetable.org","onlatedotcom.info","guerrillamailblock.com","spamhole.com","uggsrock.com","TempEMail.net","smapfree24.org","smapfree24.de","smapfree24.info","smapfree24.com","smapfree24.eu","spamspot.com","spam.la","meltmail.com","anonymbox.com ","dodgit.com","E4ward.com","GishPuppy.com","haltospam.com","mailnull.com","MintEmail.com","Sneakemail.com","bumpymail.com","bsnow.net","centermail.com","centermail.net","discardmail.com","dodgeit.com","e4ward.com","e-mail.com","email.net","emailias.com","fakeinformation.com","front14.org","ghosttexter.de","jetable.net","kasmail.com","link2mail.net","mailexpire.com","mailinator.com","mailmoat.com","ma1l.bij.pl","messagebeamer.de","mytrashmail.com","naver.com","nervmich.net","netmails.net","netzidiot.de","nurfuerspam.de","oneoffemail.com","pookmail.com","privacy.net","punkass.com","sify.com","sneakemail.com","sofort-mail.de","sogetthis.com","spam.la","spambob.com","spambob.net","spambob.org","spamex.com","spamgourmet.com","spamhole.com","spaminator.de","spammotel.com","spamtrail.com","tmail.com","trash-mail.de","trashmail.net","wuzup.net","xmail.com","atvclub.msk.ru","tempinbox.com","DingBone.com","FudgeRub.com","BeefMilk.com","LookUgly.com","SmellFear.com","guerrillamailblock.com","mytempemail.com","675hosting.com","675hosting.net","675hosting.org","75hosting.com","75hosting.net","75hosting.org","ajaxapp.net","amiri.net","amiriindustries.com","emailmiser.com","etranquil.com","etranquil.net","etranquil.org","gowikibooks.com","gowikicampus.com","gowikicars.com","gowikifilms.com","gowikigames.com","gowikimusic.com","gowikinetwork.com","gowikitravel.com","gowikitv.com","iwi.net","myspaceinc.com","myspaceinc.net","myspaceinc.org","myspacepimpedup.com","ourklips.com","pimpedupmyspace.com","rklips.com","turual.com","upliftnow.com","uplipht.com","viditag.com","viewcastmedia.com","viewcastmedia.net","viewcastmedia.org","wetrainbayarea.com","wetrainbayarea.org","xagloo.co","getairmail.com","33mail.com","reallymymail.com","mailHazard.com","mailHazard.us","mailHz.me","zebins.com","zebins.eu","amail4.me","mailtothis.com","armyspy.com","cuvox.de","dayrep.com","einrot.com","fleckens.hu","gustr.com","jourrapide.com","rhyta.com","superrito.com","teleworm.us","yopmail.fr","yopmail.net","jetable.fr.nf","nospam.ze.tc","nomail.xl.cx","mega.zik.dj","speed.1s.fr","cool.fr.nf","courriel.fr.nf","moncourrier.fr.nf","monemail.fr.nf","monmail.fr.nf","guerrillamail.com","guerrillamailblock.com","sharklasers.com","guerrillamail.net","guerrillamail.org","guerrillamail.biz","spam4.me","grr.la","guerrillamail.de","spamdecoy.net","dharmatel.net","ntlhelp.net","slave-auctions.net","deadchildren.org","trbvm.com","drdrb.com"];
var isValidEmail     = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
var isThrowableEmail = new RegExp(lists.map(function(m) { return '\\b' + m + '$'; }).join('|'));

module.exports = function MailChecker(email){
  if(!isValidEmail.test(email)){return false;}
  return !isThrowableEmail.test(email);
};

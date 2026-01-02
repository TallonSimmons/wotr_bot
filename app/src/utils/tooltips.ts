// Tooltip definitions from legacy app
export const TOOLTIPS = {
  aggressive: {
    title: 'Aggressive',
    content: `<ul><li>The army of an active nation whose value = opposing army value; or</li><li>an army which has hit the stacking limit and contains the Witch King or 5 leadership.</li></ul>`,
  },
  exposed: {
    title: 'Exposed',
    content: `An empty target that a Shadow army's shortest path to is clear of enemy armies.`,
  },
  full_hand: {
    title: 'Full hand',
    content: `Holding the maximum number of allowed cards.`,
  },
  garrison: {
    title: 'Garrison',
    content: `An army inside a stronghold or in a stronghold region.`,
  },
  mobile: {
    title: 'Mobile',
    content: `An army which can move towards its target without creating threat and: <ol><li>is aggressive against its closest target, or one within the same national border, and all armies on the shortest route to it; or</li><li>would turn a passive siege aggressive at its closest target; or</li><li>has hit the stacking limit.</li></ol>`,
  },
  passive: {
    title: 'Passive',
    content: `An army that is not aggressive.`,
  },
  primary: {
    title: 'Primary',
    content: `The muster region closest to the defined target or army.`,
  },
  secondary: {
    title: 'Secondary',
    content: `The muster region closest to the primary.`,
  },
  target: {
    title: 'Target',
    content: `Order of priority when tied for distance:<ol><li>Conquered Shadow stronghold.</li><li>Free Peoples' army creating threat.</li><li>Stronghold not currently under siege by a mobile Shadow army:<ul><li>Nation at war</li><li>Active nation</li><li>Passive nation</li></ul></li><li>Unconquered Free Peoples' city:<ul><li>Nation at war</li><li>Active nation</li></ul></li><li>Lowest value garrison.</li></ol>`,
  },
  threat: {
    title: 'Threat',
    content: `A region which contains:<ul><li>An active nation Free Peoples' army within 2 regions of an unconquered Shadow stronghold with a higher value than the Shadow garrison. Exclude Free Peoples' garrisons; or</li><li>less than 4 hit points of Shadow units are in the Orthanc garrison with Saruman, and Gandalf the White is in play and a companion is in Fangorn.</li></ul>`,
  },
  threat_wome: {
    title: 'Threat',
    content: `A region which contains:<ul><li>An active nation Free Peoples' army within 2 regions of an unconquered Shadow stronghold with a higher value than the Shadow garrison. Exclude Free Peoples' garrisons; or</li><li>less than 4 hit points of Shadow units are in the Orthanc garrison with Saruman, and the Ent faction is in play.</li></ul>`,
  },
  value: {
    title: 'Value',
    content: `Point rating of army calculated as:<ul><li>+1 for each hit point</li><li>+1 for each combat die including Captain of the West (capped at 5)</li><li>+1 for each point of leadership (capped at lower of 5 or total army units)</li><li>+1 for each Captain of the West</li><li>+1 for defending in a fortification or city region</li><li>x1.5 (rounded down) for defending in a stronghold<ul><li>Mobile and threat always use this even if no siege is occurring</li><li>HP multiplied for only the five strongest units in the region</li></ul></li><li>x0.5 for sorties (rounded down)</li><li>Exclude Saruman from value when calculating if an army is mobile</li></ul>`,
  },
};

/**
 * Add tooltips to text by replacing _tooltip markers
 */
export function addTooltips(text: string, warriorsMode: boolean = false): string {
  let result = text;
  
  // Replace uppercase versions
  result = result.replaceAll('Aggressive_tooltip', createTooltipHTML('aggressive'));
  result = result.replaceAll('Exposed_tooltip', createTooltipHTML('exposed'));
  result = result.replaceAll('Full_hand_tooltip', createTooltipHTML('full_hand'));
  result = result.replaceAll('Garrison_tooltip', createTooltipHTML('garrison'));
  result = result.replaceAll('Mobile_tooltip', createTooltipHTML('mobile'));
  result = result.replaceAll('Passive_tooltip', createTooltipHTML('passive'));
  result = result.replaceAll('Primary_tooltip', createTooltipHTML('primary'));
  result = result.replaceAll('Secondary_tooltip', createTooltipHTML('secondary'));
  result = result.replaceAll('Target_tooltip', createTooltipHTML('target'));
  result = result.replaceAll('Threat_tooltip', createTooltipHTML(warriorsMode ? 'threat_wome' : 'threat'));
  result = result.replaceAll('Value_tooltip', createTooltipHTML('value'));
  
  // Replace lowercase versions
  result = result.replaceAll('aggressive_tooltip', createTooltipHTML('aggressive', true));
  result = result.replaceAll('exposed_tooltip', createTooltipHTML('exposed', true));
  result = result.replaceAll('full_hand_tooltip', createTooltipHTML('full_hand', true));
  result = result.replaceAll('garrison_tooltip', createTooltipHTML('garrison', true));
  result = result.replaceAll('mobile_tooltip', createTooltipHTML('mobile', true));
  result = result.replaceAll('passive_tooltip', createTooltipHTML('passive', true));
  result = result.replaceAll('primary_tooltip', createTooltipHTML('primary', true));
  result = result.replaceAll('secondary_tooltip', createTooltipHTML('secondary', true));
  result = result.replaceAll('target_tooltip', createTooltipHTML('target', true));
  result = result.replaceAll('threat_tooltip', createTooltipHTML(warriorsMode ? 'threat_wome' : 'threat', true));
  result = result.replaceAll('value_tooltip', createTooltipHTML('value', true));
  
  return result;
}

function createTooltipHTML(key: string, lowercase: boolean = false): string {
  const tooltip = TOOLTIPS[key as keyof typeof TOOLTIPS];
  if (!tooltip) return key;
  
  const displayText = lowercase ? key.toLowerCase() : tooltip.title;
  
  return `<div class="tooltip"><i>${displayText}</i><span class="tooltiptext">${tooltip.content}</span></div>`;
}

<?php
/**
 * @package     Joomla.Plugin
 * @subpackage  [PLUGIN_NAME]
 * @author      jumbo125
 * @copyright   Copyright (C) 2025 jumbo125. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 *
 * Fremde Skripte / Third-party libraries:
 * - Original library: MIT License Copyright (c) 2018 Biati Digital https://www.biati.digital
 */

// Sicherheitscheck
namespace Joomla\Plugin\Content\Jglightbox\Extension;

\defined('_JEXEC') or die;

use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\CMS\Factory;
use Joomla\Event\Event;
use Joomla\Event\SubscriberInterface;
use Joomla\Event\DispatcherInterface;

class Jglightbox extends CMSPlugin implements SubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            'onBeforeCompileHead' => 'onBeforeCompileHead',
        ];
    }


    public function onBeforeCompileHead(Event $event): void
    {
        $wa = Factory::getApplication()->getDocument()->getWebAssetManager();
        $wa->getRegistry()->addRegistryFile('media/plg_content_jglightbox/joomla.asset.json');

        $wa->useStyle('glightbox_style');
        $wa->useScript('glightbox_original');
        $wa->useScript('glightbox_original_inject');

        $wrapper = $this->params->get('wrapper_classes', 'lightbox_wrapper');
        $exclude = $this->params->get('exclude_selectors', '.slides img,.delete,.edit-icon img,.no-lightbox');

        Factory::getDocument()->addScriptOptions('jglightbox', [
            'wrapper' => $wrapper,
            'exclude' => $exclude,
        ]);
    }
}

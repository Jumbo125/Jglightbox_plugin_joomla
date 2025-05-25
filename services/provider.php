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
defined('_JEXEC') or die;
use Joomla\CMS\Factory;
use Joomla\CMS\Extension\PluginInterface;
use Joomla\CMS\Plugin\PluginHelper;
use Joomla\Event\DispatcherInterface;
use Joomla\DI\Container;
use Joomla\DI\ServiceProviderInterface;
use Joomla\Plugin\Content\Jglightbox\Extension\Jglightbox;
use Joomla\Registry\Registry;

return new class implements ServiceProviderInterface {
    public function register(Container $container) {
        $container->set(
            PluginInterface::class,
            function (Container $container) {
                $config = (array) PluginHelper::getPlugin('content', 'jglightbox');
                $dispatcher = $container->get(DispatcherInterface::class);

                // Plugin erzeugen
                $plugin = new Jglightbox($dispatcher, $config);

                // Plugin-Parameter manuell setzen
                $plugin->params = new Registry($config['params'] ?? []);

                // Joomla Application zuweisen
                $plugin->setApplication(Factory::getApplication());

                return $plugin;
            }
        );
    }
};

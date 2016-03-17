<?php
# Run tests from the repository root directory:
# $ composer install && ./vendor/bin/phpunit test/platform.php.test.php

require(__DIR__.'/../platform/php/mailchecker.php');

class MailCheckerTest extends PHPUnit_Framework_TestCase
{
    protected $mailChecker = null;

    public function assertIsValidResult($expected, $email) {
        $actual = MailChecker($email);
        $this->assertEquals($expected, $actual);
    }

    public function isValid($email) {
        $this->assertIsValidResult(true, $email);
    }

    public function isInvalid($email) {
        $this->assertIsValidResult(false, $email);
    }

    public function testReturnTrueIfValidEmail() {
        $this->isValid('plop@plop.com');
        $this->isValid('my.ok@ok.plop.com');
        $this->isValid('my+ok@ok.plop.com');
        $this->isValid('my=ok@ok.plop.com');
        $this->isValid('ok@gmail.com');
        $this->isValid('ok@hotmail.com');
    }

    public function testReturnFalseIfEmailInvalid() {
        $this->isInvalid('');
        $this->isInvalid('  ');
        $this->isInvalid('plopplop.com');
        $this->isInvalid('my+ok@ok=plop.com');
        $this->isInvalid('my,ok@ok.plop.com');
    }

    public function testReturnFalseIfThrowableDomain() {
        $this->isInvalid('ok@tmail.com');
        $this->isInvalid('ok@33mail.com');
        //$this->isInvalid('ok@ok.33mail.com');
        $this->isInvalid('ok@guerrillamailblock.com');
    }
}
?>

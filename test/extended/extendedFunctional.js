import sel from '../../data/selectors';
import exp from "../../data/expected.json";

describe('Upload images', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-086 PlaceHolder is present', function () {
        let placeHolder = $(sel.placeholder).isDisplayed();
        expect(placeHolder).toEqual(true);
    });

    it('TC-087 PlaceHolder text is \'Click or drag and drop\'', function () {
        let placeHolder = $(sel.placeholder).getText();
        expect(placeHolder).toEqual(exp.placeholder);
    });

    it('TC-088 Click on the field to upload the image ', function () {
        $(sel.placeholder).click();

    });

    /*            $(sel.age).setValue('1234567890');
                $(sel.storyType).click();
                $$(sel.storyList)[6].click();
                let submitBtn = $(sel.submit).isEnabled();
                expect(smitBtn).toEqual(true);           })
        /*
            it('TC-027 Submit button is enable after fields 1-4 are filled in with valid values', function () {
                browser.refresh();

                $(sel.name).setValue('LadyBug007');
                $$(sel.radioButtons)[1].click();
                $(sel.age).setValue('1234567890');
                $(sel.storyType).click();
                $$(sel.storyList)[6].click();
                $(sel.submit).click();

                browser.pause(2000);
                let tryAgainButton = $(sel.tryAgain).isDisplayed();
                expect(tryAgainButton).toEqual(true);
            });
        */
});